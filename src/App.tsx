import Header from './components/Header';
import Hero from './components/Hero';
import Divisions from './components/Divisions';
import Story from './components/Story';
import Values from './components/Values';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Divisions />
        <Story />
        <Values />
        <Clients />
        <Testimonials />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
