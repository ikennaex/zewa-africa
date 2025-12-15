import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://zewa.africa/wp/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen px-4 py-12 max-w-5xl mx-auto mt-28">

      <div className="mb-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        ZEWA Group – News & Updates
      </h1>

      <p className="text-center text-sm">
        ZEWA Group (Zero E-waste Africa) continues to expand its impact through
        new partnerships, community programs, and innovation in responsible WEEE
        management, Follow Us Here  For Recent News & updates!
      </p>

      </div>

      <div className="space-y-12">
        {posts.map((post) => {
          const image = post._embedded["wp:featuredmedia"]?.[0]?.source_url;
          const date = new Date(post.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <article
              key={post.id}
              className="flex flex-col md:flex-row md:space-x-6 border-b pb-8"
            >
              {image && (
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className="w-full h-48 md:h-full object-cover rounded-lg shadow-sm"
                  />
                </div>
              )}

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2 hover:text-customGreen">
                  <Link
                    to={`/news/${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </h2>
                <p className="text-gray-500 text-sm mb-3">{date}</p>
                <p
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link
                  to={`/news/${post.slug}`}
                  className="inline-block text-customGreen font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default News;
