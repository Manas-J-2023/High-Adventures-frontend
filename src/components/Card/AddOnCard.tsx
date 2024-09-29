"use client";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { PriceFormat, PercentageFormat } from "@/lib/formater";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";

export interface AddOnCardProps {
  title: string;
  image: string;
  offerPrice: number;
  originalPrice: number;
  onClickAction?: () => void;
}

export default function AddOnCard({
  title,
  image,
  offerPrice,
  originalPrice,
  onClickAction,
}: AddOnCardProps) {
  return (
    <Card className="w-48 cursor-pointer bg-green-600/5 transition-shadow duration-300 ease-in-out hover:bg-green-600/10 hover:shadow-card-foreground">
      <CardHeader className="flex flex-col items-center justify-center gap-2 pb-2">
        <Image
          src={image}
          classNames={{
            img: "aspect-square select-none object-center select-none",
            wrapper: "aspect-square",
          }}
          height={80}
          width={80}
          radius="full"
          alt={title}
          loading="lazy"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-lg font-bold">{title}</CardTitle>
        <div className="flex items-center justify-between">
          {offerPrice && originalPrice && (
            <div>
              <div className="bg--800 flex items-center gap-2 rounded-md px-2 py-1 text-gray-950">
                <span className="text-lg font-light text-red-800">
                  {PercentageFormat(
                    (offerPrice - originalPrice) / originalPrice
                  ) || "20%"}
                </span>

                <span className="text-sm">
                 {"+"} {PriceFormat(offerPrice) || "₹ 1000"}
                </span>
              </div>
              <div className="flex items-center rounded-md px-2 text-gray-800">
                <span className="text-xs">
                  Orginal Price:{" "}
                  <span className="line-through">
                    {PriceFormat(originalPrice) || "₹ 1200"}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-center">
          <Button
            radius="full"
            fullWidth
            onClick={onClickAction}
            className="mt-2 bg-green-800 text-white"
          >
            <span className="sr-only">Add</span>
            <FaPlus />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
