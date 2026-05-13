
export default function Administration() {
  const members = [
    {
      name: "Name",
      role: "Principal",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      role: "Vice Principal",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      role: "Office Head",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      role: "Academic Coordinator",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      role: "PTA President",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
    {
      name: "Name",
      role: "Librarian",
      image:
        "https://media.raihsuite.com/RS0004/web/home/teacher-icon.jpg",
    },
  ];

  return (
    <div>
      <section  className=" relative
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

  <div className="relative z-10 text-center">
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light  animate-[fadeUp_1.5s_ease-in-out]">
            Administration
          </h1>
        </div>
      </section>

      {/* Administration Members */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">
            
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:animate-[zoomIn_1s_ease-out]"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full max-w-xs h-72 object-cover rounded-xl mx-auto"
                />

                {/* Info */}
                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[#8c8020] font-medium text-lg">
                    {member.role}
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

