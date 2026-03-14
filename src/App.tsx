import Hero from './components/Hero';
import Services from './components/Services';
import AuthorizedDealer from './components/AuthorizedDealer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <AuthorizedDealer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
