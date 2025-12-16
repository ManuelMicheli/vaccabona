'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageData {
    src: string;
    alt: string;
    ratio: number;
}

interface ImageGalleryProps {
    images?: ImageData[];
}

// Genera array di immagini vuote con ratio alternati
const generateEmptyImages = (count: number): ImageData[] => {
    return Array.from({ length: count }).map((_, index) => {
        const isPortrait = Math.random() > 0.5;
        const ratio = isPortrait ? 9 / 16 : 16 / 9;
        return {
            src: '',
            alt: `Image ${index + 1}`,
            ratio,
        };
    });
};

const defaultImages: ImageData[] = generateEmptyImages(30);

export function ImageGallery({ images = defaultImages }: ImageGalleryProps) {
    // Distribuiamo le immagini in 3 colonne
    const columns = [[], [], []] as ImageData[][];

    images.forEach((image, index) => {
        columns[index % 3].push(image);
    });

    return (
        <div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
            <div className="mx-auto grid w-full max-w-6xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="grid gap-4 sm:gap-6">
                        {column.map((image, imageIndex) => (
                            <AnimatedImage
                                key={`${colIndex}-${imageIndex}`}
                                alt={image.alt}
                                src={image.src}
                                ratio={image.ratio}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface AnimatedImageProps {
    alt: string;
    src: string;
    ratio: number;
    className?: string;
    placeholder?: string;
}

function AnimatedImage({ alt, src, ratio, placeholder, className }: AnimatedImageProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            className={cn(
                "relative size-full rounded-2xl border border-white/10 overflow-hidden transition-all duration-1000 ease-in-out",
                "bg-gradient-to-br from-stone-900/60 to-black/60 backdrop-blur-sm",
                {
                    'opacity-100': isInView,
                    'opacity-0': !isInView,
                },
                className
            )}
        >
            {/* Card vuota con effetto */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(226,139,63,0.08),transparent_60%)]" />
        </AspectRatio>
    );
}
