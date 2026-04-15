'use client'

import { useState } from "react";
import { PhotoServices } from "@/services/photo.service";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PostPage() {
    const [formData, setFormData] = useState({
        title: "",
        thumbnailUrl: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await new PhotoServices().createPost(formData);
            alert("Post created successfully!");
            setFormData({ title: "", thumbnailUrl: "" });
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container flex justify-center py-12">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Create New Post</CardTitle>
                    <CardDescription>Enter the details below to publish your content.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter post title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
                            <Input
                                id="thumbnailUrl"
                                name="thumbnailUrl"
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                value={formData.thumbnailUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Publishing..." : "Submit Post"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}