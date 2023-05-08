import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './reading.scss';
import './style-cases.scss';
import jsonData from '../../assets/soal.json';

function Reading() {
    const {session} = useParams();
    let style = 'read-text style-' + (session % 4).toString();
    
    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }
    
    const [data, setData] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
      setData(jsonData);
    }, []);
  
    useEffect(() => {
      if (data !== null) {
        setTitle(data[session.toString()]["judul"]);
        setContent(data[session.toString()]["bacaan"]);
        // const content = data[session.toString()]["bacaan"];
        setStartTime(Date.now());
      }
    }, [data, session]);


    if (data === null) {
        return <div>Loading...</div>;
    }

    const calculateReadingSpeed = (startTime) => {
      const endTime = Date.now();
      const readingTime = (endTime - startTime) / 1000 / 60; //convert to minute
      console.log(`Reading time: ${readingTime} minute`);
      const wordCount = content.trim().split(/\s+/).length;
      const speed = Math.round(wordCount / readingTime); // speed in words per minute
      console.log(`Reading speed: ${speed} wpm`);
      localStorage.setItem(session, [speed]);
    };

    return(
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
                <p className='read-title'>{title}</p>
                {/* <p className={style}>{content}</p> */}
                <div className={style}>
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
            </div>
            <Link to={'/case/'+ session.toString() +'/questions'} onClick={() => calculateReadingSpeed(startTime)}><button className='read-btn'>Selesai Membaca</button></Link>
        </div>
    )
}

export default Reading;