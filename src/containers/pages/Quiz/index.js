import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../reusable/reading.scss';
import PropTypes from 'prop-types';
import Questions from '../../reusable/question';
import { db } from '../../../config/firebase'
import { doc, getDoc } from 'firebase/firestore';

const Quiz = (session) => {
    const i = [1, 2, 3, 4, 5, 6];

    const[questions, setQuestions] = useState([]);
  
    useEffect(() => {
      const getQuestions = async () => {
        const questDoc = doc(db, "questions", session.toString());
        const questSnap = await getDoc(questDoc);
  
        if (questSnap.exists()) {
          setQuestions(questSnap.data());
        } else {
          console.log("No such doc");
        }
      };
  
      getQuestions();
    }, [session]);

    const listQuestion = i.map((i) => {
        const qnum = 'q' + i.toString();
        const cnum = 'c' + i.toString();
        const qtemp = questions[qnum];
        const ctemp = questions[cnum];
        return <Questions question={i + '. ' + qtemp} option={ctemp} />;
    });

    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }

    return(            
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
            <p className='read-title'>Pertanyaan Pemahaman</p>
            {listQuestion}    
            <p className='read-title'>Penilaian Kenyamanan</p>
            <p className='read-text'>Seberapa nyaman membaca dengan tampilan tersebut?</p>
                <form>
                    <div><label><input type="radio" name='likert1' value='1' /> 1 - tidak nyaman </label></div>
                    <div><label><input type="radio" name='likert2' value='2' /> 2 - kurang nyaman </label></div>
                    <div><label><input type="radio" name='likert3' value='3' /> 3 - biasa saja </label></div>
                    <div><label><input type="radio" name='likert4' value='4' /> 4 - cukup nyaman </label></div>
                    <div><label><input type="radio" name='likert5' value='5' /> 5 - sangat nyaman </label></div>
                </form>
            </div>

            {(session < 8) && <Link to={'/case/'+ (session+1).toString()}><button className='read-btn'>Simpan Jawaban</button></Link>}
            {(session >= 8) && <Link to={'/final'}><button className='read-btn'>Simpan Jawaban</button></Link>}
        </div>
    )

};

Quiz.propTypes = {
    session: PropTypes.number.isRequired
};

export default Quiz;