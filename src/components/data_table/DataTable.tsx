import React from 'react';
import {
  DataTableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableData,
} from './styles';

interface DataTableProps {
  tableData: Person[];
}

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}

const DataTable = ({ tableData }: DataTableProps) => {
  return (
    <DataTableContainer>
      <h1>Data Table</h1>
      <Table>
        <thead>
          <TableRow>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </TableRow>
        </thead>
        <TableBody>
          {tableData.map((person: Person, index: number) => (
            <TableRow key={index}>
              <TableData>{person.id}</TableData>
              <TableData>{person.name}</TableData>
              <TableData>{person.age}</TableData>
              <TableData>{person.email}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataTableContainer>
  );
};

export default DataTable;
