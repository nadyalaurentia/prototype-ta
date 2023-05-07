import React from 'react';
import './preparation.scss';
import './style-cases.scss';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Preparation() {
    const {session} = useParams();

    let contrast = 'prep-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }

    // addData('ini');
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

Preparation.propTypes = {
    session: PropTypes.number.isRequired
};

export default Preparation;