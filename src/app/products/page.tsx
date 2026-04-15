
import { ProductCard } from "@/components/productCard";
import { ProductService } from "@/services/product.service";


const ProductPage = async () => {
  const products = await new ProductService().getAllProducts();

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

      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="transition-transform hover:-translate-y-1 duration-300">
              <ProductCard {...product} />
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