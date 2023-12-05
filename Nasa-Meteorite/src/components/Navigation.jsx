const Navigation = ({ setCurrPage }) => {
  const handleClick = (e) => {
    const pageNum = e.target.getAttribute("listId");
    setCurrPage(pageNum);
  };

  return (
    <nav>
      <a listid="0" className="nav-link" onClick={handleClick}>
        List View
      </a>
      <a listid="1" className="nav-link" onClick={handleClick}>
        Graph View
      </a>
      <a listid="2" className="nav-link" onClick={handleClick}>
        Map View
      </a>
    </nav>
  );
};

export default Navigation;
