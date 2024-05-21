import React, { Suspense } from "react";
import BrandsData from "./_components/BrandsData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrandsData />
    </Suspense>
  );
}

export default page;
