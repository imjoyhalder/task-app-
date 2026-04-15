import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, LayoutDashboard, Info } from "lucide-react"; 
import Hero from "@/components/shared/herosection";
import { PricingSection } from "@/components/shared/pricingSection";
export default function HomePage() {
  return (
    <div className="relative min-h-[80vh]  overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Hero />
      <PricingSection/>
    </div>
  );
}