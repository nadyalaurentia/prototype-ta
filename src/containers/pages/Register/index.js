// import React, { useState } from 'react';
// import './Register.scss'
// import { db } from '../../../config/firebase/index';
// import { collection, addDoc } from 'firebase/firestore';

// const Register = () => {
//         const usersCollectionRef = collection(db, "users");
//         const [newName, setNewName] = useState("");

//         const handleSubmit = async (event) => {
//             event.preventDefault();
//             if (newName) {
//                 await addDoc(usersCollectionRef, {name: newName});
//                 // Redirect to next page after successful form submission
//                 window.location.href = '/case/1';
//             }
//         };

//         return(
//             <div className='reg-container'>
//                 <div className='navbar'></div>
//                 <div className='content-container'>
//                     <p className='reg-title'>Halo!</p>
//                     <div className='reg-text'>
//                     <p>Terima kasih sudah meluangkan waktu untuk berpartisipasi dalam kegiatan eksperimen ini. Kegiatan ini terdiri dari 8 sesi yang masing-masing terdiri dari:</p>
//                     <ul className='reg-text'>
//                         <li>Aktivitas membaca materi</li>
//                         <li>Aktivitas pengujian pemahaman dan penilaian kenyamanan</li>
//                     </ul>
//                     <p>Eksperimen akan berlangsung selama kurang lebih 90 menit.</p>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <p className='input-title'>Nama <div className='mandatory'>*</div></p>
//                         <input className='input' type='text' onChange={(event) => {setNewName(event.target.value);}} required/>
//                         <button className='btn' type='submit'>Mulai</button>
//                     </form>
//                 </div>
//             </div>
//         )
// }

// export default Register;


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