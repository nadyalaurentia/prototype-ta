import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import '../../reusable/reading.scss'
// import PropTypes from 'prop-types';
import Questions from '../../reusable/question';
// import { Component } from 'react';


class Quiz extends Component {
    render() {
        return(
            <div className='read-container'>
                <div className='navbar'></div>
                <div className='content-container'>
                    {/* for (let i = 0; i < 6; i++){
                        <Questions question={'question ' + [i].toString()} option={['A', 'B', 'C', 'D']} />
                    } */}
                    <Questions question='question 1' option={['A', 'B', 'C', 'D']} />
                    <Questions question='question 2' option={['A', 'B', 'C', 'D']} />
                    <Questions question='question 3' option={['A', 'B', 'C', 'D']} />
                    <Questions question='question 4' option={['A', 'B', 'C', 'D']} />
                    <Questions question='question 5' option={['A', 'B', 'C', 'D']} />
                    <Questions question='question 6' option={['A', 'B', 'C', 'D']} />
                </div>
                <Link to='/case/2'><button className='read-btn'>Simpan Jawaban</button></Link>
            </div>
        )
    }
}

export default Quiz;