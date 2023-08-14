import React, { useState } from 'react';
import './newsletter.css'; // You can create your own CSS file for this component

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement your subscribe logic here
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest news and offers!</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
