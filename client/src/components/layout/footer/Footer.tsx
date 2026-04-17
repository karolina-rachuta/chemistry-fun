import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="container container-footer">
                <span className="logo-footer" onClick={() => navigate('/')}>
                Chemistry<span className='logo-span'>&Fun</span>
                </span>
                <span className='copyright'>Copyright © 2024 Karolina Rachuta. All rights reserved.</span>

            </div>
        </div>
    );
}

export default Footer;
