import { CardImgDiscription } from "@/components"

export default function HomePageHighLight() {
  return (
    <section
      className="p-4 md:p-12 bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col bg-green-300/10"
    >
      <h2 className="text-4xl font-extrabold text-gray-900">Popular Activities Packages</h2>
      <p className="mt-4 max-w-2xl text-gray-600 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="grid grid-cols-1 gap-6 md:gap-16 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-center items-center mt-4">
          <CardImgDiscription
            className="lg:scale-95"
            imgSrc="https://www.outdoorkeeda.com/explore-the-sky/images/outdoorkeeda-bungee-jumping-2.jpg"
            title="Bungee Jumping"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            link="#"
          />
        </div>
        <div className="flex justify-center items-center">
          <CardImgDiscription
            className="lg:scale-110"
            imgSrc="https://aquaterra.in/wp-content/uploads/2019/10/Brahmaputra-River-Rafting-Assam-31.jpg"
            title="River Rafting"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            link="#"
          />
        </div>
        <div className="sm:max-lg:col-span-2 flex justify-center items-center">
          <CardImgDiscription
            className="lg:scale-95"
            imgSrc="https://cdnp.flypgs.com/files/Ekstrem_Sporlar/skydiving-nedir.jpg"
            title="Sky Diving"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
