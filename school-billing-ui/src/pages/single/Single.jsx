import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from "../../components/form/Form";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar user={"user"} />
                <main className="main">
                    <Form isForm={false} />
                </main>
            </div>
        </div>
    );
};

export default Single;
