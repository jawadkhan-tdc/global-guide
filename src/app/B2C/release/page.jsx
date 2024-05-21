"use client";
import React, { Suspense } from "react";
import ReleasePage from "./_components/ReleasePage";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Navbar/>
      <ReleasePage />
    </Suspense>
  );
};

export default Page;
