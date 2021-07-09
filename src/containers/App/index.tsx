import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "../../components/Header";
import {Count} from "../Count/Loadable";
import {More} from "../More/Loadable";
import {Sort} from "../Sort/Loadable";
// import history from "../../utils/history";

interface IIndexProps {

}

const Index: React.FC<IIndexProps> = props => {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/sort" component={Sort} />
                <Route path="/more" component={More} />
                <Route path="/" component={Count} />
            </Switch>
        </Router>
    );
}

export default Index;
