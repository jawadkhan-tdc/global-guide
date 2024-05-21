import React from "react";
import MerchantData from "./_components/MerchantData";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MerchantData />
    </Suspense>
  );
}

export default page;
