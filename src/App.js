import React, {Component} from 'react';
import './App.css';
import Layout from "./components/hoc/Layout/Layout";
import Quiz from "./components/containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
          <Layout>
            <Quiz/>
          </Layout>
    );
  }
}

export default App;
