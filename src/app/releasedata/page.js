import React, { Suspense } from "react";
import ReleaseData from "./_components/ReleaseData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReleaseData />
    </Suspense>
  );
}

export default page;
