"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ClassNames from "embla-carousel-class-names";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  name: string;
  className?: string;
  autoplay?: boolean;
  delay?: number;
  data: { id: number; name?: string; url: string }[];
  orientation?: "horizontal" | "vertical";
}

const HeroCarousel = ({
  name,
  className,
  data,
  orientation = "vertical",
  autoplay = true,
  delay = 5000,
}: HeroCarouselProps) => {
  const Carname = name?.replace(/\s/g, "-").toLowerCase();
  const ItemsImages = data || [];
  const autoscroll = useRef(
    Autoplay({
      delay: delay,
      stopOnInteraction: autoplay,
      playOnInit: autoplay,
    })
  );
  const [thumbRef, setthumbRef] = useState<CarouselApi>();
  const [imageRef, setImageRef] = useState<CarouselApi>();
  const [viewOrientation, setViewOrientation] = useState(orientation);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!thumbRef || !imageRef) return;
    thumbRef.scrollTo(index);
  }, [index, thumbRef, imageRef]);

  useEffect(() => {
    if (!thumbRef || !imageRef) return;
    imageRef.on("select", (api) => {
      setIndex(api.selectedScrollSnap());
    });
    return () => {
      imageRef.off("select", (api) => {
        setIndex(api.selectedScrollSnap());
      });
    };
  }, [thumbRef, imageRef]);

  const onThumbClick = useCallback(
    (index: number) => {
      console.log(thumbRef, imageRef);
      if (!imageRef || !thumbRef) return;
      imageRef.scrollTo(index);
      thumbRef.scrollTo(index);
    },
    [thumbRef, imageRef]
  );

  const mobileHander = useCallback(() => {
    if (window.innerWidth < 768) {
      setViewOrientation("horizontal");
    } else {
      setViewOrientation(orientation);
    }
  }, [orientation]);

  useEffect(() => {
    window.addEventListener("resize", mobileHander);
    return () => {
      window.removeEventListener("resize", mobileHander);
    };
  }, [mobileHander]);

  if (!ItemsImages?.length) return null;

  return (
    <div
      className={cn(
        "mx-auto flex h-full w-full items-center justify-center gap-4",
        viewOrientation === "vertical" ? "flex-row" : "flex-col-reverse",
        className
      )}
    >
      <div>
        <Carousel
          className=""
          orientation={viewOrientation}
          setApi={setthumbRef}
          plugins={[
            ClassNames({
              snapped: "thumbCarousel__snapped",
              inView: "",
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent
            className={cn(
              "",
              viewOrientation === "vertical"
                ? "mx-2 max-h-[400px]"
                : "my-2 w-full max-w-[400px]"
            )}
          >
            {ItemsImages &&
              ItemsImages.map((Item, index) => (
                <CarouselItem
                  key={`thum-${Carname}-${Item.id}`}
                  className={cn(
                    "mx-2 my-1",
                    viewOrientation === "vertical" ? "" : "h-24 w-24 basis-1/4"
                  )}
                >
                  <Button
                    variant="ghost"
                    className="aspect-square h-20 w-24 rounded-xl bg-gray-100/80 ring-4 ring-gray-300 transition-all duration-300 ease-in-out"
                    onClick={() => onThumbClick(index)}
                  >
                    <Avatar className="aspect-square h-20 w-24 rounded-xl">
                      <AvatarImage
                        src={Item.url}
                        alt={Item.name}
                        className="aspect-[24/20] w-full rounded-xl bg-gray-100 object-contain"
                      />
                      <AvatarFallback className="h-full w-full rounded-xl bg-gray-100/80 text-sm text-black">
                        {Item.name}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex items-center justify-center">
        <Carousel
          className="w-11/12 md:max-w-md"
          setApi={setImageRef}
          onMouseEnter={() => autoscroll.current.stop()}
          onMouseLeave={() => autoscroll.current.play()}
          plugins={[autoscroll.current]}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className=" ">
            {ItemsImages &&
              ItemsImages.map((Item) => (
                <CarouselItem
                  key={`image-${Carname}-${Item.id}`}
                  className="aspect-[6/4] w-full"
                >
                  <Avatar className="h-full w-full rounded-xl">
                    <AvatarImage
                      src={Item.url}
                      alt={Item.name}
                      className="h-full w-full rounded-xl bg-gray-100/80 object-contain"
                    />
                    <AvatarFallback className="h-full w-full rounded-xl bg-gray-100/80 text-sm text-black">
                      {Item.name}
                    </AvatarFallback>
                  </Avatar>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
