import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGlobeAfrica } from "react-icons/fa";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const blueCountries = [
  "Nigeria", "Ghana", "Botswana", "Madagascar", "Togo", "Namibia", "South Africa", "Comoros",
];
const pinkCountries = [
  "Mozambique", "Morocco", "Algeria", "Dem. Rep. Congo", "Gabon", "Ethiopia", "Uganda", "South Sudan", "Tanzania", "Angola", "Egypt", "Zambia", "Senegal", "Sierra Leone", "Kenya",
];
const remainingAfricanCountries = [
  "Benin", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Rep.", "Chad", "Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Gambia", "Guinea", "Guinea-Bissau", "Côte d'Ivoire", "Lesotho", "Liberia", "Libya", "Malawi", "Mali", "Mauritania", "Mauritius", "Niger", "Rwanda", "Sao Tome and Principe", "Seychelles", "Somalia", "Sudan", "Tunisia", "Zimbabwe",
];

const countries = [
  { name: "Nigeria", coords: [8.6753, 9.082], site: "" },
  { name: "Ghana", coords: [-1.0232, 7.9465], site: "" },
  { name: "Botswana", coords: [24.6849, -22.3285], site: "" },
  { name: "Madagascar", coords: [46.8691, -18.7669], site: "https://zewa.mg" },
  { name: "Togo", coords: [1.0197, 8.6195], site: "" },
  { name: "Namibia", coords: [17.0902, -22.9576], site: "" },
  { name: "South Africa", coords: [22.9375, -30.5595], site: "" },
  { name: "Comoros", coords: [43.8722, -11.6455], site: "" },
  { name: "Mozambique", coords: [35.5296, -18.6657], site: "" },
  { name: "Morocco", coords: [-7.0926, 31.7917], site: "" },
  { name: "Algeria", coords: [3.0588, 28.0339], site: "" },
  { name: "Dem. Rep. Congo", coords: [21.7587, -4.0383], site: "" },
  { name: "Gabon", coords: [11.6094, -0.8037], site: "" },
  { name: "Ethiopia", coords: [40.4897, 9.145], site: "" },
  { name: "Uganda", coords: [32.2903, 1.3733], site: "" },
  { name: "South Sudan", coords: [31.307, 6.877], site: "" },
  { name: "Tanzania", coords: [34.8888, -6.369], site: "" },
  { name: "Angola", coords: [17.8739, -11.2027], site: "" },
  { name: "Egypt", coords: [30.8025, 26.8206], site: "" },
  { name: "Zambia", coords: [27.8493, -13.1339], site: "" },
  { name: "Senegal", coords: [-14.4524, 14.4974], site: "" },
  { name: "Sierra Leone", coords: [-11.7799, 8.4606], site: "" },
  { name: "Kenya", coords: [37.9062, -0.0236], site: "" },
];

export default function AfricaMap() {
  const { t } = useTranslation();
  const [tooltip, setTooltip] = useState({ visible: false, name: "", x: 0, y: 0 });

  const handleClick = (country) => {
    if (country?.site) window.open(country.site, "_blank");
  };

  const getCountryColor = (name) => {
    if (blueCountries.includes(name)) return "#38D2CF";
    if (pinkCountries.includes(name)) return "#1D4ED8";
    if (remainingAfricanCountries.includes(name)) return "#d4d2d2";
    return "none";
  };

  const getClientCoords = (event) => {
    if (!event) return { x: 0, y: 0 };
    if (event.touches && event.touches[0]) return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    return { x: event.clientX, y: event.clientY };
  };

  const handleGeoEnter = (evt, countryName) => {
    const { x, y } = getClientCoords(evt);
    setTooltip({ visible: true, name: countryName, x, y });
  };
  const handleGeoMove = (evt, countryName) => {
    const { x, y } = getClientCoords(evt);
    setTooltip((s) => ({ ...s, x, y, name: countryName, visible: true }));
  };
  const handleGeoLeave = () => setTooltip({ visible: false, name: "", x: 0, y: 0 });

  return (
    <div className="w-full py-6 flex flex-col items-center">

              {/* MAP */}
              <div className="max-w-7xl mx-auto mt-28 text-center">
                <FaGlobeAfrica size={56} className="text-customGreen mx-auto" />
                <h1 className="text-3xl lg:text-4xl font-bold text-customGreen mt-4">
                  {t("about.presenceTitle")}
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto mt-2">
                  {t("about.presenceText")}
                </p>
              </div>
      <div className="relative w-full">
        {/* Dimmed Video */}
        <video
          src="/videos/africa.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-customGreen/40 pointer-events-none"></div>

        {/* Map Overlay */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 220, center: [20, 1] }}
            width={800}
            height={310}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 800 310"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const shouldStroke =
                    blueCountries.includes(countryName) ||
                    pinkCountries.includes(countryName) ||
                    remainingAfricanCountries.includes(countryName);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryColor(countryName) || "none"}
                      stroke={shouldStroke ? "#000" : "none"}
                      strokeWidth={shouldStroke ? 0.5 : 0}
                      style={{ default: { outline: "none" }, hover: { outline: "none" } }}
                      onMouseEnter={(evt) => handleGeoEnter(evt, countryName)}
                      onMouseMove={(evt) => handleGeoMove(evt, countryName)}
                      onMouseLeave={handleGeoLeave}
                      onClick={() =>
                        handleClick(countries.find((c) => c.name === countryName))
                      }
                    />
                  );
                })
              }
            </Geographies>

            {countries.map((country) => (
              <Marker key={country.name} coordinates={country.coords}>
                <motion.g
                  initial="rest"
                  whileHover="hover"
                  onClick={() => handleClick(country)}
                  style={{ cursor: country.site ? "pointer" : "default" }}
                >
                  <circle
                    r={5}
                    fill={
                      blueCountries.includes(country.name)
                        ? "#38D2CF"
                        : pinkCountries.includes(country.name)
                        ? "#1D4ED8"
                        : "#000"
                    }
                  />
                  <motion.text
                    textAnchor="middle"
                    y={-10}
                    className="font-semibold lg:text-[9px] sm:text-xs pointer-events-none"
                    fill="#000"
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1, scale: 1.1 } }}
                    transition={{ duration: 0.2 }}
                  >
                    {country.name}
                  </motion.text>
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
}
