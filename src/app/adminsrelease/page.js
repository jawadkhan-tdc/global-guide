import React, { Suspense } from "react";
import AdminsRelease from "./_components/AdminsRelease";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminsRelease />
    </Suspense>
  );
}

export default page;
