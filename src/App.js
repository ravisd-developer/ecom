import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shoping from './pages/Shoping';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shoping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
