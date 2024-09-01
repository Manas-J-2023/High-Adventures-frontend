import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { parse } from "path";


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
}

export default function CardImgDiscription({ title, description, imgSrc, imgAlt, imgWidth, imgHeight, link, rating, className }: CardImgDiscriptionProps) {
    return (
        <Card className={cn("py-4 w-full md:max-w-xs", className)}>
            <CardHeader className="overflow-visible py-2 flex justify-center items-center">
                <div className="relative w-full aspect-video min-h-[200px]">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={imgSrc || "https://nextui.org/images/hero-card-complete.jpeg"}
                        unoptimized
                        fill
                    />
                </div>

            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start" >
                <h4 className="font-bold text-large">
                    {title || "Glide through the sky"}
                </h4>
                <p className="text-sm text-balance">
                    {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
                </p>
                <div className="flex items-center justify-between w-full mt-2">
                    {
                        rating && (
                            <div className="flex items-center bg-green-800 text-white px-2 py-1 rounded-md">
                                <FaStar className="text-yellow-400 me-1" />
                                <span className="text-sm">
                                    {rating?.toFixed(1) || "4.5"}
                                </span>
                            </div>
                        )
                    }
                    <Link href={link || "#"} className="mt-2">
                        <small className="text-blue-500">
                            Read more
                            <IoIosArrowRoundForward className="inline-block text-sm" />
                        </small>
                    </Link>
                </div>
            </CardBody>
        </Card>
    );
}