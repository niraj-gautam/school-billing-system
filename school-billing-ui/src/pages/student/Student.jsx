import React from "react";
import "./student.scss";
import { Link } from "react-router-dom";
import Inactive from "./inactive/Inactive";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Student = () => {
    return (
        <div className="student">
            <Sidebar />
            <div className="studentContainer">
                <Navbar />
                student data table
            </div>
        </div>
    );
};

export default Student;
