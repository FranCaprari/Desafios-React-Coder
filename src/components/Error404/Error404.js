import React from 'react';
import {Link} from 'react-router-dom';
import './Error404.css';

const Error404 = () =>
{
    return(
        <div className='error'>
            <img src='https://i.postimg.cc/hjt695XF/404error.jpg' alt='Error404' className='error-img'/>
            <Link to="/"><button className='error-btn'>Pagina principal</button></Link>
        </div>
    )
}

export default Error404;