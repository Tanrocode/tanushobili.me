import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { RightRail } from './components/RightRail';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="top" className="page">
      <Sidebar />
      <main className="page__main">
        <div className="page__content">
          <div className="page__route">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/work" element={<Work />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </main>
      <RightRail />
    </div>
  );
}

export default App;
