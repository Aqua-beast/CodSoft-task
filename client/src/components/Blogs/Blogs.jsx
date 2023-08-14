import React from 'react';
import './blogs.css';

const Blogs = () => {
    const blogs = [
        {
          id: 1,
          title: 'Exploring the Wonders of Nature',
          image: 'tourist-1.avif',
          content: "Discover the serene landscapes and breathtaking vistas that nature has to offer.",
        },
        {
          id: 2,
          title: 'A Culinary Journey Around the World',
          image: 'tourist-2.jpg',
          content: "Embark on a gastronomic journey to savor the diverse cuisines of different cultures.",
        },
        {
          id: 3,
          title: 'Unveiling Hidden Gems of Historic Cities',
          image: 'tourist-3.webp',
          content: "Escape the crowds and immerse yourself in unique and lesser-known travel destinations.",
        },
        {
          id: 4,
          title: 'Adventures in the Wilderness',
          image: 'tourist-4.jpg',
          content: "Learn how to capture stunning travel photos that tell a story and evoke emotions.",
        },
        {
          id: 5,
          title: 'Relaxing Retreats on Pristine Beaches',
          image: 'tourist-5.jpg',
          content: "Experience the thrill of skydiving and witness breathtaking views from above.",
        },
        {
          id: 6,
          title: 'Cultural Experiences and Local Traditions',
          image: 'tourist-6.png',
          content: "Immerse yourself in the traditions, customs, and daily lives of diverse cultures.",
        },
        {
          id: 7,
          title: 'Thrilling Outdoor Activities for Adventure Seekers',
          image: 'tourist-7.jpg',
          content: "Indulge in luxurious spa treatments and find serenity in beautiful spa retreats.",
        },
        {
          id: 8,
          title: 'Luxurious Getaways in Exotic Destinations',
          image: 'tourist-8.jpg',
          content: "Embark on challenging hikes and discover the beauty of remote natural landscapes.",
        },
      ];
      
  return (
    <div className="blog-page">
      <h1 className="page-title">Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <img
              src={require(`../../images/${blog.image}`)}
              alt={blog.title}
              className="blog-image"
            />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
