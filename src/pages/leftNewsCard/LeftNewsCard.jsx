import { useEffect, useState } from "react";
import LeftCard from "./LeftCard";

const LeftNewCard = () => {

    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newsToShow, setNewsToShow] = useState([]);

    useEffect(() => {
        fetch("./categories.json")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch("./news.json")
            .then(response => response.json())
            .then(data => setNews(data.slice(0, 3)));
    }, []);


    useEffect(() => {
        const newsToShow = [];
        news.forEach(singlenews => {
            const category = categories.find(cate => cate.id == singlenews?.category_id);
            singlenews.category_name = category?.name;
            newsToShow.push(singlenews);
        })
        setNewsToShow(newsToShow);
    }, [categories, news]);



    return (
        <div className="space-y-8 pt-8">
            {
                newsToShow.map((singleNews, index) => <LeftCard
                    singleNews={singleNews}
                    key={index}
                ></LeftCard>)
            }
        </div>
    );
};

export default LeftNewCard;