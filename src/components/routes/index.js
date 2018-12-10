import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActionsIndex from "../actions/actions.container";
import FormAddAction from "../form/add-actions.form";
import Menu from "../menu/menu";
import Report from "../report/index";
import { EntringsHndel } from "../enterByTime/daily.continer";
import TabsMenu from "../tabs__menu/tabed.menu"
const Routes = () => {
  return (
    <div>
    <Router>
    <div>
    <div style={{display: "grid", gridTemplateColumns: "200px auto"}}>
        <div className="nav-top" >
          <Menu/>
        </div>
        <div className="routers">
        
        <Route
        path="/add-action" 
        render={()=> <FormAddAction/> } />
        <Route
        path="/actions" 
        render={()=> <ActionsIndex/> } />
        <Route
        path="/report" 
        render={()=> <Report/> } />
        <Route
        path="/daily" 
        render={()=> <EntringsHndel/> } />
        <Route
        path="/saved-actions" 
        render={()=> <TabsMenu /> } />
      
        
        </div>
      </div>
      </div>
      </Router>
    </div>
  );
};

export default Routes;