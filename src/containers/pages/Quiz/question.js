import React, { useState } from 'react';
import '../Reading/reading.scss';
import PropTypes from 'prop-types';

const Questions = ({question, option, onAnswerChange}) => {
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        const newAnswer = parseInt(event.target.value);
        setAnswer(newAnswer);
        onAnswerChange(newAnswer);
    };

    return(
        <div>
        <p className='read-text'>{question}</p>
            <form>
                {option.map((option, index) => (
                    <div key={option}>
                        <label>
                            <input type="radio" name={question} value={index} onChange={handleChange} checked={answer === index} />
                            {option}
                        </label>
                    </div>
                ))}    
            </form>
        </div>
    )
}

Questions.propTypes = {
    question: PropTypes.string.isRequired,
    option: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerChange: PropTypes.func.isRequired
};

export default Questions;