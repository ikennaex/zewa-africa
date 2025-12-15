import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  MessageCircle,
} from "lucide-react";

const SingleNews = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://zewa.africa/wp/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

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

  if (!post)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Post not found
      </div>
    );

  // ---------- SHARE LOGIC (same file) ----------
  const shareUrl = window.location.href;
  const shareTitle = post.title.rendered.replace(/<[^>]*>/g, "");

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${shareTitle} - ${shareUrl}`
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle
    )}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: shareTitle,
        url: shareUrl,
      });
    }
  };
  // ---------- END SHARE LOGIC ----------

  const image = post._embedded["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen px-4 py-8 max-w-3xl mx-auto mt-24">
      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
      )}

      <h1
        className="text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <p className="text-gray-500 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </p>

      {/* SHARE BUTTONS */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-500">Share:</span>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5 text-black" />
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5 text-blue-600" />
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-700" />
        </a>

        {navigator.share && (
          <button
            onClick={handleNativeShare}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Share"
          >
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default SingleNews;
