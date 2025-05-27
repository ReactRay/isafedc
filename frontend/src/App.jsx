import './styles/main.scss';
import { Carousel } from './components/Carousel';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage'; // Optional, if you build AdminPage.jsx
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/product-page' element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
