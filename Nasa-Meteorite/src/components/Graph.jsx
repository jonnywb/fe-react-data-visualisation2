import Typography from "@mui/joy/Typography";

const Graph = ({ currPage }) => {
  if (currPage === "1") {
    return (
      <section id="graph-view">
        <Typography level="h2">Graph View</Typography>
      </section>
    );
  }
};

export default Graph;
