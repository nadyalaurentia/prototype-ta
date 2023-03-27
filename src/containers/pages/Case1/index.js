import React, {Component} from 'react';
import './Case1.scss'
import { Link } from 'react-router-dom';

class Case1 extends Component {
    render(){
        return(
            <div className='wel-container'>
                <div className='navbar'></div>
                <div className='content-container'>
                    <p className='reg-title'>Sesi 1</p>
                    <p className='reg-text'>Klik tombol ‘Mulai’ jika sudah siap untuk memulai sesi</p>
                    <Link to='/case/1/reading'><button className='wel-btn'>Mulai</button></Link>
                </div>
            </div>
        )
    }
}

export default Case1;