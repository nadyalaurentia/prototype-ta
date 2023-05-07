import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../reusable/reading.scss';
import PropTypes from 'prop-types';
import Questions from '../../reusable/question';
import jsonData from '../../../assets/soal.json';
import { db } from '../../../config/firebase/index';
import { collection, addDoc } from 'firebase/firestore';

function Quiz({addData}) {
    const {session} = useParams();

    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }

    const [data, setData] = useState(null);
    const [answers, setAnswers] = useState({});
    const [comprehension, setComprehension] = useState(0);
    const [likeability, setLikeability] = useState(0);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        setData(jsonData);
    }, []);


    if (data === null) {
        return <div>Loading...</div>;
    }

    const handleAnswerChange = (questionIndex, newAnswer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: newAnswer
        }));
    };

    const listQuestion = data[session.toString()]["listsoal"].map((nomorsoal, index) => {
        const choices = [];
        nomorsoal["pilihan"].map((option) => {
            choices.push(option["teks"]);
            return null;
        });
        return <Questions key={index} question={nomorsoal["soal"]} option={choices} onAnswerChange={(newAnswer) => handleAnswerChange(index, newAnswer)} />;
    });

    const calcScore = () => {
        let score = 0;
        
        data[session.toString()]['listsoal'].forEach((nomorsoal, index) => {
            const selectedAnswerIndex = answers[index];
            if (nomorsoal && nomorsoal["pilihan"] && nomorsoal["pilihan"][selectedAnswerIndex] && typeof nomorsoal["pilihan"][selectedAnswerIndex]["isCorrect"] !== "undefined" && nomorsoal["pilihan"][selectedAnswerIndex]["isCorrect"]) {
              score += 1;
            }
        });
        setComprehension(score);
    }

    const handleLikert = (event) => {
        setLikeability(parseInt(event.target.value));
        calcScore();
    }

    const handleSubmit = (event) => {
        if (Object.keys(answers).length != 6) {
            alert("Silakan menjawab seluruh pertanyaan");
            return;
        }

        if (likeability === 0) {
            alert("Silakan menjawab seluruh pertanyaan");
            return;
        }

        event.preventDefault();
        addData(comprehension);
        addData(likeability);
        const temp = localStorage.getItem(session);
        localStorage.setItem(session, [temp, comprehension, likeability]);
        
        if (session < 8) {
            window.location.assign(`/case/${parseInt(session) + 1}`);
        } else {
            const localStorageData = {};
            localStorageData['nama'] = localStorage.getItem('nama');
            for (let i = 1; i <= 6; i++) {
                const value = localStorage.getItem(i);
                if (value) {
                    localStorageData[i] = value;
                }
            }
            const blob = new Blob([JSON.stringify(localStorageData)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = `${localStorageData['nama']}.json`;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            window.location.assign('/final');
        }
    };

    return(            
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
            <p className='read-title'>Pertanyaan Pemahaman</p>
            {listQuestion}    
            <p className='read-title'>Penilaian Kenyamanan</p>
            <p className='read-text'>Seberapa nyaman membaca dengan tampilan tersebut?</p>
                <form>
                    <div><label><input type="radio" name='likert' value='1' onChange={handleLikert} /> 1 - tidak nyaman </label></div>
                    <div><label><input type="radio" name='likert' value='2' onChange={handleLikert} /> 2 - kurang nyaman </label></div>
                    <div><label><input type="radio" name='likert' value='3' onChange={handleLikert} /> 3 - biasa saja </label></div>
                    <div><label><input type="radio" name='likert' value='4' onChange={handleLikert} /> 4 - cukup nyaman </label></div>
                    <div><label><input type="radio" name='likert' value='5' onChange={handleLikert} /> 5 - sangat nyaman </label></div>
                </form>
            </div>

            <button className='read-btn' onClick={handleSubmit}>Simpan Jawaban</button>
        </div>
    )

};

Quiz.propTypes = {
    session: PropTypes.number.isRequired,
    addData: PropTypes.func.isRequired
};

export default Quiz;