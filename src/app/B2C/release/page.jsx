"use client";
import React, { Suspense } from "react";
import ReleasePage from "./_components/ReleasePage";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReleasePage />
    </Suspense>
  );
};

export default Page;
