"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function HomepageBannerAd() {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    const adElement = adRef.current;

    if (!adElement) {
      return;
    }

    try {
      const adSenseStatus = adElement.getAttribute("data-adsbygoogle-status");

      if (!adSenseStatus) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {}
  }, []);

  return (
    <div className="mx-auto w-[90%] max-w-[1200px] pb-8 lg:pb-20 xl:w-full">
      <ins
        ref={adRef}
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
