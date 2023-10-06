import { useEffect, useState } from "react";
import News from "../news/News";

const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch("/news.json")
            .then(response => response.json())
            .then(data => setAllNews(data));
    }, []);


    return (
        <div className="space-y-8">
            {
                allNews.map((news, index) => <News key={index} news={news}></News>)
            }
        </div>
    );
};

export default AllNews;