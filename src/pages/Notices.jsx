import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "title", headerName: "Title", width: 200},
  { field: "details", headerName: "Details", width: 150 },
  { field: "date", headerName: "Date", width: 200 },
];

const rows = [
  { id: 1, title: "Test Notice", details: "Test here", date: "2026-01-05" },
  { id: 2, title: "holiday", details: "diwali", date: "2026-01-06" },
  { id: 3, title: "holiday", details: "holi", date: "2026-01-07" },
];

const Notices = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        initialState={{
          paginationModel: {
              page: 0,
              pageSize: 3,
            },
        }}
      />
    </div>
  );
};

export default Notices;
