
export class ProductService{
    getAllProducts = async()=>{
        const response = await fetch(`https://oryon-server.vercel.app/products`,
            {
                next: {
                    revalidate: 60, 
                }
            }
        );
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }
        return response.json();
    }

    getProductById = async(id: string)=>{
        const response = await fetch(`https://oryon-server.vercel.app/products/${id}`,
            {
                next: {
                    revalidate: 60,
                }
            }
        );
        if(!response.ok){
            throw new Error("Failed to fetch product");
        }
        return response.json();
    }

}