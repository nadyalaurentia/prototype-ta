import React from 'react';
import './preparation.scss';
import '../../styling/style-cases.scsss';
import { Link, useParams } from 'react-router-dom';

function Preparation() {
    const {session} = useParams();

    let contrast = 'prep-container';
    if (session < 5) {
        contrast = contrast + ' dark';
    }

    return(
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='prep-title'>Sesi {session}</p>
                <p className='prep-text'>Klik tombol ‘Mulai’ jika sudah siap untuk memulai sesi</p>
                    <Link to={'/case/'+ session.toString() +'/reading'}><button className='prep-btn'>Mulai</button></Link>
            </div>
        </div>
        )
}

export default Preparation;