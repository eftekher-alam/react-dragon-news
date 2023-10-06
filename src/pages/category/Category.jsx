import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import "./category.css"

const Category = ({ category }) => {
    return (
        // <div className="w-full border">
        <NavLink to={`category/${category.id}`} className="block p-2 pl-8 font-semibold rounded-md text-slate-500" >{category.name}</NavLink>
        // </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
}

export default Category;