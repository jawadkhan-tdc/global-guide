import React, { Suspense } from "react";
import ReleasedData from "./_components/ReleasedData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReleasedData />
    </Suspense>
  );
}

export default page;
