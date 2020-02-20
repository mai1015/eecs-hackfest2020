import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./Main";
import Map from "./Map";
import News from "./News";
import Advice from "./Advice";

const MyRouter = withRouter(({location})=>(
    <div>
    <TransitionGroup className={'router-wrapper'}>
      <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
        <Switch location ={location}>
          <Route path="/" exact component={Main} />
          <Route path="/map" exact component={Map} />
          <Route path="/news" exact component={News} />
          <Route path="/advice" exact component={Advice} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>

))
   
  
export default MyRouter;
