import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Link from "@mui/joy/Link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "id",
  },
  {
    id: "nametype",
    numeric: false,
    disablePadding: true,
    label: "Nametype",
  },
  {
    id: "recclass",
    numeric: false,
    disablePadding: true,
    label: "recclass",
  },
  {
    id: "mass",
    numeric: true,
    disablePadding: false,
    label: "mass(g)",
  },
  {
    id: "fall",
    numeric: false,
    disablePadding: true,
    label: "fell",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "year",
  },
  {
    id: "latitude",
    numeric: true,
    disablePadding: false,
    label: "latitude",
  },
  {
    id: "longitude",
    numeric: true,
    disablePadding: false,
    label: "longitude",
  },
];

function Thead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                "aria-label": "select all desserts",
              },
            }}
            sx={{ verticalAlign: "sub" }}
          />
        </th>
        {headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th key={headCell.id} aria-sort={active ? { asc: "ascending", desc: "descending" }[order] : undefined}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? "primary.plainColor" : undefined}
                component="button"
                onClick={createSortHandler(headCell.id)}
                fontWeight="lg"
                startDecorator={headCell.numeric ? <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} /> : null}
                endDecorator={!headCell.numeric ? <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} /> : null}
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform: active && order === "desc" ? "rotate(0deg)" : "rotate(180deg)",
                  },
                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default Thead;
