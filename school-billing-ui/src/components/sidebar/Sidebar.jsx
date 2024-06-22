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
                    <Link to="/" className="link">
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Student</p>
                    <Link to="/student" className="link">
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Students</span>
                        </li>
                    </Link>
                    <Link to="/student/inactive" className="link">
                        <li>
                            <PersonOffOutlinedIcon className="icon" />
                            {/* <Link to="student/inactive"> Click for Inactive Students</Link> */}
                            <span>Inactive Students</span>
                        </li>
                    </Link>
                    <p className="title">Billing</p>

                    <Link to="/grade" className="link">
                        <li>
                            <SchoolOutlinedIcon className="icon" />
                            <span>Grade/Section</span>
                        </li>
                    </Link>
                    <Link to="/" className="link">
                        <li>
                            <AttachMoneyOutlinedIcon className="icon" />
                            <span>Fees</span>
                        </li>
                    </Link>
                    <Link to="/" className="link">
                        <li>
                            <DescriptionOutlinedIcon className="icon" />
                            <span>Bill</span>
                        </li>
                    </Link>
                    <p className="title">Setting</p>

                    <Link to="/" className="link">
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/" className="link">
                        <li>
                            <GroupAddOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" className="link">
                        <li>
                            <LogoutOutlinedIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>
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
