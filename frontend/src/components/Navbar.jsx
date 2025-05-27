import '../styles/navbar.scss';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar__logo">🔒 אבטחה פלוס</div>

            <ul className="navbar__links">
                <li><a href="#">דף הבית</a></li>
                <li><a href="#">מוצרים</a></li>
                <li><a href="#">מידע כללי</a></li>
                <li><a href="#">צור קשר</a></li>
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
