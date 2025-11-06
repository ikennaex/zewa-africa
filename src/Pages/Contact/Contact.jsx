import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kf80s0g', 'template_waassmf', form.current, {
        publicKey: 'nK6b5sNutEBmb4Jfn',
      })
      .then(
        () => {
          alert("Your message has been sent successfully. We’ll get back to you shortly.");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="bg-[#f9fafb] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-customGreen mb-6">
          Contact Boomanage Properties
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Reach out to our team of seasoned professionals for real estate consultations, project discussions, or general inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-customGreen">Let’s Talk</h3>
            <p className="text-gray-700">
              Connect with us today and let our experts guide you through your real estate journey.
            </p>

            <div className="space-y-4 text-gray-800 text-[15px]">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-customYellow text-xl" />
                <span>Maryland Mall, Maryland, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-customYellow text-xl" />
                <span>info@boomanageproperties.net</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-customYellow text-xl" />
                <span>+2348139096910, +2348123173582</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Tell us what you need help with..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-customGreen text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#033042] transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
