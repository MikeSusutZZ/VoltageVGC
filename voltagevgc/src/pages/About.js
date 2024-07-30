import React from 'react';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Navigation />
    <div className="container mt-5">
      <h1>About Us</h1>
      <p>Information about VoltageVGC.</p>
    </div>
    <Footer />
  </>
);

export default About;
