
export class ProductService{
    getAllProducts = async()=>{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/products`,
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
}