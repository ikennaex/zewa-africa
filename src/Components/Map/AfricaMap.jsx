import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Define country groups
const blueCountries = [
  "Nigeria",
  "Ghana",
  "Botswana",
  "Madagascar",
  "Togo",
  "Namibia",
  "South Africa",
  "Comoros",
];

const pinkCountries = [
  "Mozambique",
  "Morocco",
  "Algeria",
  "Dem. Rep. Congo",
  "Gabon",
  "Ethiopia",
  "Uganda",
  "South Sudan",
  "Tanzania",
  "Angola",
  "Egypt",
  "Zambia",
  "Senegal",
  "Sierra Leone",
  "Kenya",
];

// All countries with coordinates and optional site links
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
  { name: "DRC", coords: [21.7587, -4.0383], site: "" },
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
  const handleClick = (country) => {
    if (country.site) window.open(country.site, "_blank");
  };

  const getCountryColor = (name) => {
    if (blueCountries.includes(name)) return "#1D4ED8"; // blue
    if (pinkCountries.includes(name)) return "#EC4899"; // pink
    return "#E8F5E9"; // default light green
  };

  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl px-6 mb-8">
        {/* Legend */}
        <div className="flex justify-center gap-8 text-gray-700 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-700 rounded-full"></span>
            Blue Countries
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
            Pink Countries
          </div>
        </div>

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 550, center: [20, -5] }}
          width={1200}
          height={900}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const fillColor = getCountryColor(countryName);
                // console.log(countryName)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#0F5132"
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#1B6B41", outline: "none" },
                      // pressed: { fill: "#0F5132", outline: "none" },
                    }}
                    onClick={() => {
                      const countryObj = countries.find(
                        (c) => c.name === countryName
                      );
                      handleClick(countryObj);
                    }}
                  />
                );
              })
            }
          </Geographies>

          {countries.map((country) => (
            <Marker key={country.name} coordinates={country.coords}>
              {/* <motion.circle
                cx="0"
                cy="0"
                r={6}
                fill={blueCountries.includes(country.name) ? "#3B82F6" : pinkCountries.includes(country.name) ? "#EC4899" : "#F97316"}
                className="cursor-pointer"
                whileHover={{ scale: 1.3 }}
                onClick={() => handleClick(country)}
              /> */}
              <motion.text
                textAnchor="middle"
                y={-12}
                className="font-semibold text-xs sm:text-sm"
                fill="#00000"
                whileHover={{ scale: 1.1 }}
              >
                {country.name}
              </motion.text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}
