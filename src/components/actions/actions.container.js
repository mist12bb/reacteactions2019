import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import { on_fetch_actions } from '../../redux/ecomeny.redux/actions';
import jsonServer from '../../util/api/json-server';
import Actions from './actions.compoent';
import "../../util/style/actions.style/actions.style.css"
import {actionBoxRneder} from "./mata/actions.util/functions/render.function";

 class ActionsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {actions: [], CATEGORY_TYPE: ""};
  };
  
  componentWillMount() {

  

    jsonServer("debts").then(({data})=>{
    
      console.log(data);
      this.setState({actions:data});
    })
  };
  renderListActions() {
    return [...this.state.actions].map((action, i)=>{
       return actionBoxRneder(action, i, this.onActionFunc, this.state.CATEGORY_TYPE)
      
    })
  }

  
  onActionFunc = () => {
      const onDelAction = (i)=>{
        let actions = [...this.state.actions];
        actions.filter((action, j)=>{
          return i != j;
        })

        this.setState({actions})
      };
      const onSaveActionApi = ()=>{};
      const onDelActionApi = ()=>{};
      const onSaveAction = ()=>{};
      return {
        onSave: onSaveAction, 
        onSaveApi: onSaveActionApi,
        onDel: onDelAction,
        onDelApi: onDelActionApi,
      }
  }
  handleCategory = (cat_name)  => {

    this.setState({CATEGORY_TYPE: cat_name});
    jsonServer.get(cat_name).then(({data})=>{
      this.setState({actions: data});
      console.log(data);
    });
    console.log(cat_name, "slom");


  }

  render() {
    
    return (
      <div>
      <p>slom</p>
        <Actions actionsToRnder={this.renderListActions()} handleCategory={this.handleCategory} category={this.state.CATEGORY_TYPE}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  actions: state.actions
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onFetchActions:  on_fetch_actions
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(ActionsIndex);
