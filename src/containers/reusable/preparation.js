import React from 'react';
import './preparation.scss'
import { Link } from 'react-router-dom';

const Preparation = (session) => {
    return(
        <div className='prep-container'>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='reg-title'>Sesi {session}</p>
                <p className='reg-text'>Klik tombol ‘Mulai’ jika sudah siap untuk memulai sesi</p>
                    <Link to='/case/1/reading'><button className='prep-btn'>Mulai</button></Link>
            </div>
        </div>
        )
}

export default Preparation;