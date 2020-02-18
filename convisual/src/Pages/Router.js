import React from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Main from './Main'
import Map from './Map'
import News from './News'
import Advice from './Advice'

function MyRouter() {
    return(
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/map" exact component={Map}/>
            <Route path="/news" exact component={News} />
            <Route path="/advice" exact component={Advice} />
            <Advice/>
        </Switch>

    );
}

export default MyRouter;