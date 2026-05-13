export default function MissionandVision() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className=" relative
    bg-[url('https://media.raihsuite.com/RS0004/web/gallery/slider1.jpg')]
    bg-cover
    bg-center
    bg-no-repeat
    h-40
    md:h-56
    flex
    items-center
    justify-center
    overflow-hidden
    shadow-2xl
    animate-[zoomIn_1s_ease-out]">
         <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-white font-[Raleway] text-3xl sm:text-4xl md:text-5xl font-light animate-[fadeUp_1.2s_ease-out]">
            Our Mission & Vision
          </h1>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-10 border-t-4 border-[#8c8020]">
              
              <h2 className="text-3xl font-bold font-[Raleway] text-[#8c8020] mb-6 animate-[fadeUp_1.2s_ease-out">
                Our Mission
              </h2>

              <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
                To provide Muslim women with an education that seamlessly
                integrates Islamic scholarship with modern academic excellence.
                We are committed to nurturing moral integrity, critical
                thinking, and leadership qualities, enabling our students to
                contribute meaningfully to their families, communities, and
                society at large.
              </p>

            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-10 border-t-4 border-[#8c8020]">
              
              <h2 className="text-3xl font-bold font-[Raleway] text-[#8c8020] mb-6 animate-[fadeUp_1.2s_ease-out">
                Our Vision
              </h2>

              <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
                To be a leading Islamic women’s college recognized for academic
                excellence, strong moral values, and the empowerment of women as
                knowledgeable, principled leaders who uphold the teachings of
                Islam while excelling in contemporary fields.
              </p>

            </div>

          </div>
        </div>
      </section>

      

    </div>
  );
}