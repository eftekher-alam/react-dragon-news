import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <div className="max-xl:mx-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;