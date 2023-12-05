import { Button } from "@material-ui/core";

const Navigation = ({ setCurrPage }) => {
  const handleClick = (e) => {
    const pageNum = e.target.getAttribute("listId");
    setCurrPage(pageNum);
  };

  return (
    <nav>
      <Button variant="plain" listid="0" onClick={handleClick}>
        Table View
      </Button>
      <Button variant="plain" listid="1" onClick={handleClick}>
        Graph View
      </Button>
      <Button variant="plain" listid="2" onClick={handleClick}>
        Map View
      </Button>
    </nav>
  );
};

export default Navigation;
