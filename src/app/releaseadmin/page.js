import React, { Suspense } from "react";
import ReleasesAdmin from "./_components/ReleasesAdmin";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReleasesAdmin />
    </Suspense>
  );
}

export default page;
