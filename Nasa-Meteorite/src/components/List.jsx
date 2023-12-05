import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Card from "./Card";

const List = ({ data, currPage }) => {
  if (currPage === "0") {
    return (
      <section id="list-view">
        <Typography level="h2">List View</Typography>
        <Table borderAxis="x" color="neutral" size="lg" stickyFooter stickyHeader variant="plain">
          <thead>
            <tr>
              <th>Name</th>
              <th>id</th>
              <th>nametype</th>
              <th>recclass</th>
              <th>mass</th>
              <th>fall</th>
              <th>year</th>
              <th>latitude</th>
              <th>longitude</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </tbody>
        </Table>
      </section>
    );
  }
};

export default List;
