
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuList = [
  { name: "Home", href: "/dashboard" },
  { name: "Orders", href: "/dashboard" },
  { name: "Cart", href: "/dashboard" },
  { name: "Settings", href: "/dashboard" },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r shadow-sm ">
      {/* Sidebar Header */}
      <SidebarHeader className="p-6">
        <h2 className="text-xl font-bold text-blue-600 tracking-tight">
          Dashboard
        </h2>
      </SidebarHeader>

      {/* Sidebar Content with Menu List */}
      <SidebarContent className="px-4">
        <div className="space-y-1">
          {menuList.map((item) => (
            <Link key={item.name} href={item.href} className="block">
              <SidebarGroup className="cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg px-3 py-2 text-sm font-medium">
                {item.name}
              </SidebarGroup>
            </Link>
          ))}
        </div>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t mt-auto">
        <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-slate-50 rounded-md">
           <div className="h-8 w-8 rounded-full bg-slate-200 shrink-0" />
           <span className="text-sm font-semibold">User Profile</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}