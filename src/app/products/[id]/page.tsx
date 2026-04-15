import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Truck, CheckCircle } from "lucide-react";
import Image from "next/image";
import { ProductService } from "@/services/product.service";
import { Product } from "@/interface/product.interface"; 
import { Suspense } from "react";
import { ProductSkeleton } from "@/components/shared/product-skeleton";

type PageProps = {
  params: Promise<{ id: string }>;
};


async function getProductData(id: string): Promise<Product> {
  const service = new ProductService();
  const data = await service.getProductById(id);
  
  return Array.isArray(data) ? data[0] : data;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductData(id);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Product Image */}
          <div className="bg-muted rounded-2xl aspect-square relative overflow-hidden border shadow-sm">
            <Image 
              src={product.image || "/placeholder.png"} 
              alt={product.title} 
              fill 
              className="object-contain p-4" 
              priority
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.brand}</Badge>
                <Badge className={product.status === "In Stock" ? "bg-green-600" : "bg-red-600"}>
                  {product.status}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.title}</h1>
            </div>

       
            <div className="flex flex-wrap items-center gap-4 py-2">
              <span className="text-4xl font-extrabold text-foreground">৳{product.price}</span>
              <div className="flex flex-col">
                <span className="text-lg text-muted-foreground line-through">৳{product.previous_price}</span>
                <span className="text-sm font-bold text-emerald-600">Save ৳{product.save_amount}</span>
              </div>
              <Badge className="bg-orange-500">{product.discount}% OFF</Badge>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Key Features</h4>
              <ul className="space-y-2">
                {product.key_features?.map((f: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline">Buy Now</Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
              <Truck className="h-5 w-5" />
              <span>Free shipping across Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}