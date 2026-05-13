import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Balanced Education",
      desc: "Islamic studies combined with modern academics.",
    },
    {
      title: "Recognized Programs",
      desc: "Courses under the Council of Samastha Women’s College (CSWC).",
    },
    {
      title: "Safe Environment",
      desc: "A secure and supportive campus for Muslim women.",
    },
    {
      title: "Personal Growth",
      desc: "Leadership, confidence, and life skills development.",
    },
    {
      title: "Experienced Faculty",
      desc: "Qualified teachers for both religious and academic subjects.",
    },
    {
      title: "Pathway to Degrees",
      desc: "Higher Secondary and UGC-recognized degree options.",
    },
    {
      title: "Strong Values",
      desc: "Focus on moral integrity and community service.",
    },
    {
      title: "Established Reputation",
      desc: "Part of the trusted Samastha Kerala Islam Matha Vidhyabhyasa Board network.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-[url('https://media.raihsuite.com/RS0004/web/gallery/slider1.jpg')] 
        bg-cover bg-center bg-no-repeat h-40 md:h-56 flex items-center animate-[zoomIn_0.5s_ease-in-out]  justify-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fadeInUp">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide animate-[fadeUp_1.5s_ease-in-out]">
            About The College
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 shadow-xl rounded-2xl p-8 md:p-12">
            <p className="uppercase tracking-[4px] text-[#8c8020] text-sm font-semibold mb-3">
              History
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Irshadiyya Women’s College was founded in 2022 in
              Kodesseri, Karaya, by the Kodesseri Irshadul Umma Sangham,
              with a vision to provide Muslim women with access to both
              Islamic and modern education.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-lg mb-5">
              The institution functions under the supervision of the
              Council of Samastha Women’s College (CSWC) of the Samastha
              Kerala Islam Matha Vidhyabhyasa Board, ensuring excellence
              in both religious and academic instruction.
            </p>

            <p className="text-gray-600 font-[Raleway] leading-relaxed text-lg">
              The college began with the Fadhila and Fadheela programs,
              enabling students to gain religious scholarship alongside
              recognized academic qualifications. Today, it stands as a
              trusted and inspiring place for women to learn, grow, and
              lead.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Us?
            </h2>

            <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 flex gap-4"
              >
                <div>
                  <CheckCircle className="text-[#8c8020] w-7 h-7 mt-1" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-[Raleway] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}