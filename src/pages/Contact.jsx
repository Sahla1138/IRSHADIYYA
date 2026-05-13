import { useState } from "react";

export default function Contact() {
  const API_BASE =
    "https://staging-api.raihsuite.com/v1/crm/enquiries/";

  const TENANT = 6;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [responseColor, setResponseColor] = useState("black");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMsg("Submitting...");
    setResponseColor("black");

    const payload = {
      ...formData,
      tenant: TENANT,
    };

    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {}

      if (response.ok) {
        setResponseColor("green");
        setResponseMsg(
          "✅ Your message has been sent successfully!"
        );

        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setResponseColor("red");
        setResponseMsg(
          "❌ " + (data?.message || "Something went wrong")
        );
      }
    } catch (error) {
      console.error(error);

      setResponseColor("red");
      setResponseMsg(
        "❌ Network error. Please try again."
      );
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-[#8c8020] mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-700 mb-8">
              <div>
                <h3 className="font-semibold font-[Raleway] text-lg">
                  Address
                </h3>

                <p className="font-[Raleway]">
                  Karaya, Pandikkad, Malappuram, Kerala
                </p>
              </div>

              <div>
                <h3 className="font-semibold font-[Raleway] text-lg">
                  Email
                </h3>

                <p className="font-[Raleway]">
                  irshadiyyawomenscollege@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold font-[Raleway] text-lg">
                  Phone
                </h3>

                <p className="text-sm font-normal text-gray-700 tracking-wide font-serif">
                  +91 8547 069 129
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395406.0319791282!2d76.23244723834644!3d11.11999069570994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba631001fd0c93d%3A0xff49af9fdf7902cd!2sIrshadiyya%20womens%20college!5e1!3m2!1sen!2sin!4v1746190499794!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                className="border-0 w-full"
              ></iframe>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-[#8c8020] mb-6">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c8020]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c8020]"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c8020]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c8020]"
                ></textarea>
              </div>

              {/* Response */}
              <p
                className="text-sm font-medium"
                style={{ color: responseColor }}
              >
                {responseMsg}
              </p>

              {/* Button */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="bg-[#8c8020] hover:bg-[#746919] text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}