import React from "react";
// import FadeIn from "../fadein";
import { Mail, Globe2, Link } from "lucide-react";
import FadeIn from "../../Components/fadein";

const DataPolicy = () => {
  const sections = [
    {
      title: "1. Purpose",
      content: `The purpose of this policy is to outline how ZEWA Group collects, processes, stores, and protects personal data in accordance with applicable data protection and privacy laws. ZEWA is committed to ensuring that all personal information handled is used fairly, transparently, and securely.`,
    },
    {
      title: "2. Scope",
      list: [
        "Employees, contractors, and partners of ZEWA Group.",
        "Clients, vendors, and third parties whose personal data we process.",
        "All operations, systems, and websites owned or managed by ZEWA Group and its subsidiaries across Africa.",
      ],
    },
    {
      title: "3. Data We Collect",
      list: [
        "Identification details (name, title, organization).",
        "Contact information (email address, phone number, postal address).",
        "Employment or business-related data (for service or partnership purposes).",
        "Website usage data (IP address, browser information, analytics data).",
        "Sensitive personal data is collected only when strictly necessary and with explicit consent.",
      ],
    },
    {
      title: "4. Legal Basis for Processing",
      list: [
        "It is necessary to fulfill a contract or provide services.",
        "There is legal or regulatory obligation.",
        "The individual has given consent.",
        "It is required for legitimate business interests, provided such interests do not override individual rights.",
      ],
    },
    {
      title: "5. Data Protection Principles",
      list: [
        "Lawfulness, fairness, and transparency – Data is processed legally and openly.",
        "Purpose limitation – Data is collected for specific, legitimate purposes only.",
        "Data minimization – Only the data necessary for intended use is collected.",
        "Accuracy – Data is kept accurate and up to date.",
        "Storage limitation – Data is retained only as long as needed.",
        "Integrity and confidentiality – Data is protected against unauthorized access, loss, or damage.",
      ],
    },
    {
      title: "6. Data Security",
      list: [
        "Secure servers, encrypted systems, and restricted access controls.",
        "Regular data backups and cybersecurity monitoring.",
        "Confidentiality agreements for all staff handling personal information.",
      ],
    },
    {
      title: "7. Data Sharing and Third Parties",
      content: `ZEWA Group may share personal data with trusted service providers, contractors, or partners who support our operations, and with government or regulatory authorities when legally required. All third parties must comply with ZEWA’s data protection standards and confidentiality obligations. ZEWA Group does not sell or rent personal data to any external party.`,
    },
    {
      title: "8. International Data Transfers",
      content: `Where data is transferred across borders, ZEWA ensures appropriate data protection safeguards are in place, following relevant legal frameworks and international standards.`,
    },
    {
      title: "9. Data Retention",
      content: `Personal data is retained only for the duration necessary to fulfill contractual or service obligations or comply with legal or regulatory requirements. Once no longer required, data is securely deleted, anonymized, or archived.`,
    },
    {
      title: "10. Individual Rights",
      list: [
        "Access their personal data held by ZEWA.",
        "Request correction or deletion of inaccurate or outdated data.",
        "Withdraw consent for processing (where applicable).",
        "Object to data processing under certain circumstances.",
        "Request data portability, where technically feasible.",
        "Requests can be made via privacy@zewa.africa",
      ],
    },
    {
      title: "11. Responsibilities",
      list: [
        "ZEWA Management ensures compliance with this policy across all operations.",
        "Employees must handle personal data responsibly and report any suspected data breaches immediately.",
        "Data Protection Officer (DPO) oversees data protection activities and responds to privacy-related inquiries.",
      ],
    },
    {
      title: "12. Data Breach Management",
      list: [
        "Investigate and contain the incident promptly.",
        "Notify affected individuals and authorities where legally required.",
        "Take corrective action to prevent recurrence.",
      ],
    },
    {
      title: "13. Policy Review and Updates",
      content: `This policy is reviewed annually or when significant changes occur in legal, operational, or technological frameworks. The latest version is always available at www.zewa.africa.`,
    },
  ];

  return (
    <FadeIn duration={120}>
      <section className="min-h-screen py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-12 space-y-10">
          <h1 className="text-3xl lg:text-4sxl font-black text-customGreen text-center mb-12">
            Data Protection Policy
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
            </section>
          ))}

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-green-800 to-customGreen text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-3">Contact ZEWA</h2>
            <p className="text-gray-100 mb-4">
              For any data protection questions, concerns, or requests:
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

export default DataPolicy;
