import React, { Suspense } from "react";
import Brands from "./_components/Brands";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Brands />
    </Suspense>
  );
}

export default page;
