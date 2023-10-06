import moment from "moment";
import PropTypes from "prop-types";
import { AiOutlineShareAlt, AiFillEye } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";

const News = ({ news }) => {
    const { author, title, image_url, details, total_view, rating, _id } = news;
    const { name, published_date, img } = author;
    const { number, badge } = rating;
    console.log(img);
    return (
        <div className="border-2 border-slate-200">
            <div className="h-20 bg-slate-200 flex justify-between items-center">
                <div className="pl-4 flex gap-3">
                    <div><img src={img} alt="" className="w-12 h-12 rounded-full" /></div>
                    <div>
                        <h3 className="font-medium">{name}</h3>
                        <p className="text-sm text-slate-500">{moment(published_date).format("YYYY-MM-DD")}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center px-4 gap-2">
                    <Link> <BsBookmark className="text-xl"></BsBookmark> </Link>
                    <Link> <AiOutlineShareAlt className="text-3xl"></AiOutlineShareAlt> </Link>
                </div>
            </div>
            <div className="p-4 space-y-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <img src={image_url} alt="" />
                <p className="text-justify">{details}</p>
                <div className="flex justify-between">
                    <div className="flex gap-4 justify-center items-center">
                        <div className="rating rating-sm">
                            <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="font-semibold pt-1" >{number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiFillEye></AiFillEye>
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

News.propTypes = {
    news: PropTypes.object
}

export default News;