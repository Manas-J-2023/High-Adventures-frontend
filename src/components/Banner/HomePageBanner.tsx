
export default function HomePageBanner() {
    return (
        <section
            className="p-4 md:p-12 bg-cover bg-center bg-no-repeat  h-[calc(100vh-4rem)] bg-white/20 flex justify-center items-center"
        >
            <div
                className="relative bg-[url(https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570309.jpg?t=st=1725194626~exp=1725198226~hmac=e6c39e60484b2d40e85d377c8782f89d5173252060d05213be34c9463c2831d8&w=1380)] bg-cover bg-center bg-no-repeat h-[95%] w-full  rounded-2xl shadow-lg overflow-hidden max-md:flex  max-md:justify-center  max-md:items-center"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 md:py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
                >
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-500"> Forever Home. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}