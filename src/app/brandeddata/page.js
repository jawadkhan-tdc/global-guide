import React, { Suspense } from "react";
import BrandedData from "./_components/BrandedData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrandedData />
    </Suspense>
  );
}

export default page;
