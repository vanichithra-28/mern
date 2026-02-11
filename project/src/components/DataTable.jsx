import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import React from 'react'

const DataTable = () => {
  return (
    <div >
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
                <TableRow>
                   <TableCell> Vanichithra</TableCell>
                   <TableCell> 22</TableCell>
                   <TableCell> Aluva</TableCell>
                   </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
