import React, {Component} from 'react';
import styles from './QuizCreator.module.css';

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import {createControl} from "../../../form/formFramework";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";


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
    formControls: createFormControls()
  };


  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = () => {

  };

  createQuizHandler = () => {

  };


  onChangeHandler = (value, controlName) => {

  };


  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      console.log(control);

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

  render() {
    return (
          <div className={styles.QuizCreator}>
            <div>
              <h2 className="align-center">Create Test</h2>

              <form onSubmit={(this.submitHandler)}>

                {this.renderControls()}

                <select>

                </select>


                <Button
                      onClick={this.addQuestionHandler}
                      value="Add question"
                      type="primary"
                      // disabled={!this.state.isFormValid}
                />

                <Button
                      onClick={this.createQuizHandler}
                      value="Create Test"
                      type="success"
                      // disabled={!this.state.isFormValid}
                />

              </form>
            </div>
          </div>
    );
  }
}

export default QuizCreator;
