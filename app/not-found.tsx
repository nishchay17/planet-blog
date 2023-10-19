import Link from "next/link";

import LandingNav from "@/components/nav";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <LandingNav />
      <div className="h-[calc(100vh-56px)] flex justify-center items-center flex-col">
        <h1 className="text-center px-4 text-2xl md:text-4xl font-semibold">
          404 <br /> Page not found!
        </h1>
        <Link href={"/"}>
          <Button className="mt-5">Click here to go back</Button>
        </Link>
      </div>
    </>
  );
}
