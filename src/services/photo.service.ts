
interface PostData {
    title: string;
    thumbnailUrl?: string;
    url?: string
}

export class PhotoServices {
    async getAllPhotos() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/photos`, {
            next: {
                revalidate: 60,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        return data
    }

    async createPost(postData: PostData) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error("Failed to create post");
        }
        const data = await response.json();
        console.log("Post created:", data);
        return data;
    }

}