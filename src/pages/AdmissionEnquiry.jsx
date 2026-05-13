export default function AdmissionEnquiry() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-64 sm:h-80 md:h-96 
        bg-[url('https://media.raihsuite.com/RS0004/web/home/banner1.jpg')]
        bg-cover bg-center flex items-center animate-[zoomIn_1s_ease-in-out] justify-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-[Raleway] animate-[fadeUp_1s_ease-in-out] text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Admission Registration
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10">
            
            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#8c8020]">
                Register for Admission
              </h2>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Irshadiyya Women&apos;s College
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Student Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter student name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Parent Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter parent name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Address
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Enter address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last / Current Institute
                  </label>

                  <input
                    type="text"
                    placeholder="Enter institute name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8c8020]"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-4">
                  Desired Course <span className="text-red-500">*</span>
                </label>

                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-[#8c8020] transition">
                    <input
                      type="radio"
                      name="course"
                      value="Fadhila"
                      className="accent-[#8c8020]"
                      required
                    />
                    Fadhila
                  </label>

                  <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-[#8c8020] transition">
                    <input
                      type="radio"
                      name="course"
                      value="Fadheela"
                      className="accent-[#8c8020]"
                    />
                    Fadheela
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#8c8020] hover:bg-[#756b18] text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}