import '../styles/Footer.scss';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <img
                        className='footer-logo'
                        src="https://isafedsc.com/wp-content/uploads/2024/09/cropped-i-3-148x148.png"
                        alt="לוגו אבטחה פלוס"
                    />
                    <h3>IsafeElectronics</h3>
                    <p>מערכות אבטחה לבית ולעסק, מצלמות, אינטרקום ועוד.</p>
                </div>

                <div className="footer-contact">
                    <h4>צור קשר</h4>
                    <ul>
                        <li><FaPhone /> 050-1234567</li>
                        <li><FaEnvelope /> support@isafedsc.com</li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>עקבו אחרינו</h4>
                    <div className="icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 אבטחה פלוס. כל הזכויות שמורות.</p>
            </div>
        </footer>
    );
};

export default Footer;
