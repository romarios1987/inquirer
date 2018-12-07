import React, {Component} from 'react';
import './Inquirer.css';
import ActiveInquirer from "../../components/ActiveInquirer/ActiveInquirer";
import FinishedInquirer from "../../components/FinishedInquirer/FinishedInquirer";
import {Col} from 'reactstrap';


class Inquirer extends Component {

    state = {
        results: {}, // {[id]:'success' || 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]:'success' || 'error'}
        inquirer: [
            {
                question: 'Headline question 1?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3}
                ]
            },
            {
                question: 'Headline question 2?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3}
                ]
            }
        ]
    };


    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }


        //console.log(`answerId: ${answerId}`);

        const question = this.state.inquirer[this.state.activeQuestion];

        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            // если ответили правильно
            if (!results[question.id]) {
                results[question.id] = 'success'
            }


            this.setState({
                answerState: {
                    [answerId]: 'success',
                    results: results

                }
            });
            const timeout = window.setTimeout(() => {
                if (this.isInquirerFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 500);

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }


        console.log(results)

    };


    isInquirerFinished() {
        return this.state.activeQuestion + 1 === this.state.inquirer.length;
    }


    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    };


    componentDidMount() {
        console.log(`Inquirer ID = ${this.props.match.params.id}`)
    }


    render() {

        return (
            <div className='Inquirer'>
                <Col lg={{size: 6, offset: 3}} md={{size: 8, offset: 2}}>
                    <h1 className="text-center text-white">Inquirer</h1>
                    {
                        this.state.isFinished
                            ? <FinishedInquirer
                                results={this.state.results}
                                inquirer={this.state.inquirer}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveInquirer
                                answers={this.state.inquirer[this.state.activeQuestion].answers}
                                question={this.state.inquirer[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                inquirerLength={this.state.inquirer.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </Col>
            </div>
        )
    }
}


export default Inquirer;