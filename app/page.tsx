import Nav      from "@/components/Nav";
import Hero     from "@/components/Hero";
import About    from "@/components/About";
import Skills   from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";
import { CONTENT } from "@/constants/content";

export default function Home() {
  return (
    <>
      <Nav      nav={CONTENT.nav} />
      <main>
        <Hero     hero={CONTENT.hero} />
        <About    about={CONTENT.about} />
        <Skills   skills={CONTENT.skills} />
        <Projects projects={CONTENT.projects} />
        <Contact  contact={CONTENT.contact} />
      </main>
      <Footer   footer={CONTENT.footer} />
    </>
  );
}
