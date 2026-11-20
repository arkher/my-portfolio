import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

const Home = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getContent(lang);

  return (
    <main>
      <Hero profile={content.profile} hero={content.hero} />
      <Work work={content.work} dates={content.dates} />
      <About about={content.about} />
      <Skills skills={content.skills} />
      <Research research={content.research} />
      <Contact contact={content.contact} profile={content.profile} />
    </main>
  );
};

export default Home;
