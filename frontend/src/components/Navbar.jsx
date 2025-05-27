import '../styles/navbar.scss';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar__logo" onClick={() => navigate('/')}>
                <img
                    src="https://isafedsc.com/wp-content/uploads/2024/09/cropped-i-3-148x148.png"
                    alt="לוגו אבטחה פלוס"
                />
            </div>

            <ul className="navbar__links">
                <li><a href="/">דף הבית</a></li>
                <li><a href="#">מוצרים</a></li>
                <li><a href="#">מידע כללי</a></li>
                <li><a href="/admin" >צור קשר</a></li>
            </ul>

            <div className="navbar__right">
                <div className="navbar__search">
                    <input type="text" placeholder="חיפוש..." />
                    <button><FaSearch /></button>
                </div>

                <div className="navbar__cart">
                    <FaShoppingCart size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
