import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
// import studentData from "./studentData"
import { result } from "./StudentData";


const columns = [
  {
    field: "admissionNo",
    headerName: "Admission No",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "class",
    headerName: "Class",
    width: 120,
  },
    {
    field: "section",          
    headerName: "Section",
    width: 100,
  },
  {
    field: "rollNo",
    headerName: "Roll No",
    width: 120,
  },
  {
    field: "feeDue",
    headerName: "Fee Due",
    width: 120,
  },
  {
    field: "mobile",
    headerName: "Mobile No",
    width: 150,
  },
  {
    field: "busService",
    headerName: "Bus Service",
    width: 130,
  },
  {
    field: "action",
    headerName: "Action",
    width: 180,
    sortable: false,
    renderCell: () => {
      return (
        <button
          style={{
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          View
        </button>
      );
    },
  },
];

export default function Student() {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={result}
        columns={columns}
        pageSizeOptions={[20]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 20,
            },
          },
        }}
      />
    </div>
  );
}
