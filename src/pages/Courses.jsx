export default function Courses() {
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
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light  animate-[fadeUp_1.5s_ease-in-out]">
            Our Courses
          </h1>

        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">

          {/* Fadhila Course */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-10 border-l-4 border-[#8c8020]">
            
            <h2 className="text-3xl font-bold font-[Raleway] text-[#8c8020] mb-4">
              Fadhila
            </h2>

            <p className="text-sm sm:text-base font-[Raleway] font-semibold text-gray-700 mb-5">
              Religious Study + HSE/PUC/ Equivalent 
              (Commerce, Humanities & Science)
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
              The Fadhila program is a yearly curriculum designed to provide
              Muslim girl students who have passed the SSLC examination under
              the Kerala Islamic Education Board with a comprehensive education
              in religion along with academics.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base mt-4">
              In addition to Quran, Hadith, Fiqh, Aqeedah, Nahv, and Islamic
              History, the Higher Secondary section also incorporates a cohesive
              presentation of subjects such as Science, Commerce, and
              Humanities.
            </p>

            <p className="text-gray-600 font-[Raleway]   leading-relaxed text-sm sm:text-base mt-4">
              Upon completion of the two-year course in the college, the student
              will be eligible to receive the recognized certificate from the
              education board, entitling them to the certificate for passing the
              entire course.
            </p>

          </div>

          {/* Fadheela Course */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-10 border-l-4 border-[#8c8020]">
            
            <h2 className="text-3xl font-[Raleway] font-bold text-[#8c8020] mb-4">
              Fadheela
            </h2>

            <p className="text-sm sm:text-base font-[Raleway] font-semibold text-gray-700 mb-5">
              Religious Study + UG (UGC Accredited University)
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base">
              Fadheela is a three-year degree program that is offered to
              students who successfully complete the course and pass with
              distinction.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base mt-4">
              In addition to the certificate awarded for successfully completing
              the college course, students who have passed the course with
              distinction will receive a Fadheela degree certificate.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base mt-4">
              The uniqueness of this course is that it enables students to
              obtain a degree recognized by the university in addition to
              religious studies.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-sm sm:text-base mt-4">
              Along with the degree, the course also combines religious studies,
              and at the end of the three-year course, the student is awarded
              the title “Fadheela”.
            </p>

          </div>

        </div>
      </section>

     

    </div>
  );
}