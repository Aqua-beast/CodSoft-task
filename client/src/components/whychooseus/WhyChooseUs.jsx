import React from 'react';
import './whychooseus.css'; // You can create your own CSS file for this page
import whyus_1 from '../../images/whyus-1.png'
import whyus_2 from '../../images/whyus-2.png'
import whyus_3 from '../../images/whyus-3.png'
import whyus_4 from '../../images/whyus-4.png'


const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h1>Why Choose Us</h1>
      <div className='contennt'>
        <div className="feature">
          <div className="icon">
            <img src={whyus_1} alt="Feature Icon" />
          </div>
          <h2>Quality Service</h2>
          <p>We provide top-notch quality service to ensure your satisfaction.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={whyus_2} alt="Feature Icon" />
          </div>
          <h2>Experienced Team</h2>
          <p>Our experienced team of professionals is dedicated to serving you.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={whyus_3} alt="Feature Icon" />
          </div>
          <h2>Wide Range of Options</h2>
          <p>We offer a diverse range of options to cater to your preferences.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={whyus_4} alt="Feature Icon" />
          </div>
          <h2>Customer Satisfaction</h2>
          <p>Your satisfaction is our priority, and we strive to exceed your expectations.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
