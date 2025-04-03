import { Suspense } from "react";
import PageSpeedChecker from "./page-speed";

export default async function Footer() {
  return (
    <div>
      NEXT_PUBLIC_BASE_URL: {process.env.NEXT_PUBLIC_BASE_URL}
      <br />
      NEXT_PUBLIC_PAGESPEED_API_KEY: {process.env.NEXT_PUBLIC_PAGESPEED_API_KEY}
      <Suspense fallback={<div>Loading...</div>}>
        <PageSpeedChecker />
      </Suspense>
    </div>
  );
}
