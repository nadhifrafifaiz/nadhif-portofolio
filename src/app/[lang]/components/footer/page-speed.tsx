import getPageSpeed from "@/api/page-speed";
import { PageSpeedResponse } from "@/api/page-speed/page-speed.interface";

export default async function PageSpeedChecker() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  let pageData: PageSpeedResponse = {} as PageSpeedResponse;

  try {
    const response = await getPageSpeed(`${BASE_URL}`);

    pageData = response;
  } catch (error) {
    console.error("Error fetching PageSpeed data:", error);
  }

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "bg-green-500";
    if (score >= 0.5) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-2 gap-4 p-4">
        {Object.entries(pageData.lighthouseResult.categories).map(
          ([key, { title, score }]) => (
            <div key={key} className="flex flex-col items-center">
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full text-xl font-bold text-white ${getScoreColor(score)}`}
              >
                {Math.round(score * 100)}
              </div>
              <p className="mt-2 font-medium">{title}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
