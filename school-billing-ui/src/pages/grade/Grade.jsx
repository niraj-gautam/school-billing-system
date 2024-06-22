import React from "react";
import "./grade.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Createbtn from "../../components/create-btn/Createbtn";
import Datatable from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { gradeDatatableColumn, gradeDatatableRow } from "../../data";
import Widget from "../../components/widget/Widget";
import { GradeForm } from "../gradeform/GradeForm";

const Grade = () => {
    return (
        <div className="grade">
            <Sidebar />
            <div className="gradeContainer">
                <Navbar user={"user"} />
                <div className="mainContainer">
                    <main className="main">
                        <div className="top">
                            <div className="widgets">
                                <Widget type={"grade"} />
                                <Widget type={"section"} />
                            </div>
                            <h1 className="title">Grades & Sections</h1>
                            <Link
                                to={"/grade/create"}
                                className="link"
                                style={{ textDecoration: "none" }}
                            >
                                <Createbtn text={"Create Grade / Section"} />
                            </Link>
                        </div>
                        <div className="bottom">
                            <Datatable
                                rowData={gradeDatatableRow}
                                columnData={gradeDatatableColumn}
                                pageSize={10}
                                tableWidth={95}
                            />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Grade;
