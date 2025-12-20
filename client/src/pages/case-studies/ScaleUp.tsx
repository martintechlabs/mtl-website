import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Server, Activity, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ScaleUp() {
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
                  Distributed Systems
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono">
                  Stabilizing Infrastructure for 10x User Growth
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  How we migrated a crashing monolithic app to a scalable microservices architecture to handle viral growth.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/src/assets/diagram-scale-up.png" 
                  alt="Microservices Architecture Diagram" 
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
                    A consumer app experienced viral growth, jumping from 10k to 100k daily active users in weeks. Their monolithic MVP, hosted on a single server, began crashing repeatedly under the load. Database connections were maxing out, and latency was skyrocketing, threatening to kill their momentum.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                    <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                      <Activity className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">Frequent Downtime during peaks</span>
                    </li>
                    <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                      <Server className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">Single Point of Failure</span>
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
                    We executed a "Strangler Fig" migration pattern. We didn't rewrite everything at once. Instead, we peeled off the most resource-intensive features (like notifications and feed generation) into separate microservices, while keeping the core monolith running for basic CRUD operations.
                  </p>
                  <div className="bg-card border rounded-xl p-6 space-y-4">
                    <h3 className="font-bold font-mono">Key Interventions</h3>
                    <div className="grid gap-4">
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-sm">Containerization</h4>
                          <p className="text-sm text-muted-foreground">Dockerized the application and orchestrated it with Kubernetes (EKS) for auto-scaling.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-sm">Database Optimization</h4>
                          <p className="text-sm text-muted-foreground">Implemented read replicas and Redis caching to offload 80% of database traffic.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-sm">Load Balancing</h4>
                          <p className="text-sm text-muted-foreground">Set up an Application Load Balancer to distribute traffic evenly across instances.</p>
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
                    The new architecture handled the traffic spike effortlessly. The app maintained 99.99% uptime during their biggest marketing campaign ever. Additionally, by optimizing resource usage, we actually reduced their monthly cloud bill by 40%.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 pt-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">99.99%</span>
                        <span className="text-sm font-medium text-muted-foreground">Uptime</span>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">10x</span>
                        <span className="text-sm font-medium text-muted-foreground">Traffic Capacity</span>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                        <span className="text-4xl font-bold font-mono text-primary">-40%</span>
                        <span className="text-sm font-medium text-muted-foreground">Cloud Costs</span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-bold font-mono text-lg">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Kubernetes</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">AWS RDS</Badge>
                      <Badge variant="secondary">Terraform</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold font-mono text-lg">Scaling pains?</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Don't let success break your infrastructure. Let's scale it right.
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
