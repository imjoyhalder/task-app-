// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // npm install lucide-react
// import { Button } from "@/components/ui/button";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
//       <div className="container flex h-16 items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold tracking-tight">
//           Acme Inc
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-6">
//           <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
//           <Link href="/photos" className="text-sm font-medium transition-colors hover:text-primary">Photos</Link>
//           <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">Prodcts</Link>
//           <Link href="/products/post" className="text-sm font-medium transition-colors hover:text-primary">Post</Link>
//           <Button variant="ghost" size="sm" asChild>
//             <Link href="/login">Login</Link>
//           </Button>
//           <Button size="sm" asChild>
//             <Link href="/signup">Sign Up</Link>
//           </Button>
//         </nav>

//         {/* Mobile Toggle Button */}
//         <button 
//           className="md:hidden p-2" 
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <nav className="md:hidden absolute w-full border-b bg-background p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
//           <Link href="/about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>About</Link>
//           <Link href="/services" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Services</Link>
//           <div className="flex flex-col gap-2 mt-2">
//             <Button variant="outline" className="w-full" asChild>
//               <Link href="/login">Login</Link>
//             </Button>
//             <Button className="w-full">Sign Up</Button>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Photos", href: "/photos" },
  { name: "Products", href: "/products" },
  { name: "Post", href: "/photos/post" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Acme Inc
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 border-l pl-6">
            <Button variant={isActive("/login") ? "default" : "ghost"} size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant={isActive("/signup") ? "default" : "outline"} size="sm" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="md:hidden border-b bg-background p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn("text-sm font-medium", isActive(link.href) ? "text-primary" : "text-foreground")}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Button variant="outline" className="w-full" asChild onClick={() => setIsOpen(false)}>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}