import { CardImgDiscription } from "@/components"




const TopHotelList = [
    {
        title: "Green Palms Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202108171845246540-2e1001d6252211ecb6790a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
    },
    {
        title: "Blue Waves Resort",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/366add286de211eebb610a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
    },
    {
        title: "Red Rose Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201808291102238641-84706242-3f12-485e-8679-bf26059d21cf.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
    },
    {
        title: "Yellow Sun Resort",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/0fe7e951-95f2-466a-87db-8c90dc887de1.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
    },
    {
        title: "Purple Orchid Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: "https://r1imghtlak.mmtcdn.com/d50f1af096c811eb86cd0242ac110003.jpg?&output-quality=75&downsize=520:350&crop=520:350;81,0&output-format=jpg&downsize=480:336&crop=480:336"
    }]

export default function TopHotelSection() {
    return (
        <section
            className="p-4 md:p-12 bg-cover bg-center bg-no-repeat flex justify-center flex-col bg-white"
        >
            <div className="flex justify-center flex-col w-full items-center">
                <h2 className="text-4xl font-extrabold text-gray-900">Our Top Hotels & Resorts</h2>
                <p className="mt-4 max-w-2xl text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>

            <div className=" flex justify-center items-center flex-wrap gap-4 mt-8 md:gap-8 md:p-8">

                {
                    TopHotelList.map((hotel, index) => (
                        <CardImgDiscription
                            key={index}
                            imgSrc={hotel.imgSrc}
                            title={hotel.title}
                            description={hotel.description}
                        />
                    ))
                }

            </div>
        </section>
    );
}
