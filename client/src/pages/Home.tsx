import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle2, Code2, Cpu, Layers, Terminal, Rocket, ShieldCheck, BrainCircuit } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <img src="/images/logo.webp" alt="Martin Tech Labs Logo" className="h-8 w-8 rounded-sm object-contain" />
            <span>Martin Tech Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <Button variant="outline" className="font-mono text-xs" asChild>
              <a href="https://www.linkedin.com/in/stephencmartin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/images/hero-bg.png" 
              alt="Technical Blueprint Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge variant="outline" className="font-mono text-primary border-primary/50 bg-primary/10 px-4 py-1">
                Fractional CTO Services
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
                Move Projects From <span className="text-muted-foreground line-through decoration-destructive decoration-4">Stuck</span> to <span className="text-primary">Shipped</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Helping Founders Ship Their First Product Fast with AI-Accelerated Engineering Teams. 
                I fix broken processes, speed up delivery, and prepare platforms to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="font-mono group" asChild>
                  <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="font-mono" asChild>
                  <a href="#case-studies">View Case Studies</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-muted/30 border-b">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-mono">Your Challenges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Early-stage founders often struggle because they're not sure how to build their product the right way. 
                  Execution slows, priorities get fuzzy, and it's unclear who to hire to fix it.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 border rounded-lg bg-background/50">
                    <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-destructive font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="font-bold">The Wrong Approach</h3>
                      <p className="text-sm text-muted-foreground">Without a senior technical leader, it's easy to overbuild or choose the wrong stack.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 border rounded-lg bg-background/50">
                    <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-destructive font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Hiring Mismatches</h3>
                      <p className="text-sm text-muted-foreground">Bringing on engineers who can't deliver or don't fit the startup pace.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 border rounded-lg bg-background/50">
                    <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-destructive font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Rising Tech Debt</h3>
                      <p className="text-sm text-muted-foreground">Delays and messy codebases that become impossible to maintain.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                <Card className="relative border-primary/20 bg-background/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="font-mono text-primary">The Solution</CardTitle>
                    <CardDescription>Real results, not just advice.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Getting products from prototype to production</span>
                    </div>
                    <Separator />
                    <div className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Scalable Architecture reviews and making systems reliable</span>
                    </div>
                    <Separator />
                    <div className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Technical Leadership: hiring, coaching, and metrics</span>
                    </div>
                    <Separator />
                    <div className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>AI-Accelerated Engineering workflows</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <Badge variant="outline" className="mb-4 font-mono">Case Studies</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-mono">Proven Results</h2>
                <p className="text-muted-foreground mt-2">Real-world examples of problems solved and value delivered.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1: Rescue & Ship */}
              <a href="/case-studies/rescue-ship" className="block h-full">
              <Card className="group h-full overflow-hidden border-muted hover:border-primary/50 transition-colors flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden bg-muted relative shrink-0">
                  <img 
                    src="/images/project-firstradicle.png" 
                    alt="Rocket Launch Blueprint" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-mono">Velocity & Process</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl leading-tight">Unblocking a Stalled Roadmap: From 0 to Launch in 90 Days</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm">A Series A fintech startup had a bloated backlog and a team paralyzed by technical debt. No new features had shipped in 4 months.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-sm">Conducted an architecture audit, implemented a pragmatic Agile workflow, and cut scope to the essentials.</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Shipped MVP in 12 weeks</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Reduced bug reports by 60%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>

              {/* Case Study 2: AI Transformation */}
              <a href="/case-studies/ai-transformation" className="block h-full">
              <Card className="group h-full overflow-hidden border-muted hover:border-primary/50 transition-colors flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden bg-muted relative shrink-0">
                  <img 
                    src="/images/project-smarttasker.png" 
                    alt="AI Brain Blueprint" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-mono">AI & Innovation</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl leading-tight">Architecting a Custom GenAI Pipeline for Enterprise Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm">A healthcare data company wanted to leverage LLMs but couldn't risk data privacy leaks or hallucinations.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-sm">Designed a secure, local-first RAG (Retrieval-Augmented Generation) architecture and led the engineering team to build it.</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Secure natural language querying</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Opened $5M revenue stream</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>

              {/* Case Study 3: Scale-Up */}
              <a href="/case-studies/scale-up" className="block h-full">
              <Card className="group h-full overflow-hidden border-muted hover:border-primary/50 transition-colors flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden bg-muted relative shrink-0">
                  <img 
                    src="/images/project-directai.png" 
                    alt="Microchip Blueprint" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-mono">Distributed Systems</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl leading-tight">Stabilizing Infrastructure for 10x User Growth</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm">A consumer app hit viral growth, but their monolithic MVP crashed every time traffic spiked.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-sm">Migrated critical services to a microservices architecture, implemented auto-scaling, and optimized database queries.</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>99.99% uptime during peak traffic</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>40% reduction in cloud costs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>

              {/* Case Study 4: Team Turnaround */}
              <a href="/case-studies/team-turnaround" className="block h-full">
              <Card className="group h-full overflow-hidden border-muted hover:border-primary/50 transition-colors flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden bg-muted relative shrink-0">
                  <img 
                    src="/images/project-wehired.png" 
                    alt="Shield/Compliance Blueprint" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-mono">Leadership & Hiring</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl leading-tight">Building a High-Performance Engineering Culture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm">Founders were frustrated by a lack of visibility and high developer turnover. They didn't know if they had the right people.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-sm">Established clear engineering metrics (DORA), mentored the lead engineer, and restructured the hiring process.</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Tripled deployment frequency</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Retained 100% of key talent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Skills & Expertise */}
        <section id="services" className="py-20 bg-muted/30 border-b">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 font-mono">Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">Technical Leadership</h2>
              <p className="text-muted-foreground">
                Deep experience across the entire engineering lifecycle, from code to culture.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Technical Leadership</h3>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Scalable Architecture</h3>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Artificial Intelligence</h3>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Project Management</h3>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Distributed Systems</h3>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm">Agile Methodologies</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About / Footer CTA */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="bg-card border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold font-mono">About Stephen Martin</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fractional CTO with experience at Big Tech companies and startups. 
                  I've built products, scaled teams, and delivered results. 
                  My mission is to help founders navigate the complex technical landscape and ship products that matter.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/stephencmartin/" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://x.com/martintechlabs" target="_blank" rel="noopener noreferrer">
                      Follow on Twitter
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl">
                      <img 
                        src="/images/stephen-martin.jpeg" 
                        alt="Stephen Martin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t bg-muted/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Martin Tech Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
