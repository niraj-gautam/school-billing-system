import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { datatableRow, datatableColumn } from "../../data";

const Datatable = () => {
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={datatableRow}
                columns={datatableColumn}
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
