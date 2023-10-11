import { Hero, Featured, Tech } from "@/components/landing";
import Recent from "@/components/landing/recent";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <Recent />
      <Tech />
    </>
  );
}
