"use client";
import React, { Suspense } from "react";
import DetailsPage from "./_components/DetailsPage";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsPage />
    </Suspense>
  );
};

export default Page;
