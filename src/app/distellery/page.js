import React, { Suspense } from "react";
import Distellery from "./_components/Distellergy";
function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Distellery />
    </Suspense>
  );
}

export default page;
