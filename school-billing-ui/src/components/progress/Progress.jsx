import "./progress.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Progress = () => {
    let summary = [
        { title: "target", toChange: false, amount: "1,27,500" },
        {
            title: "last year",
            toChange: true,
            increased: false,
            amount: "72,000",
        },
    ];

    return (
        <div className="progress">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" className="icon" />
            </div>
            <div className="bottom">
                <div className="progressChart">
                    <CircularProgressbar
                        value={30}
                        text="30%"
                        strokeWidth={5}
                        className="progressbar"
                        styles={buildStyles({
                            pathColor: "hsl(253, 100%, 61%)",
                        })}
                    />
                </div>
                <p className="title">Fees collected this year</p>
                <p className="amount">Rs.76,500</p>
                <p className="desc">
                    Previous transaction processing. Last payment may not be
                    included.
                </p>
                <div className="summary">
                    {summary.map((item) => (
                        <div className="item">
                            <div className="itemTitle">{item.title}</div>
                            <div className="itemResult">
                                {item.toChange &&
                                    (item.isCompleted ? (
                                        <KeyboardArrowUpOutlinedIcon className="icon positive" />
                                    ) : (
                                        <KeyboardArrowDownOutlinedIcon className="icon negative" />
                                    ))}
                                <span
                                    className={`resultAmount ${
                                        item.toChange &&
                                        (item.increased
                                            ? "positive"
                                            : "negative")
                                    }`}
                                >{`Rs.${item.amount}`}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Progress;
