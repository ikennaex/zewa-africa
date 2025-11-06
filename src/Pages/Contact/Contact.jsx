import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen py-16 px-6 flex items-center justify-center mt-20">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="bg-gradient-to-br from-green-800 to-customGreen text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Get in Touch with ZEWA Group</h1>
          <p className="text-gray-100 mb-8">
            We’re here to support sustainable development across Africa. Reach out
            for inquiries, partnerships, or collaborations towards a greener future.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1" />
              <span>
                <strong>Administrative HQ:</strong> 4 Association Road, Governors Road, Lagos, Nigeria.
                <br />
                <strong>Regional Office Madagascar:</strong> ZEWA Group Collection & Recycling Center –
                Bat II Afriport Warehouse, Forello Tanjumbato, Antananarivo, Madagascar.
                <br />
                <strong>Regional Office Botswana:</strong> Plot 14361 Gaborone West, Botswana.
                <br />
                <strong>Regional Office Ghana:</strong> (Coming Soon)
                <br />
                <strong>Regional Office Mozambique:</strong> (Coming Soon)
                <br />
                <strong>Regional Office Tanzania:</strong> (Coming Soon)
                <br />
                <strong>Regional Office Morocco:</strong> (Coming Soon)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>Recyclage@zewa.africa</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>Operations@zewa.africa (For Global Partnerships)</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span>WhatsApp: +261 388 390 349</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white" />
              <span>Facebook • LinkedIn • X</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a message
          </h3>
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
