import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const columns = [
  {
    field: "subName",
    headerName: "Sub Name",
    width: 200,
  },
  {
    field: "sessions",
    headerName: "Sessions",
    width: 150,
  },
  {
    field: "class",
    headerName: "Class",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    sortable: false,

    renderCell: () => {
      return (
        <div style={{ display: "flex", gap: "15px" }}>
          <DeleteIcon style={{ color: "red", cursor: "pointer" }} />

          <Button variant="contained">
            VIEW
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, subName: "Maths", sessions: 20, class: "Eight" },
  { id: 2, subName: "Science", sessions: 34, class: "Nine" },
  { id: 3, subName: "maths", sessions: 1, class: "Eight" },
  { id: 4, subName: "Hindi", sessions: 1, class: "Eight" },
  { id: 5, subName: "Bca", sessions: 2027, class: "Eight" },
  { id: 6, subName: "English", sessions: 10, class: "Nine" },
  { id: 7, subName: "Computer", sessions: 15, class: "Ten" },
  { id: 8, subName: "Physics", sessions: 22, class: "Ten" },
];

export default function SimpleSubjects() {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}
