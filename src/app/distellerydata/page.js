import React, { Suspense } from "react";
import DistelleryData from "./_components/DistelleryData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DistelleryData />
    </Suspense>
  );
}

export default page;
