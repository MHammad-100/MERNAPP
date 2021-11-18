import React from "react";
import Header from "./Header";
import Nav from './Nav'
import Body from './Body'
import { BrowserRouter} from "react-router-dom";
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Task from "./Task";
import Componentshouldupdate from './Componentshoudupdate'
import Calculator from './Calculaor'
const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Header />
    <Nav />

    <Switch>
    <Route exact path="/Login" component={Login} />
    <Body/>
    </Switch>
    
    </BrowserRouter>

    </>
)
}
export default App;
