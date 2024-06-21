import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import userProfile from "../../assets/userProfile.jpg";

const rows = [
    {
        id: 1143155,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Paid",
    },
    {
        id: 132155,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Paid",
    },
    {
        id: 15554,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
    {
        id: 114319,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
    {
        id: 1143185,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
    {
        id: 1143165,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
    {
        id: 114540,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
    {
        id: 1140085,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        balance: 20000,
        totalFee: 25000,
        status: "Paid",
    },
    {
        id: 1170155,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Paid",
    },
    {
        id: 1133655,
        studentName: "Niraj Gautam",
        img: userProfile,
        grade: 10,
        section: "A",
        totalFee: 25000,
        balance: 20000,
        status: "Due",
    },
];

const List = () => {
    return (
        <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
                <TableHead className="tableHead">
                    <TableRow className="tableRow">
                        <TableCell className="tableCell">Student ID</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">Grade</TableCell>
                        <TableCell className="tableCell">Section</TableCell>
                        <TableCell className="tableCell">Total Fees</TableCell>
                        <TableCell className="tableCell">Balance</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} className="tableRow">
                            <TableCell className="tableCell">
                                {row.id}
                            </TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img
                                        src={userProfile}
                                        alt={`${row.studentName} image`}
                                        className="image"
                                    />
                                    {row.studentName}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.grade}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.section}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.totalFee}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.balance}
                            </TableCell>
                            <TableCell className="tableCell">
                                <span
                                    className={`status ${row.status.toLowerCase()}`}
                                >
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
