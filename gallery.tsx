"use client";

/**
 * Photo gallery hero (shadcn path). Static site uses `photo-gallery.js` + `photo-gallery.css`.
 * Install for Next: `npm i framer-motion @radix-ui/react-slot class-variance-authority`
 */
import { forwardRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Direction = "left" | "right";

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImg = motion(
  forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    function MotionImg(props, ref) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <img ref={ref} {...props} />;
    }
  )
);

MotionImg.displayName = "MotionImg";

export const Photo = ({
  src,
  alt,
  className,
  direction = "left",
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height">) => {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImg
          className={cn("h-full w-full rounded-3xl object-cover")}
          width={width}
          height={height}
          src={src}
          alt={alt}
          draggable={false}
          {...props}
        />
      </div>
    </motion.div>
  );
};

const photos = [
  {
    id: 1,
    order: 0,
    x: "-320px",
    y: "15px",
    zIndex: 50,
    direction: "left" as Direction,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=440&h=440&fit=crop&q=80",
  },
  {
    id: 2,
    order: 1,
    x: "-160px",
    y: "32px",
    zIndex: 40,
    direction: "left" as Direction,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=440&h=440&fit=crop&q=80",
  },
  {
    id: 3,
    order: 2,
    x: "0px",
    y: "8px",
    zIndex: 30,
    direction: "right" as Direction,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=440&h=440&fit=crop&q=80",
  },
  {
    id: 4,
    order: 3,
    x: "160px",
    y: "22px",
    zIndex: 20,
    direction: "right" as Direction,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=440&h=440&fit=crop&q=80",
  },
  {
    id: 5,
    order: 4,
    x: "320px",
    y: "44px",
    zIndex: 10,
    direction: "left" as Direction,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=440&h=440&fit=crop&q=80",
  },
];

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, (animationDelay + 0.4) * 1000);

    return () => {
      window.clearTimeout(visibilityTimer);
      window.clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: string; y: string; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  return (
    <div className="relative mt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-[200px] -z-10 hidden h-[300px] w-full bg-[length:3rem_3rem] opacity-20 md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, #57534e 1px, transparent 1px), linear-gradient(to bottom, #57534e 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
        }}
      />
      <p className="z-1 my-2 text-center text-base font-semibold tracking-tight text-slate-200 md:text-lg">
        Hi <span aria-hidden="true">👋</span> I&apos;m Madeeha
      </p>
      <h1 className="z-20 mx-auto max-w-3xl px-2 py-3 text-center text-4xl font-bold lowercase leading-tight text-slate-50 md:text-6xl lg:text-7xl">
        welcome to my{" "}
        <span className="bg-gradient-to-br from-[#7b61ff] to-[#a975ff] bg-clip-text text-transparent">
          portfolio
        </span>
      </h1>
      <div className="relative mb-8 flex h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt="Gallery still"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          type="button"
          className="rounded-full bg-gradient-to-br from-[#7b61ff] to-[#a975ff] px-6 text-white lowercase shadow-[0_0_20px_rgba(176,106,191,0.35)] hover:brightness-110"
          asChild
        >
          <a href="#top">view work</a>
        </Button>
      </div>
    </div>
  );
};
