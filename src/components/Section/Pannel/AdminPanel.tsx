"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const hotels = [
  {
    name: "Taj Palace",
    location: "2, Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021",
    link: "#",
    status: "",
  },
  {
    name: "Oberoi",
    location: "Dr Zakir Hussain Marg, Delhi Golf Club, New Delhi, Delhi 110003",
    link: "#",
    status: "accept",
  },
  {
    name: "Leela Palace",
    location: "Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110023",
    link: "#",
    status: "reject",
  },
];

export function AdminPanel() {
  const [hotelStatuses, setHotelStatuses] = useState(
    hotels.map((hotel) => ({ name: hotel.name, status: hotel.status }))
  );

  const handleStatusChange = (hotelName: any, newStatus: any) => {
    setHotelStatuses((prevStatuses) =>
      prevStatuses.map((hotel) =>
        hotel.name === hotelName
          ? { ...hotel, status: hotel.status === newStatus ? "" : newStatus }
          : hotel
      )
    );
  };

  return (
    <div className="mx-5">
      <h1 className="text-center my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Hotel Table</h1>
      <div className="container mx-auto my-5 border-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Hotel Name</TableHead>
              <TableHead>Hotel Location</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels.map((hotel) => {
              const currentStatus = hotelStatuses.find(
                (inv) => inv.name === hotel.name
              )?.status;

              return (
                <TableRow key={hotel.name}>
                  <TableCell className="font-medium p-2 sm:p-4">{hotel.name}</TableCell>
                  <TableCell className="p-2 sm:p-4">{hotel.location}</TableCell>
                  <TableCell className="p-2 sm:p-4"> <Link href={`${hotel.link}`}> URL to Hotel </Link> </TableCell>
                  <TableCell className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-end p-2 sm:p-4">
                    <Button
                      className={`${currentStatus === "accept" ? "bg-teal-600" : "bg-black"
                        } text-white h-12 w-14 sm:w-full hover:bg-black/70`}
                      onClick={() => handleStatusChange(hotel.name, "accept")}
                    >
                      Accept
                    </Button>
                    <Button
                      className={`${currentStatus === "reject" ? "bg-teal-600" : "bg-black"
                        } text-white h-12 w-14 sm:w-full hover:bg-black/70`}
                      onClick={() => handleStatusChange(hotel.name, "reject")}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
