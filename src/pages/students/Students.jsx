import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
// import results from "./StudentData";
import { getStudentsData } from "./StudentApi";

export default function Student() {
  const [rows, setRows] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
   
  });
  const [sortModel, setsortModel] = useState([{
       field: 'name',   
       sort: 'asc',     
  }])
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
  useEffect(() => {
    console.log("sortModel ", sortModel)
    const payload = {
      page: paginationModel.page,
      pageSize: paginationModel.pageSize,
      sortfiled:sortModel[0].field,
      sortOrder:sortModel[0].sort,
    };
    getStudentsData({
      payload,
      setRows,
    });
  }, [paginationModel, sortModel]);

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        // rowCount={0}
        columns={columns}
        pageSizeOptions={[20, 40, 100]}
        sortingMode="server"
        filterMode="server"
        paginationMode="server"
        onPaginationModelChange={(newPaginationModel) => {
          // fetch data from server
          console.log(newPaginationModel);
          setPaginationModel(newPaginationModel);
        }}
        onSortModelChange={(newSortModel) => {
          // fetch data from server
          console.log(newSortModel);
          setsortModel(newSortModel);
        }}
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
