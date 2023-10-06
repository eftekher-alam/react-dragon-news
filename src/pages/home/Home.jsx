import { Outlet } from "react-router-dom";
import BreakingNews from "../shared/BreakingNews";
import Header from "../shared/Header";
import LeftNav from "../shared/LeftNav";
import NavBar from "../shared/NavBar";
import RightNav from "../shared/RightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div >
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2">
                    <Outlet></Outlet>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;