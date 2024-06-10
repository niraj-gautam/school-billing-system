import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import userProfile from "../../assets/userProfile.jpg";
import { useState } from "react";

const Navbar = ({ user }) => {
    user == "user" && (user = { picture: userProfile });
    const [language, setLanguage] = useState("EN");
    const changeLanguage = () => {
        setLanguage(language == "EN" ? "NP" : "EN");
    };
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
                    <div className="item" onClick={changeLanguage}>
                        <LanguageOutlinedIcon className="icon" />
                        <span className="title">{language}</span>
                    </div>
                    <div className="item">
                        <img
                            src={user.picture}
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
