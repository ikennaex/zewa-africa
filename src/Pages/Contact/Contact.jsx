import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-16 px-6 flex items-center justify-center mt-20">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="bg-gradient-to-br from-green-800 to-customGreen text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-gray-100 mb-8">
            {t("contact.description")}
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1" />
              <span>
                <strong>{t("contact.hqLabel")}:</strong> {t("contact.hqAddress")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>{t("contact.email")}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span>{t("contact.whatsapp")}</span>
            </div>

            <div className="flex items-center gap-4 text-white">
              <a target="_blank" href="https://www.facebook.com/share/1ChCCtGkQk/">
                <Facebook className="w-5 h-5" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/zewa-zero-e-wastes-africa/">
                <Linkedin className="w-5 h-5" />
              </a>
              <a target="_blank" href="https://www.instagram.com/zewa.261?utm_source=qr&igsh=cjR0NnR5Zzl0eXpj">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("contact.formTitle")}
          </h3>
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {t("contact.form.nameLabel")}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t("contact.form.namePlaceholder")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {t("contact.form.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {t("contact.form.messageLabel")}
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-customGreen text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition duration-200"
            >
              {t("contact.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
