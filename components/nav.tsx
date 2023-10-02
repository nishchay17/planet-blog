"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { Links } from "@/config/links";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const session = useSession();
  const path = usePathname();

  const isAuth = session.status === "authenticated";
  const authLink = isAuth
    ? Links.dashboard
    : path === Links.signin.href
    ? Links.signup
    : Links.signin;

  return (
    <nav className={`w-full shadow-sm ${path === "/" && "bg-green-50"}`}>
      <div className="flex items-center justify-between h-14 w-full container mx-auto">
        <Link href={Links.landing.href}>
          <div className="flex items-center">
            <h2 className="text-sm ml-2 font-medium">Home</h2>
          </div>
        </Link>
        <Link href={authLink.href} prefetch>
          <Button size="sm" variant="ghost" className="font-medium">
            {authLink.title}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
