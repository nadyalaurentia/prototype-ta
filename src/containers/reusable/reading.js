import React from 'react';
import { Link } from 'react-router-dom';
import './reading.scss';
import './style-cases.scss';
import PropTypes from 'prop-types';

const Reading = (session, title, reading) => {
    let style = 'read-text style-' + (session % 4).toString();
    
    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }
    
    return(
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='read-title'>{title} {style}</p>
                <p className={style}>{reading}</p>
            </div>
            <Link to={'/case/'+ session.toString() +'/questions'}><button className='read-btn'>Selesai Membaca</button></Link>
        </div>
    )
}

Reading.propTypes = {
    session: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    reading: PropTypes.string.isRequired
};

export default Reading;