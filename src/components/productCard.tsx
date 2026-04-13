// components/ProductCard.tsx
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductProps {
  _id: string;
  previous_price: string;
  regular_price: string;
  discount: string;
  status: string;
  brand: string;
  key_features: string[];
  image: string;
  title: string;
  price: number;
  category?: string;
  product_code: string;
}

const ProductCard = ({
  title,
  price,
  previous_price,
  discount,
  image,
  brand,
  status,
  key_features,
  category = "General",
}: ProductProps) => {
  return (
    <div className="group relative flex flex-col w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      
      {/* 1. Image Section with Discount Badge */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover "
        />
        {discount && (
          <span className="absolute top-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
            {discount}% OFF
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          {brand}
        </span>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{category}</span>
         
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-1">
          {title}
        </h3>

        {/* Key Features List */}
        <ul className="mt-3 space-y-1 flex-1">
          {key_features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
              <span className="mr-2 h-1 w-1 rounded-full bg-slate-400" />
              {feature}
            </li>
          ))}
        </ul>

        {/* 3. Pricing Section */}
        <div className="mt-5 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 line-through">
              ${previous_price}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              ${price}
            </span>
          </div>

        
        </div>

        <div>
            <Button>Add to cart</Button>
        </div>
        
      </div>


    </div>
  );
};

export default ProductCard;