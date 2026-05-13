export default function Affiliations() {
  return (
    <div>
      {/* Main Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="bg-gray-50 shadow-md rounded-2xl p-8 w-full max-w-sm text-center">
                
                <img
                  src="https://media.raihsuite.com/RS0004/web/about/CSWC.jpg"
                  alt="CSWC"
                  className="w-32 h-32 object-contain mx-auto"
                />

              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              
              <h2 className="text-xl sm:text-2xl font-bold font-[Raleway] leading-snug">
                Affiliated by Council of Samastha Women’s Colleges (CSWC)
              </h2>

              <div className="w-24 h-1 bg-[#8c8020] mt-4 rounded"></div>

              <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              The Council of Samastha Women’s Colleges (CSWC) was established in 2019 and is headquartered in
                  Chelari, Kerala, India. It is an academic governing body that operates under the supervision of the
                  Samastha Kerala Islam Matha Vidhyabhyasa Board (Reg. no. 194/85) and oversees colleges for women
                  offering Fadhila-Fadheela Courses. These courses were developed under the guidance of visionary
                  leaders of Samastha Kerala Jem-iyyathul Ulama. The CSWC aims to educate and train talented female
                  scholars and propagators in moral, spiritual, and standard Islamic knowledge, as well as contemporary
                  and scientific studies. The educational philosophy of the CSWC is based on ethics, morality, and
                  Islamic culture and emphasizes the fulfillment of responsibilities towards family, society, and
                  towards both private and public resources. The CSWC currently operates 95 active day colleges and 11
                  residential colleges, and its success is based on its academic programs, curricula, and affairs.</p>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}