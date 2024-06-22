import React from "react";
import "./gradeform.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import userProfile from "../../assets/userProfile.jpg";

export const GradeForm = ({ isForm }) => {
    const [file, setFile] = useState("");

    useEffect(() => {
        if (!isForm) {
            const form = document.getElementById("form");
            const uploadInput = document.getElementById("upload");
            const saveButton = document.getElementById("button");
            const elements = form.elements;
            for (let i = 0; i < elements.length; i++) {
                elements[i].readOnly = true;
                // elements[i].disabled = true;
            }
            if (uploadInput) {
                uploadInput.style.display = "none";
            }
            if (saveButton) {
                saveButton.style.display = "none";
            }
        }
    }, [isForm]);

    return (
        <div className="gradeForm">
            <Sidebar />
            <div className="gradeFormContainer">
                <Navbar />
                <main className="main">
                    <div className="form">
                        <div className="top">
                            <h1>
                                {isForm ? "Create Student" : "View Student"}
                            </h1>
                        </div>

                        <div className="bottom">
                            <div className="left">
                                <img
                                    src={
                                        isForm
                                            ? file
                                                ? URL.createObjectURL(file)
                                                : "https://placehold.co/240x240"
                                            : userProfile
                                    }
                                    alt="student-avatar"
                                />
                            </div>
                            <div className="right">
                                <form id="form">
                                    <div className="formInput" id="upload">
                                        <label htmlFor="file">
                                            Image:{" "}
                                            <DriveFolderUploadIcon className="icon" />
                                        </label>
                                        <input
                                            type="file"
                                            id="file"
                                            style={{ display: "none" }}
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>ID </label>
                                        <input
                                            type="number"
                                            defaultValue="12"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Niraj Gautam"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Grade</label>
                                        <input
                                            type="number"
                                            defaultValue="10"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Section</label>
                                        <input type="text" defaultValue="A" />
                                    </div>
                                    <div className="formInput">
                                        <label>
                                            {`DOJ (Date-of-Joining)`}{" "}
                                        </label>
                                        <input
                                            type={isForm ? "date" : "text"}
                                            defaultValue={
                                                isForm
                                                    ? "2024-05-04"
                                                    : "2024-05-04"
                                            }
                                            pattern="\d{4}-\d{2}-\d{2}"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Total Fee</label>
                                        <input
                                            type="number"
                                            defaultValue="25000"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Fee Paid</label>
                                        <input
                                            type="number"
                                            defaultValue="5000"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Balance</label>
                                        <input
                                            type="number"
                                            defaultValue="2000"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Parent's Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Niraj Gautam"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Contact</label>
                                        <input
                                            type="tel"
                                            defaultValue="+977 9812345678"
                                        />
                                    </div>

                                    <button id="button">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const options = [
        { value: "Option 1", label: "Option 1" },
        { value: "Option 2", label: "Option 2" },
        { value: "Option 3", label: "Option 3" },
    ];

    return (
        <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
