import { HashRouter, Routes, Route } from 'react-router-dom';
import { PhilosophyProvider } from './context/PhilosophyContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ReadingProgress from './components/ReadingProgress/ReadingProgress.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import Home from './pages/Home/Home.jsx';
import Browse from './pages/Browse/Browse.jsx';
import ExperimentDetail from './pages/ExperimentDetail/ExperimentDetail.jsx';
import CompassPage from './pages/CompassPage/CompassPage.jsx';
import Timeline from './pages/Timeline/Timeline.jsx';
import PathsPage from './pages/PathsPage/PathsPage.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
    <PhilosophyProvider>
      <HashRouter>
        <ScrollToTop />
        <ReadingProgress />
        <div className="app-layout">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/experiment/:id" element={<ExperimentDetail />} />
              <Route path="/compass" element={<CompassPage />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/paths" element={<PathsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BackToTop />
      </HashRouter>
    </PhilosophyProvider>
    </ThemeProvider>
  );
}
