import React from 'react';
import styles from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({question, answers, quizLenght, onAnswerClick, answerNumber, answerState}) => {
  return (
        <div className={styles.ActiveQuiz}>
          <p className={styles.Question}>
            <span>
              <strong>2.</strong>&nbsp;
              {question}
            </span>
            <small>{answerNumber} of {quizLenght}</small>
          </p>

          <AnswersList
                answerState={answerState}
                answers={answers}
                onAnswerClick={onAnswerClick}
          />
        </div>
  );
};

export default ActiveQuiz;
