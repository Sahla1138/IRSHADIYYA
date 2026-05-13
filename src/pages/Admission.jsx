export default function Admission() {
  return (
    <div>
<section
  className=" relative
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
    animate-[zoomIn_1s_ease-out]"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-white font-[Raleway] text-3xl sm:text-4xl md:text-5xl font-light  animate-[fadeUp_1.5s_ease-in-out]">
      Admissions
    </h1>
  </div>
</section>

      {/* Admission Content */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-black font-[Raleway] ">
              Redefine Yourself at Irshadiyya Women's College
            </h2>

            <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded"></div>
          </div>

          {/* Card */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 sm:p-8 md:p-10">
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Admission Procedure
            </h2>

            {/* Who Can Apply */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#8c8020] mb-3">
                Who can apply?
              </h3>

              <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
                Admission to Irshadiyya Women’s College is open to
                Muslim women who have successfully passed the SSLC
                examination or its equivalent.
                Applicants should have a keen interest in pursuing
                both Islamic studies and modern academics.
              </p>
            </div>

            {/* How To Apply */}
            <div>
              <h3 className="text-xl font-semibold text-[#8c8020] mb-3">
                How to apply?
              </h3>

              <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
                To apply, students can obtain the admission form
                directly from the college office or download it from
                the official website.
             
                The completed application, along with required
                documents such as mark sheets, transfer certificate,
                and identification proof, must be submitted within
                the announced admission period.
              </p>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}