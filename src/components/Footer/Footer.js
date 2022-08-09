import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
       <div>
          <footer class="footer">
            <div class="footer__telefono">
                <p>Telefono: 3517537275</p>
                <p>9 de Julio 258, Galería Planeta</p>
            </div>
            <div class="footer__redes">
                <h4>Seguinos en nuestras redes:</h4>
                <a href="https://www.instagram.com/bodybest.ar/">
                <i class="fa-brands fa-instagram icon-footer" id="footer__redes__ig"></i>
                </a>
                <a href="https://github.com/FranCaprari">
                <i class="fa-brands fa-github icon-footer" id="footer__redes__git"></i>
                </a>
            </div>
            <div class="footer__horarios">
                <h3>Horarios:</h3>
                <p>Lunes a viernes 10:00 a 18:00hs</p>
                <p>Sabados 10:00 a 14:00hs</p>
            </div>
            <div class="footer__copy">
                <p>© 2022 BodyBest. Todos los derechos reservados.</p>
            </div>
        </footer>
        </div>
    );
};


export default Footer;