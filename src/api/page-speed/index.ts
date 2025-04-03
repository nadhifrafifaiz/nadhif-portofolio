import { PageSpeedResponse } from "./page-speed.interface";

export default async function getPageSpeed(url: string) {
  const API_KEY = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY; // Avoid exposing API key
  const PAGESPEED_URL =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

  try {
    if (!url) {
      throw new Error("URL parameter is required");
    }

    const response = await fetch(
      `${PAGESPEED_URL}?url=${encodeURIComponent(url)}&key=${API_KEY}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=desktop`,
      {
        next: { revalidate: 0 },
      },
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as PageSpeedResponse;
  } catch (error) {
    console.error("PageSpeed API Error:", error);
    throw error;
  }
}
