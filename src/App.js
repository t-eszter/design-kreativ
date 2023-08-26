import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Print from './pages/Print';
import WebMobile from './pages/WebMobile';
import Branding from './pages/Branding';
import Illustrations from './pages/Illustrations';
import UIUX from './pages/UIUX';
import Photos from './pages/Photos';
import SocialMarketing from './pages/SocialMarketing';

function App() {
  return (
    <div className="App snap-y snap-mandatory overflow-y-auto h-screen">
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/print" element={<Print />} />
          <Route path="/webmobile" element={<WebMobile />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/socialmarketing" element={<SocialMarketing />} />
            {/* <Route path="/print" element={} />

            <Route path="/uiux" element={<Besity />} />
            <Route path="/web" element={<About />} />
            <Route path="/branding" element={<About />} />
            <Route path="/photos" element={<About />} /> */}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
