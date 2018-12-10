import React, {Component} from 'react';
import { Label, Menu, Tab } from 'semantic-ui-react'
import "./util/style/tabs.style.css";
import { Panes } from './util/util'
import jsonServer from './util/api/jsonServer';


class TabsMenu  extends Component{
  constructor(props) {
    super(props);
    this.state = {actions: []};
  }
  
  componentWillMount() {
    jsonServer.get("saved").then(({data})=>{
      this.setState({actions: data})
    })
  }
  
  render() {
   let Labels = {"actNum": 30};
  let actions = [
    {amount: 10, description: "info gose here..", date:"2019-1-2"},
    {amount: 10, description: "info gose here..", date:"2019-1-2"},
    {amount: 10, description: "info gose here..", date:"2019-1-2"},
    
  ]
  let pepoles = [
    {name: 'odel', actions: "odel has been inuleved in 10 actions.", date:"2019-1-2"},
    {name: 'odel', actions: "odel has been inuleved in 10 actions.", date:"2019-1-2"},
    {name: 'odel', actions: "odel has been inuleved in 10 actions.", date:"2019-1-2"},
  
    
  ] 
  return (
    <div>
    <div className={"tabs-continer"}>
    <Tab panes={Panes(Labels, actions, pepoles)}/>
    </div>
    </div>
  );}
};

export default TabsMenu;