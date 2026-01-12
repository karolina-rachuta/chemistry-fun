import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="container container-footer">
                <span className="logo" onClick={() => navigate('/')}>
                    chemistry&fun
                </span>
                <span>Copyright © 2024 Karolina Rachuta. All rights reserved.</span>

            </div>
        </div>
    );
}

export default Footer;
