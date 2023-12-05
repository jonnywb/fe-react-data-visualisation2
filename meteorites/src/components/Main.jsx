import { useState, useEffect } from "react";

import Navigation from "./Navigation";
import TableView from "./Table";
import Graph from "./Graph";
import Map from "./Map";

import getData from "./utils/utils";

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
  ]);
  const [currPage, setCurrPage] = useState("0");

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <main>
      <Navigation setCurrPage={setCurrPage} />
      <TableView data={data} currPage={currPage} />
      <Graph data={data} currPage={currPage} />
      <Map currPage={currPage} />
    </main>
  );
};

export default Main;
