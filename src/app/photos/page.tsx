
'use client'

import { PhotoServices } from "@/services/photo.service";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";



type Photo = {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

export default function PhotoPage() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 12;

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const response = await new PhotoServices().getAllPhotos();
                setPhotos(response);
            } catch (error) {
                console.error("Failed to fetch photos:", error);
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, []);

    const totalPages = Math.ceil(photos.length / photosPerPage);
    const currentPhotos = photos.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" />
                ))}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-2">Our Gallery</h1>
                <p className="text-muted-foreground">A collection of moments captured in time.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentPhotos.map((photo) => (
                    <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-all border-none bg-card/50">
                        <CardContent className="p-0">
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src={photo.thumbnailUrl}
                                    alt={photo.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-sm font-medium line-clamp-2 text-foreground/80">{photo.title}</h2>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

   
            <div className="flex justify-center items-center gap-6 mt-16">
                <Button variant="outline" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                </Button>
                <span className="text-sm font-medium text-muted-foreground">
                    Page {currentPage} of {totalPages}
                </span>
                <Button variant="outline" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </Button>
            </div>
        </div>
    );
}