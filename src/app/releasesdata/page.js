import React, { Suspense } from "react";
import ReleasesData from "./_components/ReleasesData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReleasesData />
    </Suspense>
  );
}

export default page;
