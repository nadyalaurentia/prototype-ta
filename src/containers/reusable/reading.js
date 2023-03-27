import React from 'react';
import { Link } from 'react-router-dom';
import './reading.scss'

const Reading = (title, reading) => {
    return(
        <div className='read-container'>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='read-title'>{title}</p>
                <p className='read-text'>{reading}</p>
            </div>
            <Link to='/case/1/questions'><button className='read-btn'>Selesai Membaca</button></Link>
        </div>
    )
}

export default Reading;