import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers, onAnswerClick, state}) => {
    //console.log(onAnswerClick);
    return (
        <div className='AnswersList'>
            <ul>
                {answers.map((answer) => {

                    const {id, ...answerProps} = answer;
                    return (
                        <AnswerItem key={id}
                                    {...answerProps}
                                    id={id}
                            // text={answerProps.text}
                                    onAnswerClick={onAnswerClick}
                                    state={state ? state[id] : null}
                        />
                    )

                })}
            </ul>
        </div>
    )
};


export default AnswersList;