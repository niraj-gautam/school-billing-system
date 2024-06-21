import React from "react";
import "./student.scss";
import { Link } from "react-router-dom";
import Inactive from "./inactive/Inactive";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Createbtn from "../../components/create-btn/Createbtn";

const Student = () => {
    return (
        <div className="student">
            <Sidebar />
            <div className="studentContainer">
                <Navbar user={"user"} />
                <main className="main">
                    <div className="top">
                        <h1 className="title">Students</h1>
                        <Createbtn text={"Create Student"} />
                    </div>

                    <Datatable className="bottom" />
                </main>
            </div>
        </div>
    );
};

export default Student;
