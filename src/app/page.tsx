import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

const Home = () => (
  <main>
    <Hero />
    <Work />
    <About />
    <Skills />
    <Research />
    <Contact />
  </main>
);

export default Home;
