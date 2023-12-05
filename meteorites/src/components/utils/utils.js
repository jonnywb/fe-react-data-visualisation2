import axios from "axios";

const nasaApi = axios.create({
  baseURL: "https://data.nasa.gov/resource/gh4g-9sfh.json",
});
const getData = () => {
  return nasaApi.get("").then(({ data }) => {
    return data;
  });
};

export default getData;
