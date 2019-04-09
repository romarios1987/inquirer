import React from 'react';
import styles from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers, onAnswerClick, answerState}) => {
  return (
        <div>
          <ul className={styles.AnswersList}>
            {answers.map((answer, index) =>
                  <AnswerItem
                        answer={answer}
                        key={index}
                        onAnswerClick={onAnswerClick}
                        answerState={answerState ? answerState[answer.id] : null}
                  />
            )}
          </ul>
        </div>
  );
};

export default AnswersList;
