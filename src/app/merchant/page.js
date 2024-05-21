import React, { Suspense } from "react";
import Merchant from "./_components/Merchant";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Merchant />
    </Suspense>
  );
}

export default page;
