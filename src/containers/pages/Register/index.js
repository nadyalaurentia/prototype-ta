import React, { useState } from 'react';
import './Register.scss'

function Register() {
        const [newName, setNewName] = useState("");

        const handleSubmit = async (event) => {
            event.preventDefault();
            if (newName) {
                localStorage.clear();
                localStorage.setItem('nama', newName);
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
                        <li>Aktivitas membaca materi dalam bahasa Inggris</li>
                        <li>Aktivitas pengujian pemahaman berupa 6 soal pilihan ganda</li>
                        <li>Aktivitas pemberian nilai kenyamanan</li>
                    </ul>
                    <p>Eksperimen akan berlangsung selama kurang lebih 60 menit. Anda dapat beristirahat selama pergantian sesi, namun Anda diharapkan untuk fokus ketika sesi membaca karena kecepatan membaca akan diukur. Perlu diingat juga bahwa Anda tidak bisa kembali ke halaman membaca ketika sudah berada di halaman menjawab pertanyaan. </p>
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

export default Register;