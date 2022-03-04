import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Card } from "react-bootstrap";

export default function TableCard({ header = [], rows = [] }) {
  const rowsKeys = rows.length ? Object.keys(rows[0]) : []; // Get rows keys

  //For styling Header
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  //For coloring rows
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Card border="light" className="px-0 shadow-sm">
      <Card.Body className="px-0">
        <Card.Title>Clusters Logs</Card.Title>
        <TableContainer sx={{ maxHeight: 200 }}>
          <Table
            sx={{ minWidth: 650, maxHeight: 600 }}
            size="small"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                {header.map((item, key) => (
                  <StyledTableCell key={key}>{item}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, key) => (
                <StyledTableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {rowsKeys.map((key) => (
                    <TableCell>{row[key]}</TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card.Body>
    </Card>
  );
}
