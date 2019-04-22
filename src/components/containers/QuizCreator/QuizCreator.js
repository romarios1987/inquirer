import React, {Component} from 'react';
import styles from './QuizCreator.module.css';

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import {createControl} from "../../../form/formFramework";
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
    rightAnswerId: 3,
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
      // console.log(control);

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
