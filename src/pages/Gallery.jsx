import { useEffect, useRef, useState } from "react";

function FadeUpImage({ image, index }) {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={image}
      alt={`Gallery ${index + 1}`}
      className={`w-full h-72 object-cover group-hover:scale-110 transition duration-1000
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    />
  );
}

export default function Gallery() {
  const images = [
    "https://media.raihsuite.com/RS0004/web/gallery/slider1.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/slider2.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/slider5.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/slider3.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event1.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event2.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event3.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event4.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event5.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event6.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event7.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event8.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event9.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event10.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event11.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event12.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event13.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event14.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event15.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event16.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event17.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event18.jpg",
    "https://media.raihsuite.com/RS0004/web/gallery/event19.jpg",
  ];

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
            Gallery
          </h1>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  overflow-hidden">
            
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300 bg-white"
              >
                
                <FadeUpImage image={image} index={index} />

              </div>
            ))}

          </div>

        </div>
      </section>

     

    </div>
  );
}