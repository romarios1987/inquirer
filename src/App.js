import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Inquirer from "./containers/inquirer/Inquirer";


class App extends Component {
    render() {
        return (
            <Layout>
                <Inquirer/>
            </Layout>
        );
    }
}

export default App;
