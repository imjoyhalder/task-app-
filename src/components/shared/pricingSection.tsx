"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Hobby", price: { monthly: 0, yearly: 0 }, desc: "Perfect for side projects.", features: ["5 monitors", "50 API calls"] },
  { name: "Pro", price: { monthly: 49, yearly: 39 }, desc: "Best for growing teams.", features: ["10 monitors", "Unlimited calls"], popular: true },
  { name: "Enterprise", price: { monthly: "Custom", yearly: "Custom" }, desc: "For large organizations.", features: ["Unlimited monitors", "Priority support"] },
];

export function PricingSection() {
  const [freq, setFreq] = useState("monthly");

  return (
    <section className="py-4 container mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Simple pricing</h2>
        <Tabs defaultValue="monthly" onValueChange={setFreq} className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly <Badge className="ml-2">Save 20%</Badge></TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn("flex flex-col", plan.popular && "border-primary shadow-lg")}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.desc}</CardDescription>
              <div className="text-3xl font-bold mt-4">
                {typeof plan.price[freq as 'monthly' | 'yearly'] === 'number' 
                  ? `$${plan.price[freq as 'monthly' | 'yearly']}` 
                  : plan.price[freq as 'monthly' | 'yearly']}
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-2">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}