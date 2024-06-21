import React from "react";
import "./createbtn.scss";
import AddIcon from "@mui/icons-material/Add";

const Createbtn = ({ text }) => {
    return (
        <div className="createBtn">
            <AddIcon className="icon" />
            <span>{text}</span>
        </div>
    );
};

export default Createbtn;
