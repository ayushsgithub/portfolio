import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { PageInfo, Project, Skill } from "../typing";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { sanityClient } from "@component/sanity";
import { getPageInfo } from "./api/getPageInfo";
import { getSkills } from "./api/getSkills";
import { getProjects } from "./api/getProjects";

type Props = {
  skills: Skill[];
  pageInfo: PageInfo | null;
  projects: Project[];
};

export default function Home({ pageInfo, skills, projects }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Head>
        <title>Portfolio | Ayush</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Explore the portfolio of Ayush, a Frontend Developer specializing in React, Next.js, Full Stack and Cloud Native Enthusiast. Discover projects, skills, and experience that demonstrate expertise in building efficient and scalable web applications."
        />
        <meta
          name="keywords"
          content="Ayush Kumar, Frontend Developer, Full Stack Developer, React, Next.js, JavaScript, Portfolio, Software Developer, Web Development, Projects"
        />
        <meta
          property="og:title"
          content="Ayush | Frontend Developer & Software Development Enthusiast"
        />
        <meta
          property="og:description"
          content="Showcasing Ayush's expertise in Frontend and Software Development through various projects and case studies."
        />
        <meta
          property="og:image"
          content="/portfolioImages/portfolio_desktop.png"
        />
        <meta property="og:url" content="https://ayushsport.netlify.app" />
        <meta property="og:site_name" content="Ayush's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ayush | Frontend Developer & Software Development Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Showcasing Ayush's expertise in Frontend and Software Development through various projects and case studies."
        />
        <meta
          name="twitter:image"
          content="/portfolioImages/portfolio_desktop.png"
        />
        <meta name="twitter:site" content="@ayushisreal" />

        <link rel="icon" href="AyushBgLights.png" />
        <link rel="canonical" href="https://ayushsport.netlify.app" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        {pageInfo && <Hero pageInfo={pageInfo} />}
      </section>

      <section id="about" className="snap-center">
        {pageInfo && <About pageInfo={pageInfo} />}
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="experience" className="snap-start">
        <Experience />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero" className="md:hidden">
        <footer className="sticky md:bottom-5 bottom-7 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="md:h-8 md:w-8 h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="/AyushBgLights.png"
              alt="/"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const skills: Skill[] = await sanityClient.fetch(getSkills);
    const pageInfo: PageInfo = await sanityClient.fetch(getPageInfo);
    const projects: Project[] = await sanityClient.fetch(getProjects);

    return {
      props: {
        skills,
        pageInfo,
        projects,
      },
      revalidate: 20,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        skills: [],
        pageInfo: null,
        projects: [],
      },
      revalidate: 20,
    };
  }
};
