import React from "react";
// import FadeIn from "../fadein";
import { Mail, Globe2, Link } from "lucide-react";
import FadeIn from "../../Components/fadein";

const CookiePolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: `This Cookies Policy explains how ZEWA Group (Zero Electronics Waste Africa) uses cookies and similar technologies on our website www.zewa.africa to improve your browsing experience, analyze site traffic, and ensure website functionality. By continuing to browse our site, you agree to the use of cookies as described in this policy.`,
    },
    {
      title: "2. What Are Cookies?",
      content: `Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help us recognize your device, remember your preferences, and enhance your user experience.`,
    },
    {
      title: "3. How We Use Cookies",
      list: [
        "Essential Cookies: Required for website functionality such as navigation, security, and access to certain features.",
        "Performance & Analytics Cookies: Help us understand how visitors use our website so we can improve content and functionality.",
        "Functionality Cookies: Remember user preferences such as language and region to provide a personalized experience.",
        "Marketing & Third-Party Cookies: Used to deliver relevant content or track engagement through trusted partners (e.g., analytics or social media integrations).",
      ],
    },
    {
      title: "4. Managing Your Cookie Preferences",
      list: [
        "View which cookies are stored on your device",
        "Delete existing cookies",
        "Block cookies from specific sites",
        "Set preferences for future cookie storage",
      ],
      extra: `You can control or delete cookies at any time by adjusting your browser settings. Please note that disabling certain cookies may affect website performance or functionality. For more details, visit your browser’s help section.`,
    },
    {
      title: "5. Third-Party Services",
      content: `ZEWA Group may use trusted third-party services (e.g., Google Analytics) to monitor site performance. These third parties may also use cookies in accordance with their own privacy policies. ZEWA does not control or manage third-party cookies directly.`,
    },
    {
      title: "6. Updates to This Policy",
      content: `ZEWA Group may update this Cookies Policy periodically to reflect changes in technology or legal requirements. The latest version will always be available on our website, with the date of the last update indicated.`,
    },
  ];

  return (
    <FadeIn duration={120}>
      <section className="min-h-screen py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-12 space-y-10">
          <h1 className="text-3xl lg:text-4xl font-black text-customGreen text-center mb-12">
            Cookies Policy
          </h1>

          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold text-customGreen mb-3">
                {section.title}
              </h2>
              {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.extra && <p className="text-gray-700 mt-2">{section.extra}</p>}
            </section>
          ))}

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-green-800 to-customGreen text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-3">Contact ZEWA</h2>
            <p className="text-gray-100 mb-4">
              For questions regarding this Cookies Policy or data privacy practices, please contact:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:privacy@zewa.africa" className="hover:underline">
                  privacy@zewa.africa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span>ZEWA Group – Zero Electronics Waste Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white">
                  <Link className="w-5 h-5" />
                </div>
                <a
                  href="https://www.zewa.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.zewa.africa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default CookiePolicy;
