import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shoping from './pages/Shoping';
import Features from './pages/Features';
import Blog from './pages/Blog';
import Product from './pages/Product';
import './assets/sass/base.scss';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>

          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shoping />} />
          <Route path="features" element={<Features />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
