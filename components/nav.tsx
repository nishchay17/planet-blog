"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Links } from "@/config/links";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className={`w-full shadow-sm ${path === "/" && "bg-green-50"}`}>
      <div className="flex items-center justify-between h-14 w-full container mx-auto">
        <Link href={Links.landing.href}>
          <h2 className="text-sm ml-2 font-medium underline">
            {Links.landing.title}
          </h2>
        </Link>
        <div className="flex gap-3">
          <Link href={Links.allBlogs.href}>
            <p className="text-sm ml-2 font-medium underline">
              {Links.allBlogs.title}
            </p>
          </Link>
          <Link href={Links.tags.href}>
            <p className="text-sm ml-2 font-medium underline">
              {Links.tags.title}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
