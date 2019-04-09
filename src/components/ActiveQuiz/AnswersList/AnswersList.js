import React from 'react';
import styles from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers, onAnswerClick}) => {
  return (
        <div>
          <ul className={styles.AnswersList}>
            {answers.map((answer, index) =>
                  <AnswerItem
                        answer={answer}
                        key={index}
                        onAnswerClick={onAnswerClick}
                  />
            )}
          </ul>
        </div>
  );
};

export default AnswersList;
