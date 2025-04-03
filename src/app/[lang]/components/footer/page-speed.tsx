"use client";
import { useState, useEffect } from "react";
import getPageSpeed from "@/api/page-speed";
import { PageSpeedResponse } from "@/api/page-speed/page-speed.interface";

export default function PageSpeedChecker() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  const [pageData, setPageData] = useState<PageSpeedResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const MAX_RETRIES = 3; // Maximum number of retries
  const RETRY_DELAY = 2000; // Delay in milliseconds before retrying (2 seconds)

  const fetchPageSpeedData = async () => {
    try {
      const response = await getPageSpeed(`${BASE_URL}`);
      setPageData(response);
      setError(null); // Reset error if the fetch is successful
    } catch (error) {
      setError("Failed to load PageSpeed data. Retrying...");
      if (retryCount < MAX_RETRIES) {
        setRetryCount((prev) => prev + 1);
        setTimeout(fetchPageSpeedData, RETRY_DELAY); // Retry after delay
      } else {
        setError("Failed to load PageSpeed data after multiple attempts.");
      }
    }
  };

  useEffect(() => {
    fetchPageSpeedData();
  }, [retryCount]); // Retry when retryCount changes

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "bg-green-500";
    if (score >= 0.5) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (error) return <div>{error}</div>; // Show error message if there's an issue

  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-2 gap-4 p-4">
        {pageData &&
          Object.entries(pageData?.lighthouseResult?.categories).map(
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
