import React from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-16 px-6 flex items-center justify-center mt-20 bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="bg-gradient-to-br from-green-800 to-customGreen text-white p-8 md:p-10 flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {t("contact.title")}
            </h1>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6">
              {t("contact.description")}
            </p>
          </div>

          <div className="space-y-4">
            {/* Location rows */}
            {[
              {
                label: t("contact.hqLabel"),
                value: t("contact.hqAddress"),
              },
              {
                label: t("contact.botswana"),
                value: t("contact.botswanaAddress"),
              },
              {
                label: t("contact.madagascar"),
                value: t("contact.madagascarAddress"),
              },
              {
                label: t("contact.ghana"),
                value: t("contact.ghanaAddress"),
              },
            ].map((loc, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15 shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold leading-tight">{loc.label}:</div>
                  <div className="text-gray-100/90">{loc.value}</div>
                </div>
              </div>
            ))}

            {/* Emails */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">For enquiries</div>
                  <a
                    href={`mailto:${t("contact.enquiriesemail")}`}
                    className="text-gray-100/90 underline text-sm"
                  >
                    {t("contact.enquiriesemail")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">For partnerships</div>
                  <a
                    href={`mailto:${t("contact.partnershipsemail")}`}
                    className="text-gray-100/90 underline text-sm"
                  >
                    {t("contact.partnershipsemail")}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="flex items-center gap-3 mt-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <a
                href={`tel:${t("contact.whatsapp")}`}
                className="text-sm text-gray-100/90 underline"
              >
                {t("contact.whatsapp")}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  href: "https://www.facebook.com/share/1ChCCtGkQk/",
                  label: "Facebook",
                  Icon: Facebook,
                },
                {
                  href: "https://www.linkedin.com/company/zewa-zero-e-wastes-africa/",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "https://www.instagram.com/zewa.261?utm_source=qr&igsh=cjR0NnR5Zzl0eXpj",
                  label: "Instagram",
                  Icon: Instagram,
                },
                {
                  href: "",
                  label: "X",
                  Icon: FaXTwitter,
                },
                {
                  href: "",
                  label: "YouTube",
                  Icon: Youtube,
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <s.Icon className="w-4 h-4 text-white group-hover:scale-105" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("contact.formTitle")}
          </h3>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Placeholder - wire to your submit handler
              // e.g. send to API, show success toast, etc.
              alert("Form submitted");
            }}
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.form.nameLabel")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t("contact.form.namePlaceholder")}
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
                required
                aria-required="true"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.form.emailLabel")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
                required
                aria-required="true"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.form.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
                required
                aria-required="true"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-customGreen text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition duration-200 shadow"
            >
              {t("contact.form.submitButton")}
            </button>
          </form>

          {/* Small helper text */}
          <p className="text-xs text-gray-400 mt-3">
            {t("contact.form.note") || "We will get back to you within 48 hours."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
