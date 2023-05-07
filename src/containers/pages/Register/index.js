import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Register.scss'

function Register({addData}) {
        const [newName, setNewName] = useState("");

        const handleSubmit = async (event) => {
            event.preventDefault();
            if (newName) {
                localStorage.clear();
                localStorage.setItem('nama', newName);
                addData(newName);
                // Redirect to next page after successful form submission
                window.location.href = '/case/1';
            }
        };

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
                    <form onSubmit={handleSubmit}>
                        <p className='input-title'>Nama <div className='mandatory'>*</div></p>
                        <input className='input' type='text' onChange={(event) => {setNewName(event.target.value);}} required/>
                        <button className='btn' type='submit'>Mulai</button>
                    </form>
                </div>
            </div>
        )
}

Register.propTypes = {
    addData: PropTypes.func.isRequired
};

export default Register;