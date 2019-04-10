import React from 'react';
import styles from './FinishedQuiz.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'

const FinishedQuiz = (props) => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

  return (
        <div className={styles.FinishedQuiz}>
          <ul>
            {
              props.quiz.map((quizItem, index) => {


                const resultsInfo = props.results[quizItem.id]; // 'success' || 'error'

                console.log(props.results[quizItem.id]);


                return (
                      <li key={index}>
                        <strong>{index + 1}.</strong>&nbsp;
                        <span>{quizItem.question}</span>
                        <FontAwesomeIcon
                              icon={resultsInfo === 'error' ? faTimes : faCheck}
                              className={styles[resultsInfo]}
                        />
                      </li>
                )
              })
            }
          </ul>
          <p>Correct answers {successCount} of {props.quiz.length}</p>

          <div>
            <button onClick={props.onRetry}>Repeat</button>
          </div>
        </div>
  );
};

export default FinishedQuiz;