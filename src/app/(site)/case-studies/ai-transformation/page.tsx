import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Shield } from "lucide-react";
import Image from "next/image";

export default function AITransformationPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 border-b overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <Image
                src="/images/hero-bg.png"
                alt="Background"
                fill
                sizes="100vw"
                className="object-cover"
            />
        </div>

        <div className="container relative z-10">
          <Button
            variant="ghost"
            className="mb-8 pl-0 hover:bg-transparent hover:text-primary"
            asChild
          >
            <a href="/#case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </a>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="font-mono text-primary border-primary/50 bg-primary/10 px-4 py-1"
              >
                AI & Innovation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono">
                Architecting a Custom GenAI Pipeline for Enterprise Data
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we built a secure, privacy-first RAG system for a healthcare
                data company to unlock $5M in new revenue.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
              <Image
                src="/images/diagram-ai-transformation.png"
                alt="RAG Architecture Diagram"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
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
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive text-sm">
                    01
                  </span>
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A healthcare data company wanted to leverage Large Language
                  Models (LLMs) to allow clients to query patient records
                  naturally. However, they faced strict HIPAA compliance
                  requirements. They couldn't send sensitive data to public APIs
                  like OpenAI, and they needed to guarantee zero hallucinations
                  when retrieving medical facts.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                  <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                    <Shield className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm">Strict HIPAA Compliance</span>
                  </li>
                  <li className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg border">
                    <Database className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Zero Tolerance for Hallucinations
                    </span>
                  </li>
                </ul>
              </div>

              <Separator />

              {/* The Strategy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                    02
                  </span>
                  The Strategy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We designed a "Local-First" RAG (Retrieval-Augmented
                  Generation) architecture. Instead of relying on external model
                  knowledge, we built a system that retrieves relevant, verified
                  documents from a secure vector database and uses the LLM only
                  for summarization and formatting, ensuring data never leaves
                  their secure VPC.
                </p>
                <div className="bg-card border rounded-xl p-6 space-y-4">
                  <h3 className="font-bold font-mono">Key Interventions</h3>
                  <div className="grid gap-4">
                    <div className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">
                          Secure Vector Database
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Implemented Pinecone with strict access controls to
                          index millions of medical records.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">RAG Pipeline</h4>
                        <p className="text-sm text-muted-foreground">
                          Built a Python-based pipeline using LangChain to
                          orchestrate retrieval and generation.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">
                          Evaluation Framework
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Created an automated testing suite (Ragas) to measure
                          answer accuracy and faithfulness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* The Results */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500 text-sm">
                    03
                  </span>
                  The Results
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The system enabled secure, natural language querying of
                  patient records, a feature that competitors couldn't match.
                  This innovation opened a new enterprise revenue stream worth
                  $5M annually and positioned the company as a leader in
                  AI-driven healthcare analytics.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                      <span className="text-4xl font-bold font-mono text-primary">
                        $5M
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        New Revenue
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                      <span className="text-4xl font-bold font-mono text-primary">
                        100%
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        HIPAA Compliant
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                      <span className="text-4xl font-bold font-mono text-primary">
                        &lt;2s
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        Query Latency
                      </span>
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
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">LangChain</Badge>
                    <Badge variant="secondary">Pinecone</Badge>
                    <Badge variant="secondary">OpenAI API</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold font-mono text-lg">Ready to innovate?</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Let's build a secure AI strategy that drives real business
                    value.
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full font-mono"
                    asChild
                  >
                    <a
                      href="https://calendly.com/martintechlabs/discovery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
  );
}


