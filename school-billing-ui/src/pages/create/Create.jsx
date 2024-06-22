import React from "react";
import "./create.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from "../../components/form/Form";

const Create = () => {
    return (
        <div className="create">
            <Sidebar />
            <div className="createContainer">
                <Navbar user={"user"} />
                <main className="main">
                    <Form isForm={true} />
                </main>
            </div>
        </div>
    );
};

export default Create;
