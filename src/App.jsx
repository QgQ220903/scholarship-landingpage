import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Scholarships from './components/Scholarships';
import AlumniCarousel from './components/AlumniCarousel';
import Event from './components/Event';
import RSVPForm from './components/RSVPForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Timeline />
      <Scholarships />
      <AlumniCarousel />
      <Event />
      <RSVPForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;