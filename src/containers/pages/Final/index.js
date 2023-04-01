import React, {Component} from 'react';
import './Final.scss'

class Final extends Component {
    render(){
        return(
            <div className='fin-container'>
                <div className='navbar'></div>
                <div className='content-container'>
                    <p className='fin-title'>Terima kasih sudah berpartisipasi</p>
                    <p className='fin-text'>Eksperimen sudah selesai. Anda dipersilakan untuk menutup aplikasi.</p>
                </div>
            </div>
        )
    }
}

export default Final;