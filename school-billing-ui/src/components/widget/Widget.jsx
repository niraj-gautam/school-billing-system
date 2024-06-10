import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "student":
            data = {
                title: "total students",
                isMoney: false,
                count: "1500",
                includesPercentage: true,
                isPercentageIncrease: true,
                percentage: "20",
                link: "view all students",
                icon: <PersonOutlineOutlinedIcon className="icon crimson" />,
            };
            break;
        case "inactiveStudent":
            data = {
                title: "inactive students",
                isMoney: false,
                count: "5",
                includesPercentage: false,
                link: "view inactive students",
                icon: <PersonOffOutlinedIcon className="icon crimson" />,
            };
            break;
        case "fees":
            data = {
                title: "total fees",
                isMoney: true,
                count: "2,55,000",
                includesPercentage: true,
                isPercentageIncrease: true,
                percentage: "5",
                link: "view all fees",
                icon: <AttachMoneyOutlinedIcon className="icon green" />,
            };
            break;
        case "feesCollected":
            data = {
                title: "fees collected",
                isMoney: true,
                count: "1,60,000",
                includesPercentage: true,
                isPercentageIncrease: false,
                percentage: "10",
                link: "view all fees",
                icon: <AttachMoneyOutlinedIcon className="icon green" />,
            };
            break;
        case "feesRemaining":
            data = {
                title: "fees remaining",
                isMoney: true,
                count: "95,000",
                includesPercentage: true,
                isPercentageIncrease: true,
                percentage: "15",
                link: "view all fees",
                icon: <AttachMoneyOutlinedIcon className="icon green" />,
            };
            break;
        case "grade":
            data = {
                title: "total grades",
                isMoney: false,
                count: "12",
                includesPercentage: false,
                link: "view all grades",
                icon: <SchoolOutlinedIcon className="icon golden" />,
            };
            break;
        case "section":
            data = {
                title: "total sections",
                isMoney: false,
                count: "20",
                includesPercentage: false,
                link: "view all sections",
                icon: <SchoolOutlinedIcon className="icon golden" />,
            };
            break;
        case "report":
            data = {
                title: "Billing",
                isMoney: false,
                isReport: true,
                count: "details",
                includesPercentage: false,
                link: "view bills",
                icon: <DescriptionOutlinedIcon className="icon purple" />,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney ? `Rs.${data.count}` : data.count}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div
                    className={`percentage ${
                        data.isPercentageIncrease ? "positive" : "negative"
                    }`}
                >
                    {!data.includesPercentage ? (
                        ""
                    ) : data.isPercentageIncrease ? (
                        <KeyboardArrowUpOutlinedIcon />
                    ) : (
                        <KeyboardArrowDownOutlinedIcon />
                    )}
                    {data.includesPercentage ? data.percentage + "%" : ""}
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
