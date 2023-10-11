import { ReactNode } from "react";

import Nav from "@/components/nav";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <main className="container my-10 sm:my-15">{children}</main>
    </>
  );
}
