import React from "react";
import { User } from "@nextui-org/user";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface ReviewCardProps {
  title: string;
  description: string;
  rating: number;
  date: Date;
  user: {
    name: string;
    avatar: string;
    joined: Date;
  };
  className?: string;
}

const ReviewCard = ({
  title = "Best place to stay",
  description = "I had a great time staying at this place. The staff was very friendly and the room was very clean.",
  rating = 4.5,
  date = new Date(),
  user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    joined: new Date(),
  },
  className,
}: ReviewCardProps) => {
  return (
    <article
      className={cn(
        "p-4 mb-4 border border-gray-300 dark:border-gray-700 rounded-md",
        className
        )
      }
      aria-label={`Review by ${user?.name}`}
    >
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
        <User
          name={user?.name}
          description={`Joined on ${user?.joined.toDateString()}`}
          avatarProps={{
            src: user?.avatar,
            size: "md",
          }}
        />
        <span className="ms-2 flex items-center gap-2 text-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={cn(
                index + 1 < rating ? "text-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </span>
      </div>

      <hr className="my-2 border-gray-300" />

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>

      <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>

      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        {date && (
          <p>
            Reviewed on{" "}
            <time dateTime={date.toISOString()}>{date.toDateString()}</time>
          </p>
        )}
      </footer>
    </article>
  );
};

export default ReviewCard;
