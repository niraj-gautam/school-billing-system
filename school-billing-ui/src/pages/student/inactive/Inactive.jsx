import React from "react";
import "./inactive.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Datatable from "../../../components/datatable/Datatable";
import {
    studentDatatableRow,
    inactiveStudentDatatableColumn,
} from "../../../data";

const Inactive = () => {
    return (
        <div className="inactive">
            <Sidebar />
            <div className="inactiveContainer">
                <Navbar user={"user"} />
                <main className="main">
                    <div className="top">
                        <h1 className="title">Inactive Students</h1>
                    </div>

                    <Datatable
                        className="bottom"
                        rowData={studentDatatableRow}
                        columnData={inactiveStudentDatatableColumn}
                        pageSize={10}
                        tableWidth={95}
                    />
                </main>
            </div>
        </div>
    );
};

export default Inactive;
