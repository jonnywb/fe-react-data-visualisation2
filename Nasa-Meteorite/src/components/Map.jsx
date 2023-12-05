import Typography from "@mui/joy/Typography";

const Map = ({ currPage }) => {
  if (currPage === "2") {
    return (
      <section id="map-view">
        <Typography level="h2">Map View</Typography>
      </section>
    );
  }
};

export default Map;
