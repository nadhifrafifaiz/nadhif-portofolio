"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function HomepageBannerAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="mx-auto w-[90%] max-w-[1200px] pb-8 lg:pb-20 xl:w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2074778696835838"
        data-ad-slot="9715822463"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
