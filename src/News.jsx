import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function News() {
  const { newsName } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = newsName || 'India'; // Default category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=YOUR_API_KEY`
        );
        const data = await res.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error('No articles found in the response:', data);
        }
      } catch (error) {
        console.error('Error fetching the news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="p-4 max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col">
            {article.urlToImage && (
              <img className="w-full h-48 object-cover" src={article.urlToImage} alt={article.title || 'News image'} />
            )}
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              {article.title && (
                <div className="font-bold text-xl mb-2">{article.title}</div>
              )}
              {article.description && (
                <p className="text-gray-700 text-base flex-grow overflow-hidden max-h-24">
                  {article.description}
                </p>
              )}
              <div className="flex justify-between items-center mt-4">
                {article.publishedAt && (
                  <div className="text-gray-600 text-sm">
                    {new Date(article.publishedAt).toLocaleString()}
                  </div>
                )}
                {article.url && (
                  <button className="font-bold text-xl">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default News;
