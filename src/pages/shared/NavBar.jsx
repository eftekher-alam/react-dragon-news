import { Link } from "react-router-dom";
import defaultProPic from "../../assets/user.png"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to={"/"}>Home</Link> </li>
                        <li> <Link to={"#"}>About</Link> </li>
                        <li> <Link to={"#"}>Career</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> <Link to={"#"}>About</Link> </li>
                    <li> <Link to={"#"}>Career</Link> </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="w-10 rounded-full">
                    <img src={defaultProPic} />
                </div>
                <a className="btn btn-sm">Log In</a>
            </div>
        </div>
    );
};

export default NavBar;