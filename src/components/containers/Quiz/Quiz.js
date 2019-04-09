import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from "../../ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    answerState: null, // {[id]:'success' || 'error'}
    quiz: [
      {
        question: 'Headline question 1?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Answer 1', id: 1},
          {text: 'Answer 2', id: 2},
          {text: 'Answer 3', id: 3},
          {text: 'Answer 4', id: 4}
        ]
      },
      {
        question: 'Headline question 2?',
        rightAnswerId: 1,
        id: 2,
        answers: [
          {text: 'Answer 1', id: 1},
          {text: 'Answer 2', id: 2},
          {text: 'Answer 3', id: 3},
          {text: 'Answer 4', id: 4}
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      });

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000);

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      });
    }
  };


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {

    const {quiz, activeQuestion, answerState} = this.state;

    return (
          <div className={styles.Quiz}>
            <div className={styles.QuizWrapper}>
              <h1 className="align-center">Choose the correct answer</h1>

              <ActiveQuiz
                    answers={quiz[activeQuestion].answers}
                    question={quiz[activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLenght={quiz.length}
                    answerNumber={activeQuestion + 1}
                    answerState={answerState}
              />

            </div>
          </div>
    );
  }
}

export default Quiz;
