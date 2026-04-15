
import { Product } from "@/interface/product.interface";
import Image from "next/image";
import Link from "next/link";


export const ProductCard = ({ product }: { product: Product }) => {
    console.log("Product in ProductCard:", product);
  return (
    <div className="group flex flex-col border rounded-xl p-4 hover:shadow-lg transition-all">
      
      <Link href={`/products/${product?._id}`} className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image 
          src={product?.image} 
          alt={product?.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform" 
        />
        {product?.discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </Link>

      
      <div className="mt-4 flex-1">
        <p className="text-xs text-muted-foreground uppercase">{product?.brand}</p>
        <h3 className="font-semibold text-sm mt-1 line-clamp-2">{product?.title}</h3>
        
      </div>

      {/* Pricing */}
      <div className="mt-4 border-t pt-3 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs line-through text-gray-400">৳{product?.previous_price}</span>
          <span className="text-lg font-bold">৳{product?.price}</span>
        </div>
        <span className={`text-[10px] px-2 py-1 rounded ${product?.status === "In Stock" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {product?.status}
        </span>
      </div>
    </div>
  );
};