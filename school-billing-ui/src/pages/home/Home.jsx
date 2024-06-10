import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Progress from "../../components/progress/Progress";
import Graph from "../../components/graph/Graph";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar user="user" />
                <main className="main">
                    <div className="widgets">
                        <Widget type="student" />
                        <Widget type="inactiveStudent" />
                        <Widget type="fees" />
                        <Widget type="feesCollected" />
                        <Widget type="feesRemaining" />
                        <Widget type="grade" />
                        <Widget type="section" />
                        <Widget type="report" />
                    </div>
                    <div className="charts">
                        <Progress />
                        <Graph />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
