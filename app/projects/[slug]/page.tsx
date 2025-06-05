import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import YouTubePlayer from "@/components/youtube-player";
import { basePath } from "@/lib/config";
import InteractiveCursor from "@/components/interactive-cursor";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <InteractiveCursor />

      {/* Header with back button */}
      <div className="max-w-5xl mx-auto pt-8 px-4 md:px-6">
        <Link href="/#projects">
          <Button variant="ghost" className="group mb-8">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project Hero */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
        <div className="grid gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          {project.videoId && (
            <YouTubePlayer
              videoId={project.videoId}
              title={project.title}
              className="aspect-video w-full"
            />
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>{project.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>{project.problem}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Highlight</h2>
              <div className="prose prose-lg dark:prose-invert">
                {project.highlight.map((v, i) => (
                  <li className="flex items-center" key={i}>
                    <Sparkles className="h-4 w-4 text-primary mr-2" />
                    <span>{v}</span>
                  </li>
                ))}
              </div>
            </section>

            {project.screenshots && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden border border-muted"
                    >
                      <img
                        src={`${basePath}${screenshot}` || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Details
                  </h3>
                  <Separator className="mb-4" />
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">
                        Timeline
                      </dt>
                      <dd>{project.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Client</dt>
                      <dd>{project.client}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <Separator className="mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  {project.liveUrl && (
                    <Button className="w-full" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
