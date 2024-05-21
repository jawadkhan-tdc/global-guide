import React, { Suspense } from "react";
import CompanyData from "./_components/CompanyData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CompanyData />
    </Suspense>
  );
}

export default page;
