"use client";
import { useState, useEffect } from "react";
import getPageSpeed from "@/api/page-speed";
import { PageSpeedResponse } from "@/api/page-speed/page-speed.interface";

export default function PageSpeedChecker() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  const [pageData, setPageData] = useState<PageSpeedResponse | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  const fetchPageSpeedData = async () => {
    try {
      const response = await getPageSpeed(`${BASE_URL}`);

      setPageData(response);
      localStorage.setItem("pageSpeedData", JSON.stringify(response));
    } catch (error) {
      if (retryCount < MAX_RETRIES) {
        setRetryCount((prev) => prev + 1);
        setTimeout(fetchPageSpeedData, RETRY_DELAY);
      } else {
        const localPageSpeedData = localStorage.getItem("pageSpeedData");
        if (localPageSpeedData) {
          setPageData(JSON.parse(localPageSpeedData));
        } else {
          setPageData(null);
        }
      }
    }
  };

  useEffect(() => {
    const localPageSpeedData = localStorage.getItem("pageSpeedData");
    if (localPageSpeedData) {
      setPageData(JSON.parse(localPageSpeedData));
    } else {
      setPageData(null);
    }
    fetchPageSpeedData();
  }, [retryCount]);

  const getScoreColorBorder = (score: number) => {
    if (score >= 0.9) return "border-green-500 text-green-500";
    if (score >= 0.5) return "border-yellow-500 text-yellow-500";
    return "border-red-500 text-red-500";
  };

  return (
    <div className="grid max-w-md grid-cols-4 gap-2">
      {pageData ? (
        Object.entries(pageData?.lighthouseResult?.categories).map(
          ([key, { title, score }]) => (
            <div key={key} className="flex h-20 w-20 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold text-white ${getScoreColorBorder(score)}`}
              >
                {Math.round(score * 100)}
              </div>
              <p className="mt-2 w-20 text-center text-xs font-medium">
                {title}
              </p>
            </div>
          ),
        )
      ) : (
        <>
          <div className="flex h-20 w-20 flex-col items-center">
            <div
              className={`bg-bg-offset flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold text-white`}
            ></div>
            <p className="mt-2 w-20 text-center text-xs font-medium"></p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center">
            <div
              className={`bg-bg-offset flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold text-white`}
            ></div>
            <p className="mt-2 w-20 text-center text-xs font-medium"></p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center">
            <div
              className={`bg-bg-offset flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold text-white`}
            ></div>
            <p className="mt-2 w-20 text-center text-xs font-medium"></p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center">
            <div
              className={`bg-bg-offset flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold text-white`}
            ></div>
            <p className="mt-2 w-20 text-center text-xs font-medium"></p>
          </div>
        </>
      )}
    </div>
  );
}
