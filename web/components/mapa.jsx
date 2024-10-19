// components/MapCR.js
import React from "react";

const krajData = [
  { name: "Praha", value: 1, coords: "M10,10 L20,10 L20,20 L10,20 Z" },
  { name: "Středočeský", value: 2, coords: "M20,10 L30,10 L30,20 L20,20 Z" },
  { name: "Jihočeský", value: 3, coords: "M10,20 L20,20 L20,30 L10,30 Z" },
  { name: "Plzeňský", value: 4, coords: "M20,20 L30,20 L30,30 L20,30 Z" },
  { name: "Karlovarský", value: 5, coords: "M30,10 L40,10 L40,20 L30,20 Z" },
  { name: "Ústecký", value: 6, coords: "M40,10 L50,10 L50,20 L40,20 Z" },
  { name: "Liberecký", value: 7, coords: "M40,20 L50,20 L50,30 L40,30 Z" },
  {
    name: "Královéhradecký",
    value: 8,
    coords: "M30,30 L40,30 L40,40 L30,40 Z",
  },
  { name: "Pardubický", value: 9, coords: "M20,30 L30,30 L30,40 L20,40 Z" },
  { name: "Vysočina", value: 10, coords: "M10,30 L20,30 L20,40 L10,40 Z" },
  { name: "Jihomoravský", value: 11, coords: "M10,40 L20,40 L20,50 L10,50 Z" },
  { name: "Olomoucký", value: 12, coords: "M20,40 L30,40 L30,50 L20,50 Z" },
  { name: "Zlínský", value: 13, coords: "M30,40 L40,40 L40,50 L30,50 Z" },
  {
    name: "Moravskoslezský",
    value: 14,
    coords: "M40,40 L50,40 L50,50 L40,50 Z",
  },
];

const MapCR = () => {
  return (
    <svg viewBox="0 0 60 60" style={{ width: "100%", height: "auto" }}>
      {krajData.map((kraj) => (
        <g key={kraj.name} transform="translate(0,0)">
          <path
            d={kraj.coords}
            fill="lightblue"
            stroke="black"
            strokeWidth={0.5}
          />
          <text
            x={
              (parseInt(kraj.coords.split(" ")[1]) +
                parseInt(kraj.coords.split(" ")[4])) /
                2 -
              1
            }
            y={
              (parseInt(kraj.coords.split(" ")[2]) +
                parseInt(kraj.coords.split(" ")[5])) /
                2 +
              1
            }
            fontSize="3"
            textAnchor="middle"
          >
            {kraj.value}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default MapCR;
