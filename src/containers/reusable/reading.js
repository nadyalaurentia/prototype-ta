import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './reading.scss';
import './style-cases.scss';
import PropTypes from 'prop-types';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Reading = (session) => {
    let style = 'read-text style-' + (session % 4).toString();
    
    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    useEffect(() => {
      const getUser = async () => {
        const readingDoc = doc(db, "reading", session.toString());
        const readingSnap = await getDoc(readingDoc);
  
        if (readingSnap.exists()) {
          setTitle(readingSnap.data().title);
          setContent(readingSnap.data().content);
        } else {
          console.log("No such doc");
        }
      };
  
      getUser();
    }, [title, content]);

    return(
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='read-title'>{title}</p>
                <p className={style}>{content}</p>
            </div>
            <Link to={'/case/'+ session.toString() +'/questions'}><button className='read-btn'>Selesai Membaca</button></Link>
        </div>
    )
}

Reading.propTypes = {
    session: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Reading;