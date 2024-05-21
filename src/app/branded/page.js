import React, { Suspense } from "react";
import Branded from "./_components/Branded";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Branded />
    </Suspense>
  );
}

export default page;
