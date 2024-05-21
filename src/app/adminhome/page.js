import React, { Suspense } from "react";
import AdminHome from "./_components/AdminHome";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminHome />
    </Suspense>
  );
}

export default page;
