import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import React from "react";

const DataTable = () => {
  var mca = [
    { name: "vanichithra", age: 22, place: "Aluva" },
    { name: "Anu", age: 23, place: "Kochi" },
    { name: "Devi", age: 21, place: "Kothamangalam" },
    { name: "Aiswarya", age: 22, place: "Perumbavoor" },
    { name: "Lakshmi", age: 23, place: "Muvattupuzha" },
  ];
  return (
    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Name</TableCell>
              <TableCell> Age</TableCell>
              <TableCell> place</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {mca.map((val) => {
            return(
              <TableRow >
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.age}</TableCell>
              <TableCell>{val.place}</TableCell>  
              </TableRow>
            )
           })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
