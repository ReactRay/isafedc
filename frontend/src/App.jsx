import './styles/main.scss';
import { Carousel } from './components/Carousel';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage'; // Optional, if you build AdminPage.jsx

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Carousel />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
