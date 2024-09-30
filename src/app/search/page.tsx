import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { DateRangePicker } from "@nextui-org/react";
import { SearchResult } from "@/components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { cn } from "@/lib/utils";


export default function SearchPageBanner() {
  return (
    <div>
      <section className="flex h-[calc(100vh-16rem)] items-center justify-center bg-white/20 bg-cover bg-center bg-no-repeat p-4 md:p-8">
        <div className="relative h-[95%] w-full overflow-hidden rounded-2xl bg-[url(https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570309.jpg?t=st=1725194626~exp=1725198226~hmac=e6c39e60484b2d40e85d377c8782f89d5173252060d05213be34c9463c2831d8&w=1380)] bg-cover bg-center bg-no-repeat shadow-lg max-md:flex max-md:items-center max-md:justify-center">
          <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl justify-center px-4 text-center sm:px-6 md:py-12 lg:flex lg:items-center lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Plan The
                <strong className="font-extrabold text-green-500">
                  {" "}
                  Perfect Trip{" "}
                </strong>
              </h1>
              <p className="mt-4 max-w-lg text-white sm:text-base/relaxed">
                #1 Travel site for booking hotels, flights, vacation rentals,
                and more
              </p>

              <div className="mt-8 flex gap-4 text-center">
                <Input
                  label="Search"
                  isClearable
                  radius="lg"
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-white",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-black/50 dark:placeholder:white/50",
                    ],
                    innerWrapper: "bg-white",
                    inputWrapper: ["bg-white"],
                  }}
                  placeholder="Search for hotels, flights, vacation rentals, and more"
                  startContent={
                    <FaSearch className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
                  }
                />
                {/* <Button
                isIconOnly
                aria-label="Search"
                className="bg-white text-black/90 dark:text-white/90 hover:bg-white/90 dark:hover:bg-black/90"   
                >
                <FaSearch size={20} />
                </Button> */}
              </div>
              <div className="mt-8">
                <DateRangePicker
                  label="Date of Stay"
                  labelPlacement="inside"
                  classNames={{
                    label:
                      "text-black/50 dark:text-white/90 text-left bg-white",
                    input: [
                      "bg-white",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-black/50 dark:placeholder:white/50",
                    ],
                    innerWrapper: "bg-white",
                    inputWrapper: [],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2 md:gap-8">
        <div className="flex items-center gap-4 mx-4 md:ms-20">
          <span className="text-base">Sort By:</span>
          <div className="flex gap-2">
            {SortWith.map((sort) => (
              <Button
                key={sort.value}
                className={cn("flex items-center gap-1 group",
                    sort.selected ? "text-green-900" : "text-gray-500"
                    )}
                
              >
                {sort.name}
                {sort.selected ? (
                  sort.order === "asc" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )
                ) : <IoIosArrowDown className="invisible group-hover:visible" />}
              </Button>
            ))}
          </div>
        </div>
        <SearchResult />
      </section>
    </div>  
  );
}

const SortWith = [
  { name: "Price", value: "price", selected: true, order: "desc" },
  { name: "Rating", value: "rating", selected: false, order: "asc" },
  { name: "Distance", value: "distance", selected: false, order: "asc" },
  { name: "Popularity", value: "popularity", selected: false, order: "asc" },
  { name: "Name", value: "name", selected: false, order: "asc" },
];
