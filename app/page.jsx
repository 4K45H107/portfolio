import About from "./ui/About";
import Achievements from "./ui/Achievements";
import Hero from "./ui/Hero";
import Nav from "./ui/Nav";
import Projects from "./ui/Projects";
import Work from "./ui/Work";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Achievements />
      <Nav />
    </main>
  );
}
