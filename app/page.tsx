import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Layers,
  Rocket,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import InteractiveCursor from "@/components/interactive-cursor";
import ProjectCard from "@/components/project-card";
import SkillsCloud from "@/components/skills-cloud";
import ContactForm from "@/components/contact-form";
import constants from "@/constants/constant.json";
import { projects } from "@/lib/projects-data";

export default function Home() {
  const enumData = constants;
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <InteractiveCursor />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500/20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-pink-500/20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-blue-500/20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-green-500/20 animate-blob animation-delay-3000"></div>
        </div>

        <div className="z-10 text-center space-y-6 max-w-3xl">
          <Badge className="px-4 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4">
            Full Stack Developer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Hello, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{enumData.nick_name}</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300/60 -rotate-1 z-0"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">
            I build <span className="text-primary font-medium">playful</span>{" "}
            digital experiences with
            <span className="text-purple-500 font-medium"> creative</span> code
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="rounded-full group">
              View My Work
              <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Get In Touch
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              {enumData.about_me_tag}
            </h2>
            <p className="text-muted-foreground text-lg">
              {enumData.about_me_desc_1}
            </p>
            <p className="text-muted-foreground text-lg">
              {enumData.about_me_desc_2}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-xl relative z-10 bg-muted">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl border-4 border-background shadow-xl bg-purple-100 dark:bg-purple-950/30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/2 aspect-square rounded-2xl border-4 border-background shadow-xl bg-blue-100 dark:bg-blue-950/30 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in full stack
            development, UI/UX design, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((v) => (
            <ProjectCard
              title={v.title}
              description={v.shortDescription}
              image={v.image}
              tags={v.tags}
              link={v.slug}
              key={v.id}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
            <Layers className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              My Toolkit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tools, languages, and frameworks I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Frontend</h3>
                <p className="text-muted-foreground mb-4">
                  Creating responsive, accessible, and beautiful user
                  interfaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>React, Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>HTML5, CSS3, JavaScript, TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Tailwind CSS, Styled Components</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Framer Motion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend</h3>
                <p className="text-muted-foreground mb-4">
                  Building robust APIs and server-side applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Node.js, Express, NestJS</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>MongoDB, MySQL</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>REST API design</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Firebase, Supabase</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Other Skills</h3>
                <p className="text-muted-foreground mb-4">
                  Additional tools and skills that complete my toolkit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>UI/UX Design, Figma</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Git, GitHub, CI/CD</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Docker, Vercel</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span>Jest</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <SkillsCloud />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and interesting ideas.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{enumData.mobile}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{enumData.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{enumData.location}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Link
                href={enumData.linkedin}
                className="h-10 w-10 rounded-full bg-background border border-input flex items-center justify-center hover:bg-muted transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={enumData.github}
                className="h-10 w-10 rounded-full bg-background border border-input flex items-center justify-center hover:bg-muted transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background border border-input flex items-center justify-center hover:bg-muted transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 mx-2 text-primary" />
            <p className="font-bold text-lg">{enumData.tag_name}</p>
            <Code className="h-6 w-6 mx-2 text-primary" />
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Designed & Built
            with ❤️
          </p>

          <div className="mt-4 md:mt-0">
            <Button variant="ghost" size="sm">
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
