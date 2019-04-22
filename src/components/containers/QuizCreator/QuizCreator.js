import React, {Component} from 'react';
import styles from './QuizCreator.module.css';

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import {createControl, validate, validateForm} from "../../../form/formFramework";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../ui/Select/Select";


function createOptionControl(number) {
  return createControl(
        {
          label: `Variant ${number}`,
          errorMessage: 'Please enter the variant answer',
          id: number
        },
        {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Enter Question',
      errorMessage: 'Please enter question',
    }, {required: true}),

    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

class QuizCreator extends Component {

  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 3,
    formControls: createFormControls()
  };


  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;


    const {question, option1, option2, option3, option4} = this.state.formControls;


    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    };

    quiz.push(questionItem);

    this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 3,
      formControls: createFormControls()
    })

  };

  createQuizHandler = (event) => {
    event.preventDefault();
    console.log(this.state.quiz);
    // TODO: Server
  };


  onChangeHandler = (value, controlName) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.value = value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({formControls, isFormValid: validateForm(formControls)})
  };


  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
            <Auxiliary key={controlName + index}>
              <Input type={control.type}
                     value={control.value}
                     valid={control.valid}
                     touched={control.touched}
                     label={control.label}
                     shouldValidate={!!control.validation}
                     errorMessage={control.errorMessage}
                     onChange={(event) => this.onChangeHandler(event.target.value, controlName)}
              />
              {index === 0 ? <hr/> : null}
            </Auxiliary>
      )
    })
  };


  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  };

  render() {

    const select = <Select
          label="Select the right answer"
          value={this.state.rightAnswerId}
          onChange={this.selectChangeHandler}
          options={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4},
          ]}
    />;

    return (
          <div className={styles.QuizCreator}>
            <div>
              <h2 className="align-center">Create Test</h2>

              <form onSubmit={(this.submitHandler)}>

                {this.renderControls()}

                {select}

                <Button
                      onClick={this.addQuestionHandler}
                      value="Add question"
                      type="primary"
                      disabled={!this.state.isFormValid}
                />

                <Button
                      onClick={this.createQuizHandler}
                      value="Create Test"
                      type="success"
                      disabled={this.state.quiz.length === 0}
                />

              </form>
            </div>
          </div>
    );
  }
}

export default QuizCreator;
