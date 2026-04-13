import ProductCard from "@/components/productCard";
import { ProductService } from "@/modules/product.service";

const ProductPage = async() => {
    const products = await new ProductService().getAllProducts();
    console.log(products);
    return (
        <div className="max-w-7xl mx-auto mt-2.5 p-10">
            <h1 className="text-4xl text-center text-blue-400 font-semibold">Our Products</h1>
            <p className="text-sm italic text-gray-400">Explore our wide range of products designed to meet your needs. From the latest gadgets to everyday essentials, we have something for everyone. Browse through our collection and find the perfect product for you!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {products.map((product: any) => (
                    <ProductCard key={product._id} {...product} />
                ))}
            </div>

        </div>
    )
}

export default ProductPage;