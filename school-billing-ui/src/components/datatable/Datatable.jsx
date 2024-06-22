import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = ({ rowData, columnData, pageSize, tableWidth }) => {
    return (
        <div className="datatable">
            <DataGrid
                style={{ width: `${tableWidth}%` }}
                className="datagrid"
                rows={rowData}
                columns={columnData}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: pageSize },
                    },
                }}
                pageSizeOptions={[pageSize]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
