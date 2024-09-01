import { CardImgDiscription } from "@/components"




const topDestinations = [
    {
        title: "Taj Mahal",
        description: "An ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        rating: 4.9
    },
    {
        title: "Jaipur",
        description: "The capital of India’s Rajasthan state, known as the Pink City for its trademark building color.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s",
        rating: 4.7
    },
    {
        title: "Goa",
        description: "A state in western India with coastlines stretching along the Arabian Sea, known for its beaches.",
        imgSrc: "https://www.shutterstock.com/image-photo/gaoindia-october-262011the-anjuna-beach-600nw-725412286.jpg",
        rating: 4.8
    },
    {
        title: "Kerala",
        description: "A state on India's tropical Malabar Coast, known for its palm-lined beaches and backwaters.",
        imgSrc: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww",
        rating: 4.9
    },
    {
        title: "Varanasi",
        description: "A city on the banks of the river Ganges in Uttar Pradesh, known as the spiritual capital of India.",
        imgSrc: "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=",
        rating: 4.6
    }
];


export default function TopDestination() {
  return (
    <section
      className="p-4 md:p-12 bg-cover bg-center bg-no-repeat flex justify-center flex-col bg-green-300/10"
    >
        <div className="flex justify-center flex-col w-full items-center">
      <h2 className="text-4xl font-extrabold text-gray-900">Our Top Destination</h2>
      <p className="mt-4 max-w-2xl text-gray-600 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
        </div>

      <div className=" flex justify-center md:items-center flex-wrap gap-4 mt-8 md:gap-8 md:p-8 w-[98%]">
       
        {
            topDestinations.map((hotel, index) => (
                <CardImgDiscription
                    key={index}
                    imgSrc={hotel.imgSrc}
                    title={hotel.title}
                    description={hotel.description}
                    rating={hotel.rating}
                />
            ))
        }

      </div>
    </section>
  );
}
