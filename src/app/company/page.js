import React, { Suspense } from "react";
import Company from "./_components/Company";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Company />
    </Suspense>
  );
}

export default page;
