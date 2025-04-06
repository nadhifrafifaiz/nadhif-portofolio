import { parseStringPromise } from "xml2js";

export async function getMediumPosts() {
  const response = await fetch("https://medium.com/feed/@tech.nadhifrafifaiz", {
    next: {
      revalidate: 60,
    },
  });
  const xmlText = await response.text();

  const parsed = await parseStringPromise(xmlText, { explicitArray: false });

  let items = parsed.rss.channel.item;

  // Ensure items is always an array
  if (!Array.isArray(items)) {
    items = [items]; // Convert single object to array
  }

  return items.map((item: any) => {
    const title = item.title;
    const link = item.link;
    const pubDate = new Date(item.pubDate).toDateString();
    const content = item["content:encoded"] || "";

    // Extract first image using regex
    const imageMatch = content.match(/<img.*?src="(.*?)"/);
    const imageUrl = imageMatch ? imageMatch[1] : null;
    const categories = item.category
      ? Array.isArray(item.category)
        ? item.category
        : [item.category]
      : [];

    return { title, link, pubDate, imageUrl, categories };
  });
}
