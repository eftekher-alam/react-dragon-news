import logo from "../../assets/logo.png"
import moment from "moment/moment";

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center space-y-2 my-4">
            <img src={logo} alt="The Dragon News" />
            <p className="font-extralight">Journalism Without Fear or Favour</p>
            <p className="text-sm font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;