import Card from "./Card";

const List = ({ data, currPage }) => {
  if (currPage === "0") {
    return (
      <section id="list-view">
        <h2>List View</h2>
        <table>
          {data.map((item) => {
            return <Card data={item} />;
          })}
        </table>
      </section>
    );
  }
};

export default List;
