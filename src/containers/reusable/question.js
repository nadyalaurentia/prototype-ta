import React from 'react';
import { Link } from 'react-router-dom';
import './reading.scss'
import PropTypes from 'prop-types';

const Questions = ({question, option}) => {
    return(
        <div>
            <p className='read-text'>{question}</p>
            <form>
                {option.map((option) => (
                    <div key={option}>
                        <label>
                            <input type="radio" name={question} value={option} />
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
};

export default Questions;