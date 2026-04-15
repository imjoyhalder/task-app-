import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-8 py-10 space-y-24">
      
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-medium tracking-tighter">Our mission is simplicity.</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          We believe that monitoring performance shouldn't require a PhD in systems engineering. 
          We're here to help you sleep better at night.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {[
          { icon: <Target className="h-8 w-8 text-primary" />, title: "Precision", desc: "Data accuracy is the foundation of every decision we make." },
          { icon: <Zap className="h-8 w-8 text-primary" />, title: "Speed", desc: "Your time is valuable; our tools are built for near-instant insights." },
          { icon: <Users className="h-8 w-8 text-primary" />, title: "Community", desc: "We build for developers, by developers, listening at every step." },
        ].map((item, i) => (
          <Card key={i} className="border-none bg-muted/40 shadow-none">
            <CardContent className="pt-6 space-y-4">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-medium tracking-tight">Built by developers, for developers.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Acme Inc started in a small garage in 2024. After dealing with dozens of unreliable 
            uptime monitors, we decided to build our own. Today, we support thousands of 
            developers who need to keep their apps running 24/7.
          </p>
          <Button>Join our team</Button>
        </div>
        <div className="bg-muted aspect-video rounded-xl flex items-center justify-center border">
          <span className="text-muted-foreground">Team Photo / Office Space</span>
        </div>
      </section>
    </div>
  );
}