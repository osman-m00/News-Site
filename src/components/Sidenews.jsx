import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidenews = () => {
  const [news, setNews] = useState([]); // Store multiple articles

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const Apikey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=5&apiKey=${Apikey}&_=${new Date().getTime()}`
        );
        

        console.log("API Response:", response.data);

        const articles = response.data?.articles?.filter(article =>
          article.title && article.description && article.urlToImage
        ); 

        if (articles && articles.length > 0) {
          setNews(articles);
        } else {
          console.warn("No valid news articles found.");
        }
      } catch (error) {
        console.error("News API Error:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="w-[300px] ml-10 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>

      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <img
              className="w-full h-[150px] object-cover rounded-lg"
              src={article.urlToImage}
              alt={article.title}
            />
            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              Read More
            </a>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading news...</p>
      )}
    </div>
  );
};

export default Sidenews;
