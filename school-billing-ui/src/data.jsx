import userProfile from "./assets/userProfile.jpg";

export const datatableRow = [
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

export const datatableColumn = [
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
                <>
                    <span className="viewButton"> Details</span>
                </>
            );
        },
    },
];
