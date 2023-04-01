import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../reusable/reading.scss';
import PropTypes from 'prop-types';
import Questions from '../../reusable/question';

const Quiz = (session) => {
    const i = [1, 2, 3, 4, 5, 6];
    const listQuestion = i.map((i) => (
        <Questions question={i + '. questionquestion?'} option={['A', 'B', 'C', 'D']} />
    ))
    
    let contrast = 'read-container';
    if (session > 4) {
        contrast = contrast + ' dark';
    }

    return(            
        <div className={contrast}>
            <div className='navbar'></div>
            <div className='content-container'>
            {listQuestion}    
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