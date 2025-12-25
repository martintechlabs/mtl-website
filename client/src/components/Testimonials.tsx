import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We were stuck in a loop of technical debt and missed deadlines. Stephen came in, cut through the noise, and got us shipping again in weeks. He didn't just fix our code; he fixed our engineering culture.",
    author: "Sarah J.",
    role: "CEO, Series A Fintech",
  },
  {
    quote: "Building a secure AI pipeline for patient data seemed impossible with our internal team. Stephen designed a local-first architecture that passed every compliance audit and opened up a massive new revenue stream for us.",
    author: "Marcus C.",
    role: "Founder, HealthTech Startup",
  },
  {
    quote: "When our app went viral, our servers crashed. Stephen stepped in as Fractional CTO, migrated us to microservices, and stabilized the platform. We handled 10x traffic the next week without a hiccup.",
    author: "Elena R.",
    role: "Co-founder, B2C Mobile App",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/10 border-b">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-mono mb-4">Trusted by Founders</h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what founders say about working with Martin Tech Labs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="bg-background/50 backdrop-blur border-primary/10">
                      <CardContent className="flex flex-col items-center text-center p-8 md:p-12">
                        <Quote className="h-12 w-12 text-primary/20 mb-6" />
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 font-sans italic text-foreground/90">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col items-center">
                          <div className="font-bold font-mono text-lg">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
