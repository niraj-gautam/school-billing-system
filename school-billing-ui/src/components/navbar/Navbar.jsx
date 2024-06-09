import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import userProfile from "../../assets/userProfile.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="search" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon" />
                </div>

                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        <span children className="title">
                            English
                        </span>
                    </div>
                    <div className="item">
                        <img
                            src={userProfile}
                            alt="user image"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
