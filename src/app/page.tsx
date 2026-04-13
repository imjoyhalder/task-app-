import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, LayoutDashboard, Info } from "lucide-react"; 
export default function HomePage() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent -z-10" />

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
       
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
          New Collection 2026
        </span>

       
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Welcome to Our <span className="text-blue-500">Store!</span>
        </h1>


        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 italic">
          Discover a world of amazing products and unbeatable deals. Whether you're looking for the latest gadgets, stylish fashion, or everyday essentials, find the perfect items to enhance your lifestyle.
        </p>

        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/products">
            <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-blue-500/20 transition-all">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-2">
              <LayoutDashboard className="mr-2 h-5 w-5" /> Dashboard
            </Button>
          </Link>

          <Link href="/about">
            <Button size="lg" variant="ghost" className="px-8 py-6 text-lg rounded-full">
              <Info className="mr-2 h-5 w-5" /> About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}