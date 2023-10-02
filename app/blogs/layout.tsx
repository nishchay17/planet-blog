import { ReactNode } from "react";

import Nav from "@/components/nav";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <main className="container max-w-3xl">{children}</main>
    </>
  );
}
