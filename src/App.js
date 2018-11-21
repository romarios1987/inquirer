import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom';
import Inquirer from "./containers/Inquirer/Inquirer";
import Auth from "./containers/Auth/Auth";
import InquirerCreator from "./containers/InquirerCreator/InquirerCreator";
import InquirerList from "./containers/InquirerList/InquirerList";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/auth'} component={Auth}/>
                    <Route path={'/inquirer-creator'} component={InquirerCreator}/>
                    <Route path={'/inquirer/:id'} component={Inquirer}/>
                    <Route path={'/'} component={InquirerList}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
