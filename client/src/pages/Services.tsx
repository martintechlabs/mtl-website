import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, MessageSquare, Users, Code2 } from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="font-mono text-primary border-primary/50 bg-primary/10 px-4 py-1">
                Engagement Options
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-mono">
                Fractional CTO Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Flexible engagement models designed to meet you where you are—whether you need strategic guidance, leadership, or hands-on execution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Advisory Tier */}
              <Card className="flex flex-col border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-muted-foreground/20 group-hover:bg-primary/50 transition-colors"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Advisory</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Senior-level technical judgment on demand.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$5,000</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Clear guidance on architecture & technology strategy</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Objective input on vendors & build-vs-buy tradeoffs</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Regular advisory sessions & async feedback</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Help making confident, irreversible decisions</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-mono" variant="outline" asChild>
                    <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                      Book Advisory
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Embedded Leadership Tier */}
              <Card className="flex flex-col border-primary/50 shadow-lg shadow-primary/10 relative overflow-hidden scale-105 z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground font-mono text-xs">Most Popular</Badge>
                </div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Embedded Leadership</CardTitle>
                  <CardDescription className="text-base mt-2">
                    An experienced CTO embedded in your leadership team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$10,000</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Ownership of technical direction & standards</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Active leadership of engineering teams</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Roadmap planning & business alignment</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hiring support, interviews & mentorship</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-mono" size="lg" asChild>
                    <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                      Start Leadership
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Hands-On Execution Tier */}
              <Card className="flex flex-col border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-muted-foreground/20 group-hover:bg-primary/50 transition-colors"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Hands-On Execution</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Full CTO leadership plus direct execution.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$15,000</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hands-on architecture & system design</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Implementation of critical components</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Code reviews & production support</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Accountability for shipping key initiatives</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-mono" variant="outline" asChild>
                    <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                      Get Hands-On Help
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-6">Not sure which option is right for you?</p>
              <Button size="lg" variant="secondary" className="font-mono" asChild>
                <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer">
                  Schedule a Free Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
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
