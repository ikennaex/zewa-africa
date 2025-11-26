import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countries = [
  { name: "Nigeria", coords: [8.6753, 9.082], site: "" },
  { name: "Ghana", coords: [-1.0232, 7.9465], site: "" },
  { name: "Senegal", coords: [-14.4524, 14.4974], site: "" },
  { name: "Sierra Leone", coords: [-11.7799, 8.4606], site: "" },
  { name: "Morocco", coords: [-7.0926, 31.7917], site: "" },
  { name: "Tunisia", coords: [9.5375, 33.8869], site: "" },
  { name: "Kenya", coords: [37.9062, -0.0236], site: "" },
  { name: "Ethiopia", coords: [40.4897, 9.145], site: "" },
  { name: "Tanzania", coords: [34.8888, -6.369], site: "" },
  { name: "Comoros", coords: [43.8722, -11.6455], site: "" },
  { name: "Madagascar", coords: [46.8691, -18.7669], site: "https://zewa.mg" },
  { name: "Mozambique", coords: [35.5296, -18.6657], site: "" },
  { name: "South Africa", coords: [22.9375, -30.5595], site: "" },
  { name: "Zambia", coords: [27.8493, -13.1339], site: "" },
  { name: "Botswana", coords: [24.6849, -22.3285], site: "" },
  { name: "Angola", coords: [17.8739, -11.2027], site: "" },
  { name: "South Sudan", coords: [31.307, 6.877], site: "" },
  { name: "Gabon", coords: [11.6094, -0.8037], site: "" },
];

export default function AfricaMap() {
  const handleClick = (country) => {
    window.open(country.site, "_blank");
  };

  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl px-6">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 750, center: [20, -5] }} // centered to show all of Africa
          width={1200}
          height={900}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E8F5E9"
                  stroke="#0F5132"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#1B6B43", outline: "none" },
                    pressed: { fill: "#0F5132", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {countries.map((country) => (
            <Marker key={country.name} coordinates={country.coords}>
              <motion.circle
                cx="0"
                cy="0"
                r={6}
                fill="#F97316"
                className="cursor-pointer"
                whileHover={{ scale: 1.3 }}
                onClick={() => handleClick(country)}
              />
              <motion.text
                textAnchor="middle"
                y={-12}
                className="font-semibold"
                fill="#0A2C1A"
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
