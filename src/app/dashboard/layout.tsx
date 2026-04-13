import AppSidebar from "@/components/ui/appsidebar";
import {  
  SidebarProvider, 
  SidebarInset 
} from "@/components/ui/sidebar";


interface DashboardLayoutProps {
  children: React.ReactNode;
  cart: React.ReactNode;
  order: React.ReactNode;
}


export default function DashboardLayout({ 
  children, 
  cart, 
  order 
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>

     
      <AppSidebar/>

     
      <SidebarInset>
        <main className="p-6 space-y-6">
          
          <div className="bg-slate-50 p-4 rounded-xl border italic">
            {children}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="border rounded-xl p-4 bg-white shadow-sm">
              <h2 className="font-bold mb-2">Shopping Cart</h2>
              {cart}
            </section>
            
            <section className="border rounded-xl p-4 bg-white shadow-sm">
              <h2 className="font-bold mb-2">Recent Orders</h2>
              {order}
            </section>
          </div>

        </main>
      </SidebarInset>

    </SidebarProvider>
  );
}