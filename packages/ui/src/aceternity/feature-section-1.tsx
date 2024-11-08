"use client";   

import React from "react";
import { cn } from "../utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface Feature {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
}

interface FeatureCardProps {
  className?: string;
  label: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  label,
  description,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border p-4",
        className
      )}
    >
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-foreground">{label}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
};

const FeatureGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">{children}</div>
  );
};

const FeatureShowcaseIconContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mb-8 flex items-center space-x-2 text-primary">
      {children}
    </div>
  );
};

const FeatureTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-foreground">{children}</h3>
  );
};

const FeatureDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="mt-2 text-muted-foreground">{children}</p>
  );
};

// First, let's add the Skeleton components
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 px-2 gap-4 h-[200px]">
      <div className="w-full p-4 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col">
          <Image
            src="/images/dashboard-preview.webp"
            alt="Dashboard Preview"
            width={800}
            height={800}
            className="h-full w-full object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/images/features/ai-1.webp",
    "/images/features/ai-2.webp",
    "/images/features/ai-3.webp",
    "/images/features/ai-4.webp",
    "/images/features/ai-5.webp"
  ];

  const imageVariants = {
    whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
    whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
  };

  return (
    <div className="relative flex flex-col items-start p-4 gap-4 h-[200px] overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={`images-first-${idx}`}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`demo image ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-16 w-16 md:h-32 md:w-32 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="_blank"
      className="relative flex gap-4 h-[200px] group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col relative">
          <IconBrandYoutubeFilled className="h-16 w-16 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="YouTube thumbnail"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-[200px] flex flex-col items-center relative bg-transparent dark:bg-transparent">
      <Globe className="absolute -right-20 -bottom-40" />
    </div>
  );
};

export function FeatureSection() {
  const features: Feature[] = [
    {
      title: "Track issues effectively",
      description: "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Capture pictures with AI",
      description: "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch our AI on YouTube",
      description: "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description: "With our blazing fast, state of the art, cutting edge cloud services - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-8 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-2xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-foreground">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-3 mx-auto text-muted-foreground text-center font-normal">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 xl:border rounded-md border-border">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title} 
              className={cn(feature.className, "p-4 lg:p-6")}
              label={feature.title}
              description={feature.description}
            >
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}








