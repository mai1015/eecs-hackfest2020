import React from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Main from './Main'
import Map from './Map'
import News from './News'
import Advice from './Advice'

function MyRouter() {
    return(
        <Switch>
            <Main/>
            <Map/>
            <News/>
            <Advice/>
        </Switch>

    );
}

export default MyRouter;