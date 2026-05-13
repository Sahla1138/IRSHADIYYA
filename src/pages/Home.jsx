import { FaFacebookF,
  FaInstagram,
  FaTwitter,FaEnvelope, } from "react-icons/fa";
import { useState,useEffect,useRef } from "react";
import {Users,
  UserCheck,
  Smile,
   CheckCircle,
    GraduationCap,
   } from "lucide-react";
   import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const counterRef = useRef(null);

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
         let start = 0;

          const duration = 2000;
          const increment = end / (duration / 20);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              start = end;
              clearInterval(timer);
            }

            setCount(Math.floor(start));
          }, 20);

          return () => clearInterval(timer);
        } else {
          // Reset when leaving section
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start counting animation
  useEffect(() => {
    if (!startCount) return;

    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [startCount, end]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
    
     const slides = [
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/carousal-1.jpg",
      title: "Your Bright Future is Our Mission",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/carousal-2.jpg",
      title: "Education is Life",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/carousal-3.jpg",
      title: "Helping Each of Our Students Fulfill the Potential",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [activeTab, setActiveTab] = useState("news");

  const news = [
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/news-4.jpg",
      title: "Stand with Palestine",
      description:
        "The Irshadiyya Women’s College is taking a stand against the war in Palestine.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/news2.png",
      title: "Hiya Fiesta 2024, 2nd Runner Up",
      description:
        "Irshadiyya Women’s College secured 2nd runner-up position at Hiya Fiesta 2024.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/news3.png",
      title: "Snehapoorvam",
      description:
        "Our college joined as a proud subscriber of Suprabhatham newspaper.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/news1.png",
      title: "A Helping Hand to Wayanad",
      description:
        "Students extended support to flood-affected families through relief activities.",
    },
  ];

  const events = [
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/featuredevent2.png",
      title: "One day spiritual camp",
      description:
        "Spiritual Camp on August 14, 2024, led by Rafeeque Chennai.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/featuredevent1.png",
      title: "Hiya Fiesta 2K24",
      description:
        "Grand Finale on September 24, 2024 at Irshadiyya Women’s College.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/featuredevent4.jpg",
      title: "Career Guidance Class",
      description:
        "Career guidance event featuring Dr. Abdul Khayyoom.",
    },
    {
      image:
        "https://media.raihsuite.com/RS0004/web/home/featuredevent5.jpg",
      title: "Savari'23",
      description:
        "An excursion to Wagamon organized by the Student's Union.",
    },
  ];

  const data = activeTab === "news" ? news : events;
const counters = [
  {
    icon: <Users size={40} />,
    number: 1000,
    suffix: "+",
    label: "Students Enrolled",
  },
  {
    icon: <UserCheck size={40} />,
    number: 25,
    suffix: "+",
    label: "Certified Teachers",
  },
  {
    icon: <GraduationCap size={40} />,
    number: 100,
    suffix: "%",
    label: "Passing to Universities",
  },
  {
    icon: <Smile size={40} />,
    number: 99,
    suffix: "%",
    label: "Parents Satisfaction",
  },
];
  

  const teachers = [
    {
      name: "Name",
      subject: "Physical Education",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      subject: "English Teacher",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      subject: "Math Teacher",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      subject: "Physics Teacher",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
  ];
   const testimonials = [
    {
      text: `The Fadhila course gave me the best of both worlds — Islamic studies
                  and Higher Secondary education. I was able to strengthen my faith while preparing for my future
                  studies. The teachers were supportive, and the environment always felt safe and inspiring.`,
      name: "Name",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      text: `Studying at Irshadiyya Women’s College was a turning point in my life.
                  The Fadhila program helped me build confidence in academics while keeping me deeply connected to
                  Islamic values. I am grateful for the balance it gave me.`,
      name: "Name",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      text: `What I loved most about the Fadhila course was the way it combined
                  Qur’an and Hadith studies with modern subjects. It prepared me for higher studies and gave me a strong
                  foundation in faith and knowledge. The teachers were amazing and always encouraged us to excel in both areas.`,
      name: "Name",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Balanced Education",
      description:
        "Islamic studies combined with modern academics.",
    },
    {
      title: "Recognized Programs",
      description:
        "Courses under the Council of Samastha Women’s College (CSWC).",
    },
    {
      title: "Safe Environment",
      description:
        "A secure and supportive campus for Muslim women.",
    },
    {
      title: "Personal Growth",
      description:
        "Leadership, confidence, and life skills development.",
    },
    {
      title: "Experienced Faculty",
      description:
        "Qualified teachers for both religious and academic subjects.",
    },
    {
      title: "Pathway to Degrees",
      description:
        "Higher Secondary and UGC-recognized degree options.",
    },
    {
      title: "Strong Values",
      description:
        "Focus on moral integrity and community service.",
    },
    {
      title: "Established Reputation",
      description:
        "Part of the trusted Samastha Kerala Islam Matha Vidhyabhyasa Board network.",
    },
  ];



  return (
    
    <div>
      
        <section
  className="relative w-full h-80 sm:h-96 md:h-screen overflow-hidden 
  bg-[url('https://media.raihsuite.com/RS0004/web/gallery/slider1.jpg')] 
  bg-cover bg-center bg-no-repeat"
>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="w-full h-full bg-black/50 flex items-center justify-center px-4">
              
              {/* Text */}
              <div className="max-w-4xl text-center">
                <h1 className="text-white font-light font-[Raleway] leading-snug text-2xl sm:text-4xl md:text-5xl drop-shadow-lg">
                  {slide.title}
                </h1>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
    {/* Welcome Section */}
<section className="bg-[#8c8020] pt-16 pb-40 relative">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Heading */}
    <h2 className="text-white text-3xl sm:text-4xl font-[Raleway] md:text-5xl font-light leading-snug">
      Welcome to Irshadiyya Women's College
    </h2>

    {/* Card */}
    <div className="absolute left-1/2 -translate-x-1/2 mt-8 w-[92%] max-w-6xl">
      <div className="bg-[#f5f5f5] shadow-2xl p-8 sm:p-10 md:p-12">
        
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          About the College
        </h3>

        <p className="text-gray-500 font-[Raleway] text-base leading-9">
          Established in 2022 in Kodesseri, Karaya, Irshadiyya Women’s
          College is managed by the Kodesseri Irshadul Umma Sangham and
          operates under the Council of Samastha Women’s College (CSWC)
          of the Samastha Kerala Islam Matha Vidhyabhyasa Board.
          Offering Fadhila (2 years) and Fadheela (3 years) courses,
          the college integrates Islamic studies with Higher Secondary
          and Degree-level education to nurture women of knowledge,
          faith, and purpose.
        </p>

        {/* Button */}
        <div className="mt-10">
          <a
            href="/about"
            className="inline-block bg-[#7a5815] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#65470f] transition duration-300"
          >
            Read More
          </a>
        </div>

      </div>
    </div>

  </div>
</section>

{/* Space for overlap */}
<div className="h-72 bg-gray-100"></div>
      <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url(https://media.raihsuite.com/RS0004/web/home/banner1.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Highlights
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          
          <div className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20">
            
            {/* Featured News */}
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 text-sm sm:text-base font-semibold transition duration-300 ${
                activeTab === "news"
                  ? "bg-[#8c8020] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Featured News
            </button>

            {/* Featured Events */}
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 text-sm sm:text-base font-semibold transition duration-300 ${
                activeTab === "events"
                  ? "bg-[#8c8020] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Featured Events
            </button>

          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-10 text-center text-white">
          
         

        </div>
      </div>
    </section>
     <section className="py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="pb-12"
    >

      {data.map((item, index) => (
        <SwiperSlide key={index}>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 min-h-56 border-b-4 border-[#8c8020] bg-[#f5f5f5] group-hover:bg-[#8c8020] transition duration-500">

              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-4 transition duration-500">
                {item.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed transition duration-500">
                {item.description}
              </p>

            </div>
          </div>

        </SwiperSlide>
      ))}

    </Swiper>

  </div>
</section>
     <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8c8020]">
            Our Featured Courses
          </h2>

          <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded"></div>
        </div>

        {/* Courses Container */}
        <div className="space-y-10">
          
          {/* Fadhila */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition duration-300">
            
            <h3 className="text-2xl font-bold text-[#8c8020] mb-3">
              Fadhila
            </h3>

            <p className="text-sm sm:text-base font-semibold text-gray-700 mb-5">
              Religious Study + HSE/PUC/ Equivalent (Commerce,
              Humanities & Science)
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                The Fadhila program is a yearly curriculum designed to provide Muslim girl students who have passed
                  the
                  SSLC examination under the Kerala Islamic Education Board with a comprehensive education in religion
                  along with academics. In addition to Quran, Hadith, Fiqh, Aqeedah, Nahv, and Islamic History, the
                  Higher
                  Secondary section also incorporates a cohesive presentation of subjects such as Science, Commerce, and
                  Humanities. Upon completion of the two-year course in the college, the student will be eligible to
                  receive the recognized certificate from the education board, entitling them to the certificate for
                  passing the entire course.
            </p>

           

          </div>

          {/* Fadheela */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition duration-300">
            
            <h3 className="text-2xl font-bold text-[#8c8020] mb-3">
              Fadheela
            </h3>

            <p className="text-sm sm:text-base font-semibold text-gray-700 mb-5">
              Religious Study + UG (UGC Accredited University)
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
             Fadheela is a three-year degree program that is offered to students who successfully complete the
                  course and pass with distinction. In addition to the certificate awarded for successfully completing
                  the
                  college course, students who have passed the course with distinction will receive a Fadheela degree
                  certificate. The uniqueness of this course is that it enables students to obtain a degree recognized
                  by
                  the university in addition to religious studies. Along with the degree, the course also combines
                  religious studies, and at the end of the three-year course, the student is awarded the title
                  “Fadheela”.
            </p>

            

          </div>

        </div>
      </div>
    </section>
    <section className="py-16 bg-[#8c8020]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {counters.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center text-white hover:scale-105 transition duration-300"
            >
              
              {/* Icon */}
              <div className="flex justify-center mb-4 text-white">
                {item.icon}
              </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                <Counter end={item.number} suffix={item.suffix} />
                </h3>

              {/* Label */}
              <p className="text-sm sm:text-base font-medium text-gray-100">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
     <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8c8020]">
            Meet Our Qualified Teachers
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our teachers are qualified, caring, and dedicated to guiding
            students in both academics and values.
          </p>

          <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded"></div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-6"
            >
              
              {/* Teacher Image */}
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#8c8020]/20"
              />

              {/* Teacher Info */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {teacher.name}
                </h3>

                <p className="text-sm text-[#8c8020] mt-1 font-medium">
                  {teacher.subject}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-5">
                
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#8c8020] transition"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="#"
                  className="text-gray-500 hover:text-[#8c8020] transition"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="text-gray-500 hover:text-[#8c8020] transition"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="#"
                  className="text-gray-500 hover:text-[#8c8020] transition"
                >
                  <FaEnvelope size={18} />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
      <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url(https://media.raihsuite.com/RS0004/web/home/carousal-2.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Alumni Testimonial
          </h2>

          <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Our alumni share their experiences of balancing Islamic
            studies with modern academics at Irshadiyya Women’s College.
          </p>

          <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl transition duration-500">
            
            {/* Image */}
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#8c8020]"
            />

            {/* Quote */}
            <p className="mt-6 text-sm sm:text-lg leading-relaxed italic text-gray-100">
              “{testimonials[current].text}”
            </p>

            {/* Name */}
            <h4 className="mt-6 text-lg font-semibold text-[#f3e7a0]">
              — {testimonials[current].name}
            </h4>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-[#8c8020]"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8c8020]">
            Why Choose Us ?
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
           At Irshadiyya Women’s College, education goes beyond classrooms — it is about faith, learning,
            and growth.
            We prepare young women to succeed in today’s world while holding firmly to Islamic values, within a safe and
            caring environment where every student can thrive.
          </p>

          <div className="w-24 h-1 bg-[#8c8020] mx-auto mt-4 rounded"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              
              {/* Icon */}
              <div className="shrink-0">
                <CheckCircle
                  size={32}
                  className="text-[#8c8020]"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
   
      
    </div>
  );
}