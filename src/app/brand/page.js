import React, { Suspense } from "react";
import Brand from "./_components/Brand";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Brand />
    </Suspense>
  );
}

export default page;
