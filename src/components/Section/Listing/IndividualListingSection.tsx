"use client";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AddOnCard, HeroCarousel } from "@/components";
import { BiSolidOffer } from "react-icons/bi";

import { PriceFormat, PercentageFormat } from "@/lib/formater";

interface IndividualListingSectionProps {
  title: string;
  description: string;
  keyWords: string[];
  rating: number;
  amenities: string[];
  offerPrice: number;
  originalPrice: number;
  embedLocationLink: string;
  address: string;
  images: {
    id: number;
    name?: string;
    url: string;
  }[];
  offers: {
    title: string;
    image: string;
    offerPrice: number;
    originalPrice: number;
  }[];
}

export default function         IndividualListingSection({
  title,
  description,
  keyWords,
  rating,
  amenities,
  offerPrice = 1000,
  originalPrice = 1200,
  images,
  offers,
  embedLocationLink,
  address,
}: IndividualListingSectionProps) {
  amenities = amenities || [
    "Free Wi-Fi",
    "Free Parking",
    "Swimming Pool",
    "Spa",
    "Restaurant",
    "Bar",
    "Gym",
    "Laundry",
  ];

  keyWords = keyWords || [
    "Luxury",
    "5 Star",
    "Business",
    "Family",
    "Couple",
    "Friends",
    "Solo",
  ];

  return (
    <div className="mx-3 my-4 md:mx-8 lg:mx-16 xl:mx-20">
      <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-8">
        <div className="">
          <HeroCarousel
            name="product"
            data={images || dummyData}
            orientation="horizontal"
            className="md:h-[448px]"
          />
        </div>
        <div className="mx-8 flex-1 md:mx-2">
          <div>
            <div className="my-2 flex items-center">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-[#FFD700]/20 px-2 py-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    return (
                      <FaStar
                        key={index}
                        className={`${
                          (index+1) < (rating | 0)
                            ? "text-[#FFD700]"
                            : "text-gray-400"
                        }`}
                      />
                    );
                  })}
                </span>
                {/* <span className="ml-2 text-sm text-gray-800">{4}</span> */}
              </div>
              <div className="ml-4 flex items-center gap-2">
                {keyWords?.slice(0, 4).map((keyWord, index) => (
                  <Badge key={index} variant="outline">
                    {keyWord}
                  </Badge>
                ))}
              </div>
            </div>
            <h1 className="text-5xl font-bold">
              {title || "The Taj Mahal Palace, Mumbai"}
            </h1>

            <p className="mt-2 text-gray-800">
              <span className="sr-only text-lg font-semibold">About: </span>
              {description ||
                "The Taj Mahal Palace is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba region of Mumbai, Maharashtra, India, situated next to the Gateway of India."}
            </p>
          </div>
          <div className="mt-4">
            <span className="sr-only text-lg font-semibold">Amenities: </span>
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
          </div>

          <div className="mt-4">
            <div>
              <div className="bg--800 flex items-center gap-2 rounded-md px-2 py-1 text-gray-950">
                <span
                  className="text-4xl font-light text-red-800"
                  aria-label="Offer"
                >
                  {PercentageFormat(
                    (offerPrice - originalPrice) / originalPrice
                  ) || "20%"}
                </span>

                <span className="text-2xl" aria-label="Discounted Price">
                  {PriceFormat(offerPrice)}
                </span>
              </div>
              <div className="flex items-center rounded-md px-2 text-gray-800">
                <span className="text-sm">
                  Orginal Price:{" "}
                  <span className="line-through" aria-label="Original Price">
                    {PriceFormat(originalPrice)}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="px-2 text-sm">Inclusive of all taxes</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button
              as={Link}
              href="/book-now"
              radius="full"
              className="bg-green-700 px-4 py-6 text-lg text-white"
              size="lg"
            >
              Book Now
            </Button>
            <Button
              as={Link}
              href="/search"
              radius="full"
              variant="bordered"
              className="border-green-700 px-4 py-6 text-lg text-green-700"
              size="lg"
            >
              Looking for more?
            </Button>
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-300" /> */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 md:mt-8 md:gap-8 lg:mt-12">
        <div className="mx-8 flex-1 md:mx-2">
          <h2 className="flex items-center gap-2 text-3xl font-bold text-green-800">
            <BiSolidOffer className="text-4xl text-green-800" />
            Offers & Discounts
          </h2>
          <hr className="my-2 border-gray-300" />
          <div className="mt-4 flex flex-wrap items-center justify-start gap-2 md:gap-8">
            <AddOnCard
              title="Airport Pickup"
              image="https://pix8.agoda.net/hotelImages/395792/0/765054f43ee57d4c0940e2315a9aeb34.jpeg?s=600x"
              offerPrice={1000}
              originalPrice={1200}
              onClickAction={() => {}}
            />
            {offers?.map((offer, index) => (
              <AddOnCard
                key={index}
                title={offer.title}
                image={offer.image}
                offerPrice={offer.offerPrice}
                originalPrice={offer.originalPrice}
                onClickAction={() => {}}
              />
            ))}
          </div>
        </div>
        <div className="mx-8 w-full py-4 md:py-0  md:w-2/5 md:mx-2">
          <iframe
            src={
              embedLocationLink ||
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.292292292292!2d77.1723083146345!3d28.61393998241368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f1b9f7e6e1%3A0x1b0b4b7b7b7b7b7b!2sTaj%20Palace!5e0!3m2!1sen!2sin!4v1633663660004!5m2!1sen!2sin"
            }
            style={{ border: 0 }}
            className="aspect-[5/4] w-full rounded-2xl"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="mt-4">
            <span className="sr-only text-3xl font-bold">Address Details</span>
            <address className="text-gray-800">
              {address ||
                "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India"}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

const dummyData = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  name: `product${index + 1}`,
  url: "https://r1imghtlak.mmtcdn.com/366add286de211eebb610a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
}));
