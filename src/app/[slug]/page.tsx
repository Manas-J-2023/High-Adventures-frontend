import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AddOnCard, HeroCarousel, IndividualListingSection, ListingReviewSection } from "@/components";
import { BiSolidOffer } from "react-icons/bi";
import { PriceFormat, PercentageFormat } from "@/lib/formater";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="mt-4 md:mt-8 lg:mt-12 xl:mt-16">
      <IndividualListingSection />
      <ListingReviewSection />
    </div>
  );
}

