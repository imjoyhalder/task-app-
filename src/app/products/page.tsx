'use client'
import { ProductCard } from "@/components/productCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductService } from "@/services/product.service";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  category: string;
  price: string | number;
  previous_price: string;
  regular_price: string;
  discount: string;
  save_amount: string;
  status: string;
  brand: string;
  key_features: string[];
  image: string;
}
const ProductPage =  () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(products)
    useEffect(() => {
        const fetchProducts = async () => {
            const service = new ProductService();
            try {
                const data = await service.getAllProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);


  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Our Products
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Explore our wide range of products designed to meet your needs. 
          From the latest gadgets to everyday essentials, we have something for everyone.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="animate-pulse"> 
              <Skeleton className="h-48 w-full rounded-lg mb-4" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: any, index: number) => (
            <div key={index} className="transition-transform hover:-translate-y-1 duration-300">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground italic">No products available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;