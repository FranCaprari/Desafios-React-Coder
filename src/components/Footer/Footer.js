import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-900 text-base-content">
                <div>
                    <span className="footer-title text-white">Legal</span>
                    <a href=" #" className="link link-hover text-white">
                        Terminos de uso
                    </a>
                    <a href=" #" className="link link-hover text-white">
                        Plotica de Privacidad
                    </a>
                    <a href=" #" className="link link-hover text-white">
                        Politica de Cookies
                    </a>
                </div>
                <div>
                    <span className="footer-title text-white">
                        Nuestro Newsletter
                    </span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">
                                Enterate de las ultimas novedades!
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-full pr-16"
                            />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none hover:shadow-lg hover:shadow-primary text-white">
                                Subscribirme
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default Footer;