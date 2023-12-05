import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useState } from "react";
import TableToolbar from "./TableToolbar";
import Thead from "./Thead";

function labelDisplayedRows({ from, to, count }) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const List = ({ data, currPage }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event, newValue) => {
    setRowsPerPage(parseInt(newValue.toString(), 10));
    setPage(0);
  };

  const getLabelDisplayedRowsTo = () => {
    if (data.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? data.length : Math.min(data.length, (page + 1) * rowsPerPage);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  if (currPage === "0") {
    return (
      <section id="list-view">
        <Typography level="h2">List View</Typography>

        <Sheet variant="outlined" color="neutral" sx={{ height: 400, boxShadow: "sm", borderRadius: "sm" }}>
          <TableToolbar numSelected={selected.length} />

          <Table
            aria-label="meteorite table"
            stickyHeader
            stickyFooter={false}
            stripe="odd"
            hoverRow
            noWrap
            style={{
              "--TableCell-headBackground": "transparent",
              "--TableCell-selectedBackground": (theme) => theme.vars.palette.success.softBg,
              "& thead th:nthChild(1)": {
                width: "40px",
              },
              "& thead th:nthChild(2)": {
                width: "30%",
              },
              "& tr > *:nthChild(n+3)": { textAlign: "right" },
            }}
          >
            <Thead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <tbody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <tr
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      // selected={isItemSelected}
                      style={
                        isItemSelected
                          ? {
                              "--TableCell-dataBackground": "var(--TableCell-selectedBackground)",
                              "--TableCell-headBackground": "var(--TableCell-selectedBackground)",
                            }
                          : {}
                      }
                    >
                      <th scope="row">
                        <Checkbox
                          checked={isItemSelected}
                          slotProps={{
                            input: {
                              "aria-labelledby": labelId,
                            },
                          }}
                          sx={{ verticalAlign: "top" }}
                        />
                      </th>
                      <th id={labelId} scope="row">
                        {row.name}
                      </th>
                      <td>{row.id}</td>
                      <td>{row.nametype}</td>
                      <td>{row.recclass}</td>
                      <td>{row.mass}</td>
                      <td>{row.fall}</td>
                      <td>{new Date(row.year).getFullYear()}</td>
                      <td>{row.geolocation && row.geolocation.latitude}</td>
                      <td>{row.geolocation && row.geolocation.longitude}</td>
                    </tr>
                  );
                })}
              {emptyRows > 0 && (
                <tr
                  style={{
                    height: `calc(${emptyRows} * 40px)`,
                    "--TableRow-hoverBackground": "transparent",
                  }}
                >
                  <td colSpan={6} aria-hidden />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={10}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "flex-end",
                    }}
                  >
                    <FormControl orientation="horizontal" size="sm">
                      <FormLabel>Rows per page:</FormLabel>
                      <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                        <Option value={5}>5</Option>
                        <Option value={10}>10</Option>
                        <Option value={25}>25</Option>
                      </Select>
                    </FormControl>
                    <Typography textAlign="center" sx={{ minWidth: 80 }}>
                      {labelDisplayedRows({
                        from: data.length === 0 ? 0 : page * rowsPerPage + 1,
                        to: getLabelDisplayedRowsTo(),
                        count: data.length === -1 ? -1 : data.length,
                      })}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="sm"
                        color="neutral"
                        variant="outlined"
                        disabled={page === 0}
                        onClick={() => handleChangePage(page - 1)}
                        sx={{ bgcolor: "background.surface" }}
                      >
                        <KeyboardArrowLeftIcon />
                      </IconButton>
                      <IconButton
                        size="sm"
                        color="neutral"
                        variant="outlined"
                        disabled={data.length !== -1 ? page >= Math.ceil(data.length / rowsPerPage) - 1 : false}
                        onClick={() => handleChangePage(page + 1)}
                        sx={{ bgcolor: "background.surface" }}
                      >
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Sheet>
      </section>
    );
  }
};

export default List;
