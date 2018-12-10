import React from 'react';
import { withState } from 'recompose';
import "../../../../util/style/actions.style/actions-category-menu.style.css"
import { Segment, Menu } from 'semantic-ui-react';
const ActionsCateogry = ({activeItem, onActiveItem , handleSelectCategory}) => {
  return (
    <div className={"actions-category-menu"}>
    <div className={"actions-category-menu__"}>
    <div>
    <Segment inverted >
    <Menu inverted secondary>
        <Menu.Item name="expenses" active={activeItem === "expenses"}
                    onClick={((e, {name})=>{handleSelectCategory(name); onActiveItem(name);console.log(name)})}/>
        <Menu.Item name="enterings" active={activeItem === "enterings"} onClick={handleSelectCategory}
                    onClick={((e,{name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
        <Menu.Item name="debts" active={activeItem === "debts"} onClick={handleSelectCategory}
                    onClick={((e,{name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
        <Menu.Item name="loans"active={activeItem === "loans"} onClick={handleSelectCategory}
                    onClick={((e,{name})=>{handleSelectCategory(name); onActiveItem(name)})}/>
    </Menu>
    </Segment>
  </div>
    </div>
    </div>
  );
};

export default withState("activeItem", "onActiveItem", "debts")( ActionsCateogry );