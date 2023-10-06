
import PropTypes from "prop-types"
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment/moment";

const LeftCard = ({ singleNews }) => {

    const { title, image_url, category_name, author } = singleNews;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" className="w-full h-40" /></figure>
            <div className="card-body">
                <h2 className="card-title text-base">{title}</h2>
                <div className="card-actions justify-between items-center text-xs">
                    <p>{category_name}</p>
                    <div className="flex items-center gap-1">
                        <AiOutlineCalendar className="text-lg"></AiOutlineCalendar>
                        <p className="pt-1">{moment(author.published_date).format("MMM DD, YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftCard.propTypes = {
    singleNews: PropTypes.object
}

export default LeftCard;