
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Birthday from './pages/Birthday';
import Wedding from './pages/Wedding';
import Baptism from './pages/Baptism';
import MothersDay from './pages/MothersDay';
import Christmas from './pages/Christmas';
import Easter from './pages/Easter';
import Halloween from './pages/Halloween';
import ValentinesDay from './pages/ValentinesDay';
import Anniversary from './pages/Anniversary';
import Graduation from './pages/Graduation';
import NewYear from './pages/NewYear';
import BabyShower from './pages/BabyShower';
import CasualGift from './pages/CasualGift';
import CanadaDay from './pages/CanadaDay';
import Thanksgiving from './pages/Thanksgiving';
import SpecialOccasions from './pages/SpecialOccasions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ReturnPolicy from './pages/ReturnPolicy';
import LearnMore from './pages/LearnMore';
import Memorials from './pages/Memorials';

import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/occasion/birthday" element={<Birthday />} />
            <Route path="/occasion/wedding" element={<Wedding />} />
            <Route path="/occasion/baptism" element={<Baptism />} />
            <Route path="/occasion/mothers-day" element={<MothersDay />} />
            <Route path="/occasion/christmas" element={<Christmas />} />
            <Route path="/occasion/easter" element={<Easter />} />
            <Route path="/occasion/halloween" element={<Halloween />} />
            <Route path="/occasion/valentines-day" element={<ValentinesDay />} />
            <Route path="/occasion/anniversary" element={<Anniversary />} />
            <Route path="/occasion/graduation" element={<Graduation />} />
            <Route path="/occasion/new-year" element={<NewYear />} />
            <Route path="/occasion/baby-shower" element={<BabyShower />} />
            <Route path="/occasion/casual-gift" element={<CasualGift />} />
            <Route path="/occasion/canada-day" element={<CanadaDay />} />
            <Route path="/occasion/thanksgiving" element={<Thanksgiving />} />
            <Route path="/occasion/special-occasions" element={<SpecialOccasions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            {/* <Route path="/occasion/memorials" element={<Memorials />} /> */}
            <Route path="/occasion/memorials" element={<Memorials />} />


          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
