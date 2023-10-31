import React from 'react';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                <p className="left">
                <div className='footer_icons'>
                        {' '}
                        <a href="https://www.youtube.com/channel/UCq6qHhcabkUvC0fZuiZ4wUQ">
                            <FaYoutube className="footer__icon" />
                        </a>{' '}
                    </div>
                    <div className='footer_icons'>
                        {' '}
                        <a href="https://www.facebook.com/profile.php?id=100069803313908">
                            <FaFacebook className="footer__icon" />
                        </a>{' '}
                    </div>
                    <div className='footer_icons'>
                        {' '}
                        <a href="https://github.com/mdmahim06">
                            <FaGithub className="footer__icon" />
                        </a>{' '}
                    </div>
                </p>
                <p className="right">Developed with &hearts; by MD Mahim All Saklain</p>
            </footer>
        </div>
    );
};

export default App;
