import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';
import { ThemeProvider } from './context/ThemeContext';
import { QuoteModalProvider } from './context/QuoteModalContext';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Maintenance from './pages/Maintenance';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-ink-900">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <QuoteModal />
      </QuoteModalProvider>
    </ThemeProvider>
  );
}

export default App;
