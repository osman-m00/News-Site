import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const Apikey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=5&apiKey=${Apikey}`
        );
        
  
        console.log("API Response:", response.data); // Debugging Line
  
        const articles = response.data?.articles;
        if (articles && articles.length > 0) {
          setNews(articles[0]);
        } else {
          console.warn("No news articles found.");
        }
      } catch (error) {
        console.error("News API Error:", error);
      }
    };
    fetchNews();
  }, []);
  
  

  return (
    <div className="border border-black w-[900px] rounded-2xl overflow-hidden bg-white ml-10">
      <div className="w-full h-[350px]">
      <img className="w-full h-full object-cover" src={news?.urlToImage || "/news.jpg"} alt={news?.title || "News"} />
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{news?.title}</h1>
        <p className="text-xl mt-3">
        {news?.description}
        </p>
        <div className="text-gray-500 text-lg mt-3">
          <span> {news?.publishedAt ? new Date(news.publishedAt).toLocaleString() : "Unknown time"}</span> | <span>{news?.source?.name || "Unknown source"}</span>
        </div>
        {news?.url && (
      <a 
        href={news.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-3 inline-block"
      >
        Read More
      </a>
    )}

      </div>
    </div>
  );
};

export default Main;
