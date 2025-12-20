import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Users, Target, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TeamTurnaround() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.webp" alt="Martin Tech Labs Logo" className="h-8 w-8 rounded-sm object-contain" />
              <span>Martin Tech Labs</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/#case-studies" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <Button variant="outline" className="font-mono text-xs" asChild>
              <a href="https://www.linkedin.com/in/stephencmartin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 border-b overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="/images/hero-bg.png" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-10">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary" asChild>
              <a href="/#case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </a>
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="font-mono text-primary border-primary/50 bg-primary/10 px-4 py-1">
                  Leadership & Hiring
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono">
                  Building a High-Performance Engineering Culture
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  How we transformed a struggling engineering team with high turnover into a stable, high-velocity unit.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/src/assets/diagram-team-turnaround.png" 
                  alt="Team Structure Diagram" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* The Challenge */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive text-sm">01</span>
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The founders were frustrated by a lack of visibility into what engineering was doing. Deadlines were constantly missed, and developer turnover was high. They didn't know if they had the right people in the right seats, or if their expectations were unrealistic.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                    <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                      <Users className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">High Developer Turnover</span>
                    </li>
                    <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                      <Target className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">Missed Deadlines</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                {/* The Strategy */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">02</span>
                    The Strategy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Culture isn't just about perks; it's about clarity and impact. I established clear engineering metrics (DORA) to make performance visible and objective. I mentored the lead engineer to step up into a management role and restructured the hiring process to test for "product-mindedness," not just coding skills.
                  </p>
                  <div className="bg-card border rounded-xl p-6 space-y-4">
                    <h3 className="font-bold font-mono">Key Interventions</h3>
                    <div className="grid gap-4">
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-sm">DORA Metrics</h4>
                          <p className="text-sm text-muted-foreground">Started tracking Deployment Frequency and Lead Time to Change to baseline performance.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-sm">Hiring Pipeline</h4>
                          <p className="text-sm text-muted-foreground">Created a standardized interview rubric to reduce bias and identify culture-add candidates.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-sm">Career Ladders</h4>
                          <p className="text-sm text-muted-foreground">Defined clear growth paths for engineers so they knew how to advance without leaving.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* The Results */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500 text-sm">03</span>
                    The Results
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The transformation was palpable. Deployment frequency tripled as the team gained confidence. Most importantly, we retained 100% of key talent over the next year, and the founders finally felt they had a partner in engineering rather than a black box.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 pt-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">3x</span>
                        <span className="text-sm font-medium text-muted-foreground">Deployment Freq</span>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">100%</span>
                        <span className="text-sm font-medium text-muted-foreground">Retention</span>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">High</span>
                        <span className="text-sm font-medium text-muted-foreground">Team Morale</span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-bold font-mono text-lg">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Linear</Badge>
                      <Badge variant="secondary">Notion</Badge>
                      <Badge variant="secondary">GitHub Actions</Badge>
                      <Badge variant="secondary">Datadog</Badge>
                      <Badge variant="secondary">Slack</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold font-mono text-lg">People problems?</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Engineering is a team sport. Let's build a championship team.
                    </p>
                    <Button size="lg" variant="secondary" className="w-full font-mono" asChild>
                      <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                        Schedule a Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t bg-muted/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono font-bold text-sm">
            <img src="/images/logo.webp" alt="Martin Tech Labs Logo" className="h-6 w-6 rounded-sm object-contain" />
            <span>Martin Tech Labs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Martin Tech Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
