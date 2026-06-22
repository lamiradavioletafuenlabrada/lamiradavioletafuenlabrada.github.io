import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import CalendarSection from './components/CalendarSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-50 text-ink">
      <Navbar />
      <main>
        <Hero />
        <GallerySection />
        <AboutSection />
        <ActivitiesSection />
        <CalendarSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
