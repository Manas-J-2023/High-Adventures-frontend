import Image from "next/image";
import { HomePageBanner, HomePageHighLight, TopDestination, TopHotelSection } from "@/components";

export default function Home() {
  return (
    <>
    <HomePageBanner/>
    <HomePageHighLight/>
    <TopHotelSection/>
    <TopDestination/>
    </>
  );
}
