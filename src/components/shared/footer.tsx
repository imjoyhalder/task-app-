import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full  border-t bg-muted/20">
      <div className="container  px-4 py-10 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-bold">Acme Inc</Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Reliable monitoring for your APIs and services. Built for developers who care about performance.
            </p>
          </div>

          {/* Link Groups */}
          {[
            {
              title: "Product",
              links: ["Features", "Integrations", "Pricing"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog"]
            },
            {
              title: "Resources",
              links: ["Terms", "Privacy", "Contact"]
            }
          ].map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-2 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}