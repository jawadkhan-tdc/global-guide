import React, { Suspense } from "react";
import AdminRelease from "./_components/AdminRelease";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminRelease />
    </Suspense>
  );
}

export default page;
