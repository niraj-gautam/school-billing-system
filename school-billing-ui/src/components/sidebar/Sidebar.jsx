import { Link } from "react-router-dom";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">School</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">Overview</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Student</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Students</span>
                    </li>
                    <li>
                        <PersonOffOutlinedIcon className="icon" />
                        {/* <Link to="student/inactive"> Click for Inactive Students</Link> */}
                        <span>Inactive Students</span>
                    </li>
                    <p className="title">Billing</p>

                    <li>
                        <SchoolOutlinedIcon className="icon" />
                        <span>Grade/Section</span>
                    </li>
                    <li>
                        <AttachMoneyOutlinedIcon className="icon" />
                        <span>Fees</span>
                    </li>
                    <li>
                        <DescriptionOutlinedIcon className="icon" />
                        <span>Report</span>
                    </li>
                    <p className="title">Setting</p>

                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <GroupAddOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <span> Theme: </span>
                <div className="theme-options">
                    <div className="colorScheme"></div>
                    <div className="colorScheme"></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
