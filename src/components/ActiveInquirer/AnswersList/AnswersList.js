import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
    return (
        <div className='AnswersList'>
            <ul>
                {props.answers.map((answer, index) => {
                    return (
                        <AnswerItem
                            key={index}
                            answer={answer}
                        />
                    )

                })}
            </ul>
        </div>
    )
};


export default AnswersList;