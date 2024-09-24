import CardImgDiscription from "@/components/Card/CardImgDiscription";
import { CardImgDiscriptionProps } from "@/components/Card/CardImgDiscription";

const TopHotelList: CardImgDiscriptionProps[] = [
    {
        title: "Green Palms Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202108171845246540-2e1001d6252211ecb6790a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
        offerPrice : 2000,
        originalPrice : 3000,
        rating : 4.5,
        reviewCount : 1000,
        type : "Hotel",
        shortLocation : "Goa",
        distance : "2.5 km",
        amenities : ["Free Wifi", "Free Parking", "Swimming Pool", "Spa", "Restaurant"],
        bookingLink : "#"
    },
    {
        title: "Blue Waves Resort",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/366add286de211eebb610a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
        offerPrice : 2500,
        originalPrice : 3500,
        rating : 4.7,
        reviewCount : 1200,
        type : "Resort",
        shortLocation : "Kerala",
        distance : "3.5 km",
        amenities : ["Free Wifi", "Free Parking", "Swimming Pool", "Spa", "Restaurant"],
        bookingLink : "#"
    },
    {
        title: "Red Rose Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201808291102238641-84706242-3f12-485e-8679-bf26059d21cf.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
        offerPrice : 3000,
        originalPrice : 4000,
        rating : 4.6,
        reviewCount : 1500,
        type : "Hotel",
        shortLocation : "Jaipur",
        distance : "1.5 km",
        amenities : ["Free Wifi", "Free Parking", "Swimming Pool", "Spa", "Restaurant"],
        bookingLink : "#"
    },
    {
        title: "Yellow Sun Resort",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/0fe7e951-95f2-466a-87db-8c90dc887de1.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
        offerPrice : 3500,
        originalPrice : 4500,
        rating : 4.8,
        reviewCount : 2000,
        type : "Resort",
        shortLocation : "Varanasi",
        distance : "4.5 km",
        amenities : ["Free Wifi", "Free Parking", "Swimming Pool", "Spa", "Restaurant"],
        bookingLink : "#"
    },
    {
        title: "Purple Orchid Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/d50f1af096c811eb86cd0242ac110003.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336",
        offerPrice : 4000,
        originalPrice : 5000,
        rating : 4.9,
        reviewCount : 2500,
        type : "Hotel",
        shortLocation : "Goa",
        distance : "2.5 km",
        amenities : ["Free Wifi", "Free Parking", "Swimming Pool", "Spa", "Restaurant"],
    }]

export default function SearchResult() {
    return (

            <div className=" flex justify-center items-center flex-wrap gap-4 my-8 md:gap-8">

                {
                    TopHotelList.map((hotel, index) => (
                        <CardImgDiscription
                            key={index}
                            imgSrc={hotel.imgSrc}
                            title={hotel.title}
                            description={hotel.description}
                            offerPrice={hotel.offerPrice}
                            originalPrice={hotel.originalPrice}
                            rating={hotel.rating}
                            reviewCount={hotel.reviewCount}
                            type={hotel.type}
                            shortLocation={hotel.shortLocation}
                            distance={hotel.distance}
                            amenities={hotel.amenities}
                            bookingLink={hotel.bookingLink}

                        />
                    ))
                }

            </div>
    );
}
