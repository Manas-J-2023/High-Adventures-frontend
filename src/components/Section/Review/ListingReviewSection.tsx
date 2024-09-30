import { SiTrustpilot } from "react-icons/si";
import { Progress } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { NumberCompactFormat } from "@/lib/formater";
import ReviewCard from "@/components/Card/ReviewCard";
import { ReviewCardProps } from "@/components/Card/ReviewCard";

export interface ListingReviewSectionProps {
  rating: number;
  reviewsCount: number;
  reviews: ReviewCardProps[];
  className?: string;
}

export default function ListingReviewSection({
  rating = 4.5,
  reviewsCount = 1000,
  reviews = dummyReviews,
  className,
}: ListingReviewSectionProps) {
  return (
    <div className="mx-3 my-4 md:mx-8 lg:mx-16 xl:mx-20">
      <div className="mx-8 mt-4 md:mx-2">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-green-800">
          <SiTrustpilot className="text-4xl text-green-800" />
          Read trusted reviews from our customers
        </h2>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 text-2xl font-bold text-green-800">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={cn(
                    index + 1 < rating ? "text-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </span>
            <span className="text-lg text-gray-800">
              <span className="font-bold text-green-800">{rating.toFixed(1)}</span>
              {" "}
              out of 5
            </span>
            <span className="text-sm text-gray-800">
              based on {NumberCompactFormat(reviewsCount)} reviews
            </span>
          </div>
        </div>
        <div className="mb-4 mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews
            ?.slice(0, 6)
            .map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                className="sm:break-inside-avoid"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

let dummyReviews = Array.from({ length: 8 }, (_, index) => ({
  rating: 4.5,
  title: "Great experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  date: new Date(),
  user: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    joined: new Date(),
  },
}));
