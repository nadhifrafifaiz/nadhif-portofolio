"use client";
import { useState, useEffect } from "react";
import getPageSpeed from "@/api/page-speed";
import { PageSpeedResponse } from "@/api/page-speed/page-speed.interface";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import { usePathname } from "next/navigation";
import { defaultPageSpeed } from "@/constant/page-speed";

export default function PageSpeedChecker() {
  const pathname = usePathname();
  const [showSeo, setShowSeo] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  const [pageData, setPageData] = useState<PageSpeedResponse | null>(null);

  const dictionary = useDictionary();

  const fetchPageSpeedData = async (attempt = 0): Promise<void> => {
    const localPageSpeedData = localStorage.getItem("pageSpeedData");
    try {
      if (localPageSpeedData) {
        try {
          setPageData(JSON.parse(localPageSpeedData));
        } catch {
          setPageData(defaultPageSpeed);
          localStorage.setItem(
            "pageSpeedData",
            JSON.stringify(defaultPageSpeed),
          );
        }
      } else {
        setPageData(defaultPageSpeed);
        localStorage.setItem("pageSpeedData", JSON.stringify(defaultPageSpeed));
      }
      const response = await getPageSpeed(`${BASE_URL}`);
      setPageData(response);
      localStorage.setItem("pageSpeedData", JSON.stringify(response));
    } catch (error) {
      if (localPageSpeedData) {
        try {
          setPageData(JSON.parse(localPageSpeedData));
        } catch {
          setPageData(defaultPageSpeed);
          localStorage.setItem(
            "pageSpeedData",
            JSON.stringify(defaultPageSpeed),
          );
        }
      } else {
        setPageData(defaultPageSpeed);
        localStorage.setItem("pageSpeedData", JSON.stringify(defaultPageSpeed));
      }
    }
  };

  useEffect(() => {
    fetchPageSpeedData();
  }, []);

  const getScoreColorBorder = (score: number) => {
    if (score >= 0.9) return "border-green-500 text-green-500";
    if (score >= 0.5) return "border-yellow-500 text-yellow-500";
    return "border-red-500 text-red-500";
  };

  return (
    <div className="flex w-[344px] flex-col gap-1">
      <div className="grid max-w-md grid-cols-4 gap-2">
        {pageData ? (
          Object.entries(pageData?.lighthouseResult?.categories).map(
            ([key, { title, score }]) => {
              if (title === "SEO") {
                return (
                  <TooltipProvider key={key} delayDuration={1}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          onClick={() => setShowSeo(true)}
                          className={`flex h-20 w-20 flex-col items-center hover:cursor-pointer`}
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold ${getScoreColorBorder(score)}`}
                          >
                            {score >= 0.9
                              ? Math.round(score * 100)
                              : showSeo
                                ? Math.round(score * 100)
                                : "?"}
                          </div>
                          <p className="mt-2 w-20 text-center text-xs font-medium">
                            {title}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="w-[10rem]">
                        {dictionary.footer.score}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              } else {
                return (
                  <div
                    key={key}
                    className={`flex h-20 w-20 flex-col items-center`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 pt-1 text-sm font-semibold ${getScoreColorBorder(score)}`}
                    >
                      {Math.round(score * 100)}
                    </div>
                    <p className="mt-2 w-20 text-center text-xs font-medium">
                      {title}
                    </p>
                  </div>
                );
              }
            },
          )
        ) : (
          <>
            <div className="flex h-20 w-20 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-color-offset bg-bg-color-offset pt-1 text-sm font-semibold`}
              ></div>
              <p className="mt-2 w-20 text-center text-xs font-medium"></p>
            </div>
            <div className="flex h-20 w-20 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-color-offset bg-bg-color-offset pt-1 text-sm font-semibold`}
              ></div>
              <p className="mt-2 w-20 text-center text-xs font-medium"></p>
            </div>
            <div className="flex h-20 w-20 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-color-offset bg-bg-color-offset pt-1 text-sm font-semibold`}
              ></div>
              <p className="mt-2 w-20 text-center text-xs font-medium"></p>
            </div>
            <div className="flex h-20 w-20 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-color-offset bg-bg-color-offset pt-1 text-sm font-semibold`}
              ></div>
              <p className="mt-2 w-20 text-center text-xs font-medium"></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
