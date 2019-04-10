import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from "../../ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

  state = {
    results: {}, // {[id]:'success' || 'error'}
    isFinished: false,
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
    const results = this.state.results;


    if (question.rightAnswerId === answerId) {

      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinished()) {
          this.setState({isFinished: true})
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000);

    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      });
    }
  };


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }


  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      results: {},
      isFinished: false,
    })
  };

  render() {

    const {quiz, activeQuestion, answerState, isFinished, results} = this.state;

    return (
          <div className={styles.Quiz}>
            <div className={styles.QuizWrapper}>
              <h1 className="align-center">Choose the correct answer</h1>


              {
                isFinished
                      ? <FinishedQuiz
                            results={results}
                            quiz={quiz}
                            onRetry={this.retryHandler}
                      />
                      : <ActiveQuiz
                            answers={quiz[activeQuestion].answers}
                            question={quiz[activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLenght={quiz.length}
                            answerNumber={activeQuestion + 1}
                            answerState={answerState}
                      />
              }


            </div>
          </div>
    );
  }
}

export default Quiz;
