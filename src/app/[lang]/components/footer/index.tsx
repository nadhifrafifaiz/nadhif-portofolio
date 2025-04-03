import { Suspense } from "react";
import PageSpeedChecker from "./page-speed";

export default async function Footer() {
  return (
    <div>
      IM A FOOTER
      <Suspense fallback={<div>Loading...</div>}>
        <PageSpeedChecker />
      </Suspense>
    </div>
  );
}
