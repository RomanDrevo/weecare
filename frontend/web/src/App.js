import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './App.module.scss';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";


@inject('categoriesStore')
@observer
class App extends Component {

    componentDidMount() {
        //Load everything from server
    }

    render() {
        return (
            <div className="app-wrapper">
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route exact path="/admin" component={Admin}/>
                </Switch>
            </div>
        );
    }
}

export default App;
