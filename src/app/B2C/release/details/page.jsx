"use client";
import React, { Suspense } from "react";
import DetailsPage from "./_components/DetailsPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <DetailsPage />
      <Footer/>
    </Suspense>
  );
};

export default Page;
