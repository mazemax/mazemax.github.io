'use client'

export default function Featured() {
    return (
        <section className="w-full bg-slate-50 py-16 lg:py-20 border-t border-gray-200/60">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-sans">
                    Discover My Journey with Industry Leaders
                </h2>
                <p className="text-lg md:text-xl text-gray-600 text-center mb-5">
                    Featured in exclusive interview and success story
                </p>

                <div className="flex justify-center">
                    <iframe
                        className="w-full lg:w-7/12 h-[250px] lg:h-[500px] rounded-xl shadow-lg"
                        src={`https://www.youtube.com/embed/h-pMCZcC7s4`}
                        title="Max's Interview with Storyblok"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}