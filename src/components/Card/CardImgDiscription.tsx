import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
// import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { PriceFormat } from "@/lib/formater";
import { FaLocationDot } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { PercentageFormat } from "@/lib/formater";
import { Link, Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { GiPathDistance } from "react-icons/gi";

export interface CardImgDiscriptionProps {
  className?: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  link?: string;
  rating?: number;
  offerPrice?: number;
  originalPrice?: number;
  reviewCount?: number;
  type?: string;
  shortLocation?: string;
  distance?: string;
  amenities?: string[];
  bookingLink?: string;
}

export default function CardImgDiscription({
  title,
  description,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  link,
  rating,
  className,
  offerPrice,
  originalPrice,
  reviewCount,
  type,
  shortLocation,
  distance,
  amenities,
  bookingLink,
}: CardImgDiscriptionProps) {
  let TypeIcon = null;
  switch (type) {
    case "Hotel":
      TypeIcon = <LuHotel className="text-gray-800" />;
      break;
    case "Resort":
      TypeIcon = <LuHotel className="text-gray-800" />;
      break;
    default:
      null;
  }

  return (
    <Card className={cn("w-full py-4 md:max-w-xs", className)}>
      <CardHeader className="flex items-center justify-center overflow-visible py-2">
        <div className="relative aspect-video min-h-[200px] w-full">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
            src={imgSrc || "https://nextui.org/images/hero-card-complete.jpeg"}
            unoptimized
            fill
          />
        </div>
      </CardHeader>
      <CardBody className="flex-col items-start px-4 pb-0 pt-2">
        <div className="mb-2 flex w-full items-center justify-between">
          {rating && (
            <div className="flex items-center rounded-md bg-green-800 px-2 py-1 text-white">
              <FaStar className="me-1 text-yellow-400" />
              <span className="text-sm">{rating?.toFixed(1) || "4.5"}</span>
            </div>
          )}

          {shortLocation && (
            <div className="flex items-center">
              <div className="flex items-center rounded-md bg-gray-200 px-2 py-1 text-gray-800">
                <FaLocationDot className="me-1 text-gray-800" />
                <span className="text-sm">{shortLocation || "Goa"}</span>
              </div>
              {distance && (
                <div className="ms-2 flex items-center rounded-md bg-gray-200 px-2 py-1 text-gray-800">
                  <GiPathDistance className="me-1 text-gray-800" />
                  <span className="text-sm">{distance || "2.5 km"}</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex w-full items-center">
          {TypeIcon && TypeIcon}
          <h4
            className={cn(
              "text-large font-bold",
              TypeIcon ? "ms-2 text-gray-800" : "text-gray-900"
            )}
          >
            {title || "Glide through the sky"}
          </h4>
        </div>
        <p className="line-clamp-5 text-balance text-sm">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
        </p>
        <div className="mb-1 flex w-full items-center justify-between">
          {link && (
            <Link href={link || "#"} className="mt-0">
              <small className="text-blue-500">
                Read more
                <IoIosArrowRoundForward className="inline-block text-sm" />
              </small>
            </Link>
          )}
        </div>
        {amenities && (
          <div className="mt-2 flex w-full flex-wrap items-center gap-2">
            {amenities?.slice(0, 5).map((amenity, index) => (
              <Badge
                key={index}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-2 flex w-full items-center justify-between">
          {offerPrice && originalPrice && (
            <div>
              <div className="bg--800 flex items-center gap-2 rounded-md px-2 py-1 text-gray-950">
                <span className="text-lg font-light text-red-800">
                  {PercentageFormat(
                    (offerPrice - originalPrice) / originalPrice
                  ) || "20%"}
                </span>

                <span className="text-sm">
                  {PriceFormat(offerPrice) || "₹ 1000"}
                </span>
              </div>
              <div className="flex items-center rounded-md px-2 text-gray-800">
                <span className="text-xs">
                  Orginal Price: {PriceFormat(originalPrice) || "₹ 1200"}
                </span>
              </div>
            </div>
          )}
          {bookingLink && (
            <Button
              as={Link}
              href={bookingLink}
              className="mt-2 bg-green-800 text-white"
            >
              Book Now
              <FaArrowRightLong className="inline-block text-sm" />
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
