import { PriceFormat } from "@/lib/formater";
import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Image } from "@nextui-org/image";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@nextui-org/react";
import { PercentageFormat } from "@/lib/formater";
import AddOnCard from "@/components/Card/AddOnCard";
import { BiSolidOffer } from "react-icons/bi";

export default function BookingSection() {
  const title = "The Taj Mahal Palace, Mumbai";
  const description =
    "The Taj Mahal Palace is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba region of Mumbai, Maharashtra, India, situated next to the Gateway of India.";
  const rating = 4;
  const keyWords = ["Luxury", "5 Star", "Business"];
  const amenities = [
    "Free Wi-Fi",
    "Free Parking",
    "Swimming Pool",
    "Spa",
    "Restaurant",
    "Bar",
    "Gym",
    "Laundry",
  ];
  const offerPrice = 1000;
  const originalPrice = 1200;

  return (
    <div className="mt-4 md:mt-8 lg:mt-12 xl:mt-16">
      <div className="mx-3 flex gap-4 md:mx-8 lg:mx-16 xl:mx-20">
        <div className="flex-1">
          {/* <h1 className="text-3xl font-bold text-green-800">Booking Details</h1> */}
          <div className="m-4 flex flex-col gap-4 rounded-md bg-gray-100 p-4">
            <h2 className="text-3xl font-bold text-green-800">Booking Details</h2>
            <hr className="border-gray-300" />
            <div className="flex gap-2">
              <div className="aspect-video w-1/2 max-w-sm">
                <Image
                  src="https://r1imghtlak.mmtcdn.com/366add286de211eebb610a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
                  classNames={{
                    img: "",
                    wrapper: "",
                  }}
                  radius="md"
                  alt="Hotel Name"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
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
                                  index + 1 < (rating | 0)
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
                    <h1 className="text-3xl font-bold">
                      {title || "The Taj Mahal Palace, Mumbai"}
                    </h1>
                  </div>
                  <div className="mt-4">
                    <span className="sr-only text-lg font-semibold">
                      Amenities:{" "}
                    </span>
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

                        <span
                          className="text-2xl"
                          aria-label="Discounted Price"
                        >
                          {PriceFormat(offerPrice)}
                        </span>
                      </div>
                      <div className="flex items-center rounded-md px-2 text-gray-800">
                        <span className="text-sm">
                          Orginal Price:{" "}
                          <span
                            className="line-through"
                            aria-label="Original Price"
                          >
                            {PriceFormat(originalPrice)}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="px-2 text-sm">
                        Inclusive of all taxes
                      </span>
                    </div>
                  </div>

                  {/* <div className="mt-4 flex items-center gap-2">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                <span className="sr-only text-lg font-semibold">About: </span>
                {description ||
                  "The Taj Mahal Palace is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba region of Mumbai, Maharashtra, India, situated next to the Gateway of India."}
              </p>
            </div>
            <section className="mt-4">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-green-800">
                <BiSolidOffer className="text-3xl text-green-800" />
                Offers & Discounts
              </h2>
              <hr className="my-4 border-gray-300" />
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <AddOnCard
                  title="Break Fast"
                  offerPrice={100}
                  originalPrice={200}
                  image="https://r1imghtlak.mmtcdn.com/0fe7e951-95f2-466a-87db-8c90dc887de1.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
                />
                <AddOnCard
                  title="Cab Pickup"
                  offerPrice={200}
                  originalPrice={300}
                  image="https://r1imghtlak.mmtcdn.com/d50f1af096c811eb86cd0242ac110003.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
                />
                <AddOnCard
                  title="Spa"
                  offerPrice={300}
                  originalPrice={400}
                  image="https://r1imghtlak.mmtcdn.com/0fe7e951-95f2-466a-87db-8c90dc887de1.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="flex w-2/6 max-w-md flex-col gap-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="m-4 flex flex-col gap-4 rounded-md bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-green-800">Booking Summary</h2>
      <hr className="border-gray-300" />
      <div className="">
        <OrderItem />
      </div>
      <div className="flex items-center gap-2">
        <span className="flex-1">Discount</span>
        <span className="text-sm text-red-800">-{PriceFormat(1000)}</span>
      </div>
      <hr className="border-gray-300" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-800">Total</span>
        <span className="text-lg font-bold text-green-800">
          {PriceFormat(1000)}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Button
          as={Link}
          href="/book-now"
          radius="md"
          fullWidth
          className="bg-green-700 px-4 py-6 text-lg text-white"
          size="lg"
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
}

interface OrderItemProps {
  title: string;
  price: number;
  link?: string;
  addons: {
    title: string;
    price: number;
  }[];
}

function OrderItem({
  title = "Hotel Name",
  price = 1000,
  link = "#",
  addons = [
    {
      title: "Break Fast",
      price: 100,
    },
    {
      title: "Cab Pickup",
      price: 200,
    },
  ],
}: OrderItemProps) {
  return (
    <div className="my-2 rounded-md">
      <div className="my-2 flex items-center gap-4">
        <div className="flex-1">
          <User
            name={title}
            description={
              <Link href={link} className="mt-0">
                <small className="text-blue-500">
                  View Details
                  <IoIosArrowRoundForward className="inline-block text-sm" />
                </small>
              </Link>
            }
            classNames={{
              name: "text-lg font-bold text-gray-800",
              description: "text-sm text-gray-500",
            }}
            avatarProps={{
              src: "https://r1imghtlak.mmtcdn.com/366add286de211eebb610a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
              size: "lg",
              radius: "md",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-green-800">
            {PriceFormat(price)}
          </span>
        </div>
      </div>
      <span className="text-sm text-green-800">Add Ons</span>
      {addons.map((addon, index) => (
        <div key={index} className="mb-1 flex items-center gap-2">
          <span className="flex-1">{addon.title}</span>
          <span className="text-sm text-green-800">
            +{PriceFormat(addon.price)}
          </span>
        </div>
      ))}
    </div>
  );
}
