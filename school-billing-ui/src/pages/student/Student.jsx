import React from "react";
import "./student.scss";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Createbtn from "../../components/create-btn/Createbtn";
import { studentDatatableColumn, studentDatatableRow } from "../../data";

const Student = () => {
    return (
        <div className="student">
            <Sidebar />
            <div className="studentContainer">
                <Navbar user={"user"} />
                <main className="main">
                    <div className="top">
                        <h1 className="title">Students</h1>
                        <Link to={"/student/create"} className="link">
                            <Createbtn text={"Create Student"} />
                        </Link>
                    </div>

                    <Datatable
                        className="bottom"
                        rowData={studentDatatableRow}
                        columnData={studentDatatableColumn}
                    />
                </main>
            </div>
        </div>
    );
};

export default Student;
