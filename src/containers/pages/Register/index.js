import React, {Component} from 'react';
import './Register.scss'
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return(
            <div className='reg-container'>
                <div className='navbar'></div>
                <div className='content-container'>
                    <p className='reg-title'>Halo!</p>
                    <div className='reg-text'>
                    <p>Terima kasih sudah meluangkan waktu untuk berpartisipasi dalam kegiatan eksperimen ini. Kegiatan ini terdiri dari 8 sesi yang masing-masing terdiri dari:</p>
                    <ul className='reg-text'>
                        <li>Aktivitas membaca materi</li>
                        <li>Aktivitas pengujian pemahaman dan penilaian kenyamanan</li>
                    </ul>
                    <p>Eksperimen akan berlangsung selama kurang lebih 90 menit.</p>
                    </div>
                    <p className='input-title'>Nama <div className='mandatory'>*</div></p>
                    <input className='input' type='text'/>
                    <Link to='/case/1'><button className='btn'>Mulai</button></Link>
                </div>
            </div>
        )
    }
}

export default Register;