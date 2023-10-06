import { useEffect, useState } from "react";
import Category from "../category/Category";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("./categories.json")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">All Category</h2>
            <div>
                {
                    categories.map((category, index) => <Category key={index} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;