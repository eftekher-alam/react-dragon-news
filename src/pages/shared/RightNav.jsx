import { AiOutlineGoogle, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"
import { Link } from "react-router-dom";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightNav = () => {
    return (
        <div className="space-y-10">

            {/* Social Login */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Login With</h2>
                <div className="space-y-2">
                    <button className="btn btn-sm btn-outline btn-info w-full"><AiOutlineGoogle></AiOutlineGoogle> Login with Google</button>
                    <button className="btn btn-sm btn-outline w-full"> <AiFillGithub></AiFillGithub> Login with Github</button>
                </div>
            </div>

            {/* Find us on */}
            <div>
                <h2 className="text-xl font-bold">Find Us On</h2>
                <div className="border rounded-lg">
                    <div className="border-b p-4">
                        <Link className="flex items-center gap-2 font-medium text-lg">
                            <BiLogoFacebook className="bg-slate-300 text-4xl rounded-full p-1 text-blue-800"></BiLogoFacebook>
                            Facebook
                        </Link>

                    </div>
                    <div className="border-b p-4">
                        <Link className="flex items-center gap-2 font-medium text-lg">
                            <AiOutlineTwitter className="bg-slate-300 text-4xl rounded-full p-1 text-sky-500"></AiOutlineTwitter>
                            Twitter
                        </Link>
                    </div>
                    <div className="p-4">
                        <Link className="flex items-center gap-2 font-medium text-lg">
                            <BiLogoInstagram
                                className="bg-slate-300 text-4xl rounded-full p-1 text-pink-600"
                            ></BiLogoInstagram>
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>

            {/* Q-zone */}
            <div className="bg-slate-200 p-4 space-y-4">
                <h2 className="text-xl font-bold">Q-Zone</h2>
                <div className="space-y-2">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;