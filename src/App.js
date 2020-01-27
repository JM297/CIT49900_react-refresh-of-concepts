import React from 'react';
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import List from "./components/Item/List";
import ItemPage from "./components/Item/ItemPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/list/item/:id"} component={ItemPage}/>
                <Route path={"/list"} component={List}/>
            </Switch>
        </Router>
    </div>
  );
}
