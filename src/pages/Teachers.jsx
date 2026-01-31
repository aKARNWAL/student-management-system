import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const rows = [
  { id: 1, name: 'Rahul', age: 25 },
  { id: 2, name: 'Amit', age: 30 },
  { id: 3, name: 'Priya', age: 22 },
  { id: 4, name: 'Neha', age: 28 },
  { id: 5, name: 'Rohit', age: 35 },
  { id: 6, name: 'Ankit', age: 27 },
  { id: 7, name: 'Pooja', age: 24 },
];

export default function PaginationExample() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,     
              pageSize: 5,  
            },
          },
        }}
         disableRowSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
}
