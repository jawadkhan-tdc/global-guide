import React, { Suspense } from "react";
import BrandData from "./_components/BrandData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrandData />
    </Suspense>
  );
}

export default page;
