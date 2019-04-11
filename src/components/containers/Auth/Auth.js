import React, {Component} from 'react';
import styles from './Auth.module.css';
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

class Auth extends Component {

  loginHandler = () => {

  };

  registerHandler = () => {

  };


  render() {
    return (
          <div className={styles.Auth}>
            <div>
              <h1 className="align-center">Sign In</h1>

              <form className={styles.AuthForm} onSubmit={(event) => event.preventDefault()}>

                <Input
                      label="Email"
                      placeholder="Enter your Email"
                />
                <Input
                      label="Password"
                      placeholder="Enter your Password"
                      errorMessage="Hello World"
                />

                <Button
                      onClick={this.loginHandler}
                      value="Sign In"
                      type="success"
                />
                <Button
                      onClick={this.registerHandler}
                      value="Register"
                      type="primary"
                />
              </form>
            </div>
          </div>
    );
  }
}

export default Auth;
