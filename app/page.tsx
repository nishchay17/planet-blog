import { analytics } from "@/action/analytics";
import { Hero, Featured, Tech } from "@/components/landing";
import Recent from "@/components/landing/recent";
import Nav from "@/components/nav";

export default function Home() {
  analytics("Home page visited");
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
