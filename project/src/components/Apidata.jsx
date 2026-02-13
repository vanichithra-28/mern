import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Apidata = () => {
  var [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Typography variant="h5">API Data Component</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Id</TableCell>
              <TableCell> Name</TableCell>
              <TableCell> Username</TableCell>
              <TableCell> Email</TableCell>
              <TableCell> Street</TableCell>
              <TableCell> City</TableCell>
              <TableCell> Suite</TableCell>

              <TableCell> Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((val) => {
              return (
                <TableRow>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>

                  <TableCell>{val.address.street}</TableCell>

                  <TableCell>{val.address.city}</TableCell>
                  <TableCell>{val.address.suite}</TableCell>
                  <TableCell>{val.address.zipcode}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Apidata;
