import { Hero, Featured, Tech } from "@/components/landing";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <Tech />
    </>
  );
}
