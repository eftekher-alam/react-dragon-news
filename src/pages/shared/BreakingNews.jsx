import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="p-2 bg-slate-200 font-medium flex">
            <p className="p-2 px-6 w-fit bg-rose-600  text-white">Latest</p>
            <Marquee pauseOnHover={true}>
                <Link to={"#"} className="mr-4">Match Highlights: Germany vs Spain — as it happened! </Link>
                <Link to={"#"} className="mr-4">Match Highlights: Germany vs Spain as...</Link>
                <Link to={"#"} className="mr-4">Jailed Iran rights campaigner Narges Mohammadi wins Nobel Peace Prize</Link>
                <Link to={"#"} className="mr-4">Aminbazar grid failure causes nightlong power cuts in parts of Dhaka</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;