"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-4 px-8 text-center">
      <div className="flex flex-col items-center gap-8 max-w-3xl">
        
        {/* Hero Title */}
        <h1 className="text-balance font-medium text-6xl md:text-7xl tracking-tighter text-foreground">
          Monitor your API performance with{" "}
          <span className="text-primary">confidence</span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl text-balance text-xl text-muted-foreground">
          Stop guessing why your services are slow. Get real-time observability, 
          instant alerts, and professional insights in one simple dashboard.
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="/signup">
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" className="text-base px-8" asChild>
            <Link href="/demo">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </Link>
          </Button>
        </div>

        {/* Social Proof / Trust indicator */}
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
            ))}
          </div>
          <span>Trusted by 500+ developers worldwide</span>
        </div>
      </div>
    </section>
  );
}