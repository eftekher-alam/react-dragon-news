import Categories from "../categories/Categories";
import LeftNewsCard from "../leftNewsCard/LeftNewsCard";

const LeftNav = () => {
    return (
        <div>
            <div>
                <Categories></Categories>
            </div>
            <div>
                <LeftNewsCard></LeftNewsCard>
            </div>
        </div>
    );
};

export default LeftNav;