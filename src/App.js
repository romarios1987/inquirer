import React, {Component} from 'react';
import './App.css';
import Layout from "./components/hoc/Layout/Layout";

import {Route, Switch} from "react-router-dom";

import Quiz from "./components/containers/Quiz/Quiz";
import QuizCreator from "./components/containers/QuizCreator/QuizCreator";
import QuizList from "./components/containers/QuizList/QuizList";
import Auth from "./components/containers/Auth/Auth";

class App extends Component {
  render() {
    return (
          <Layout>
            <Switch>
              <Route path="/auth" component={Auth}/>
              <Route path="/quiz-creator" component={QuizCreator}/>
              <Route path="/quiz/:id" component={Quiz}/>
              <Route path="/" component={QuizList}/>
            </Switch>
          </Layout>
    );
  }
}

export default App;
