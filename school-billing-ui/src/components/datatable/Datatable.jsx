import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = ({ rowData, columnData }) => {
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={rowData}
                columns={columnData}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
