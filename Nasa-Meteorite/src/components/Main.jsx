import { useState } from "react";

import Navigation from "./Navigation";
import List from "./List";
import Graph from "./Graph";
import Map from "./Map";

const Main = () => {
  const [data, setData] = useState([
    {
      name: "Aachen",
      id: "1",
      nametype: "Valid",
      recclass: "L5",
      mass: "21",
      fall: "Fell",
      year: "1880-01-01T00:00:00.000",
      reclat: "50.775000",
      reclong: "6.083330",
      geolocation: {
        latitude: "50.775",
        longitude: "6.08333",
      },
    },
    {
      name: "Aarhus",
      id: "2",
      nametype: "Valid",
      recclass: "H6",
      mass: "720",
      fall: "Fell",
      year: "1951-01-01T00:00:00.000",
      reclat: "56.183330",
      reclong: "10.233330",
      geolocation: {
        latitude: "56.18333",
        longitude: "10.23333",
      },
    },
    {
      name: "Abee",
      id: "6",
      nametype: "Valid",
      recclass: "EH4",
      mass: "107000",
      fall: "Fell",
      year: "1952-01-01T00:00:00.000",
      reclat: "54.216670",
      reclong: "-113.000000",
      geolocation: {
        latitude: "54.21667",
        longitude: "-113.0",
      },
    },
    {
      name: "Acapulco",
      id: "10",
      nametype: "Valid",
      recclass: "Acapulcoite",
      mass: "1914",
      fall: "Fell",
      year: "1976-01-01T00:00:00.000",
      reclat: "16.883330",
      reclong: "-99.900000",
      geolocation: {
        latitude: "16.88333",
        longitude: "-99.9",
      },
    },
    {
      name: "Achiras",
      id: "370",
      nametype: "Valid",
      recclass: "L6",
      mass: "780",
      fall: "Fell",
      year: "1902-01-01T00:00:00.000",
      reclat: "-33.166670",
      reclong: "-64.950000",
      geolocation: {
        latitude: "-33.16667",
        longitude: "-64.95",
      },
    },
    {
      name: "Aleppo",
      id: "462",
      nametype: "Valid",
      recclass: "L6",
      mass: "3200",
      fall: "Fell",
      year: "1873-01-01T00:00:00.000",
      reclat: "36.233330",
      reclong: "37.133330",
      geolocation: {
        latitude: "36.23333",
        longitude: "37.13333",
      },
    },
    {
      name: "Alessandria",
      id: "463",
      nametype: "Valid",
      recclass: "H5",
      mass: "908",
      fall: "Fell",
      year: "1860-01-01T00:00:00.000",
      reclat: "44.883330",
      reclong: "8.750000",
      geolocation: {
        latitude: "44.88333",
        longitude: "8.75",
      },
    },
    {
      name: "Alexandrovsky",
      id: "465",
      nametype: "Valid",
      recclass: "H4",
      mass: "9251",
      fall: "Fell",
      year: "1900-01-01T00:00:00.000",
      reclat: "50.950000",
      reclong: "31.816670",
      geolocation: {
        latitude: "50.95",
        longitude: "31.81667",
      },
    },
    {
      name: "Alfianello",
      id: "466",
      nametype: "Valid",
      recclass: "L6",
      mass: "228000",
      fall: "Fell",
      year: "1883-01-01T00:00:00.000",
      reclat: "45.266670",
      reclong: "10.150000",
      geolocation: {
        latitude: "45.26667",
        longitude: "10.15",
      },
    },
    {
      name: "Allegan",
      id: "2276",
      nametype: "Valid",
      recclass: "H5",
      mass: "32000",
      fall: "Fell",
      year: "1899-01-01T00:00:00.000",
      reclat: "42.533330",
      reclong: "-85.883330",
      geolocation: {
        latitude: "42.53333",
        longitude: "-85.88333",
      },
      ":@computed_region_cbhk_fwbd": "50",
      ":@computed_region_nnqa_25f4": "429",
    },
    {
      name: "Allende",
      id: "2278",
      nametype: "Valid",
      recclass: "CV3",
      mass: "2000000",
      fall: "Fell",
      year: "1969-01-01T00:00:00.000",
      reclat: "26.966670",
      reclong: "-105.316670",
      geolocation: {
        latitude: "26.96667",
        longitude: "-105.31667",
      },
    },
    {
      name: "Almahata Sitta",
      id: "48915",
      nametype: "Valid",
      recclass: "Ureilite-an",
      mass: "3950",
      fall: "Fell",
      year: "2008-01-01T00:00:00.000",
      reclat: "20.745750",
      reclong: "32.412750",
      geolocation: {
        latitude: "20.74575",
        longitude: "32.41275",
      },
    },
    {
      name: "Alta'ameem",
      id: "2284",
      nametype: "Valid",
      recclass: "LL5",
      mass: "6000",
      fall: "Fell",
      year: "1977-01-01T00:00:00.000",
      reclat: "35.273330",
      reclong: "44.215560",
      geolocation: {
        latitude: "35.27333",
        longitude: "44.21556",
      },
    },
    {
      name: "Ambapur Nagla",
      id: "2290",
      nametype: "Valid",
      recclass: "H5",
      mass: "6400",
      fall: "Fell",
      year: "1895-01-01T00:00:00.000",
      reclat: "27.666670",
      reclong: "78.250000",
      geolocation: {
        latitude: "27.66667",
        longitude: "78.25",
      },
    },
    {
      name: "Andhara",
      id: "2294",
      nametype: "Valid",
      recclass: "Stone-uncl",
      mass: "2700",
      fall: "Fell",
      year: "1880-01-01T00:00:00.000",
      reclat: "26.583330",
      reclong: "85.566670",
      geolocation: {
        latitude: "26.58333",
        longitude: "85.56667",
      },
    },
    {
      name: "Andover",
      id: "2295",
      nametype: "Valid",
      recclass: "L6",
      mass: "3200",
      fall: "Fell",
      year: "1898-01-01T00:00:00.000",
      reclat: "44.616670",
      reclong: "-70.750000",
      geolocation: {
        latitude: "44.61667",
        longitude: "-70.75",
      },
      ":@computed_region_cbhk_fwbd": "49",
      ":@computed_region_nnqa_25f4": "1723",
    },
    {
      name: "Andreevka",
      id: "2296",
      nametype: "Valid",
      recclass: "L3",
      mass: "600",
      fall: "Fell",
      year: "1969-01-01T00:00:00.000",
      reclat: "48.700000",
      reclong: "37.500000",
      geolocation: {
        latitude: "48.7",
        longitude: "37.5",
      },
    },
    {
      name: "Andura",
      id: "2298",
      nametype: "Valid",
      recclass: "H6",
      mass: "17900",
      fall: "Fell",
      year: "1939-01-01T00:00:00.000",
      reclat: "20.883330",
      reclong: "76.866670",
      geolocation: {
        latitude: "20.88333",
        longitude: "76.86667",
      },
    },
    {
      name: "Northwest Africa 5815",
      id: "50693",
      nametype: "Valid",
      recclass: "L5",
      mass: "256.8",
      fall: "Found",
      reclat: "0.000000",
      reclong: "0.000000",
      geolocation: {
        latitude: "0.0",
        longitude: "0.0",
      },
    },
    {
      name: "Angers",
      id: "2301",
      nametype: "Valid",
      recclass: "L6",
      fall: "Fell",
      year: "1822-01-01T00:00:00.000",
      reclat: "47.466670",
      reclong: "-0.550000",
      geolocation: {
        latitude: "47.46667",
        longitude: "-0.55",
      },
    },
    {
      name: "Angra dos Reis (stone)",
      id: "2302",
      nametype: "Valid",
      recclass: "Angrite",
      mass: "1500",
      fall: "Fell",
      year: "1869-01-01T00:00:00.000",
      reclat: "-22.966670",
      reclong: "-44.316670",
      geolocation: {
        latitude: "-22.96667",
        longitude: "-44.31667",
      },
    },
    {
      name: "Ankober",
      id: "2304",
      nametype: "Valid",
      recclass: "H4",
      mass: "6500",
      fall: "Fell",
      year: "1942-01-01T00:00:00.000",
      reclat: "9.533330",
      reclong: "39.716670",
      geolocation: {
        latitude: "9.53333",
        longitude: "39.71667",
      },
    },
    {
      name: "Anlong",
      id: "2305",
      nametype: "Valid",
      recclass: "H5",
      mass: "2500",
      fall: "Fell",
      year: "1971-01-01T00:00:00.000",
      reclat: "25.150000",
      reclong: "105.183330",
      geolocation: {
        latitude: "25.15",
        longitude: "105.18333",
      },
    },
    {
      name: "Aomori",
      id: "2313",
      nametype: "Valid",
      recclass: "L6",
      mass: "320",
      fall: "Fell",
      year: "1984-01-01T00:00:00.000",
      reclat: "40.810560",
      reclong: "140.785560",
      geolocation: {
        latitude: "40.81056",
        longitude: "140.78556",
      },
    },
  ]);
  const [currPage, setCurrPage] = useState("0");

  return (
    <main>
      <Navigation setCurrPage={setCurrPage} />
      <List data={data} currPage={currPage} />
      <Graph currPage={currPage} />
      <Map currPage={currPage} />
    </main>
  );
};

export default Main;
