"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "@/action/analytics";

function Analytics({ children }: { children: React.ReactNode }) {
  const param = usePathname();
  useEffect(() => {
    analytics(param, `User visited: ${param} page`);
  }, [param]);
  return <>{children}</>;
}

export default Analytics;
