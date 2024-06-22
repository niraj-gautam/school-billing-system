import userProfile from "./assets/userProfile.jpg";
import { Link } from "react-router-dom";

export const studentDatatableRow = [
    {
        id: 1,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 2,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 3,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 4,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 5,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 6,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 7,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 8,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 9,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 10,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 11,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 12,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 13,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 14,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
    {
        id: 15,
        studentName: "Niraj Gautam",
        img: userProfile,
        dateOfJoining: new Date("2024-06-21"),
        grade: "10 (A)",
        totalFee: 25000,
        paid: 5000,
        balance: 20000,
    },
];

export const studentDatatableColumn = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "studentName",
        headerName: "Name",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" />
                    {params.row.studentName}
                </div>
            );
        },
    },
    {
        field: "grade",
        headerName: "Grade",
        width: 100,
    },
    {
        field: "dateOfJoining",
        headerName: "DOJ",
        description: "Date of Joining",

        type: "date",
        width: 120,
    },
    {
        field: "totalFee",
        headerName: "Total Fees",
        sortable: false,
        width: 120,
    },
    {
        field: "paid",
        headerName: "Paid",
        sortable: false,
        width: 120,
    },
    {
        field: "balance",
        headerName: "Balance",
        sortable: false,
        width: 120,
    },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        disableColumnMenu: true,
        width: 120,
        renderCell: () => {
            return (
                <Link
                    to={"/student/:studentID"}
                    className="link"
                    style={{ textDecoration: "none" }}
                >
                    <span className="viewButton"> Details</span>
                </Link>
            );
        },
    },
];

export const inactiveStudentDatatableColumn = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "studentName",
        headerName: "Name",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" />
                    {params.row.studentName}
                </div>
            );
        },
    },
    {
        field: "grade",
        headerName: "Grade",
        width: 100,
    },
    {
        field: "dateOfJoining",
        headerName: "DOJ",
        description: "Date of Joining",

        type: "date",
        width: 120,
    },
    {
        field: "totalFee",
        headerName: "Total Fees",
        sortable: false,
        width: 120,
    },
    {
        field: "paid",
        headerName: "Paid",
        sortable: false,
        width: 120,
    },
    {
        field: "balance",
        headerName: "Balance",
        sortable: false,
        width: 120,
    },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        disableColumnMenu: true,
        width: 120,
        renderCell: () => {
            return <span className="viewButton"> Mark Active </span>;
        },
    },
];

export const gradeDatatableRow = [
    {
        id: 1,
        gradeLevel: "1",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 2,
        gradeLevel: "2",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 3,
        gradeLevel: "3",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 4,
        gradeLevel: "4",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 5,
        gradeLevel: "5",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 6,
        gradeLevel: "6",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 7,
        gradeLevel: "7",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 8,
        gradeLevel: "8",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 9,
        gradeLevel: "9",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 10,
        gradeLevel: "10",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 11,
        gradeLevel: "11",
        section: "A, B, C",
        totalFee: 25000,
    },
    {
        id: 12,
        gradeLevel: "12",
        section: "A, B, C",
        totalFee: 25000,
    },
];

export const gradeDatatableColumn = [
    { field: "id", headerName: "S.N.", width: 100 },
    {
        field: "gradeLevel",
        headerName: "Grade Level",
        width: 150,
    },
    {
        field: "section",
        headerName: "Sections",
        width: 200,
    },
    {
        field: "totalFee",
        headerName: "Total Fees",
        width: 200,
    },

    {
        field: "action",
        headerName: "Action",
        sortable: false,
        disableColumnMenu: true,
        width: 175,
        renderCell: () => {
            return (
                <Link
                    to={"/student/:studentID"}
                    className="link"
                    style={{ textDecoration: "none" }}
                >
                    <span className="viewButton"> Edit grade/section</span>
                </Link>
            );
        },
    },
];
