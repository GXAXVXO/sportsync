"use client";
import { SiteHeader } from "@/components/site-header"
import { useEffect, useState } from "react";

export default function Page() {



  useEffect(() => {
    
  }, []);

  return (

    <>
      <SiteHeader title="Ligas" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            page
          </div>
        </div>
      </div>
    </>

  )
}
