import React from "react";
import { Menu, Label, Tab, List } from "semantic-ui-react";
import SavedList from "./mata/saves.list";
import PeoplesList from "./mata/peoples.list";

export function Panes(labels, actions, Peoples){

  let {actNum} = labels;
const panes = [
  {
    menuItem: { key: 'peoples', icon: 'users', content: 'Peoples' },
    render: () => 
        <Tab.Pane>
              <PeoplesList Peoples={Peoples}/>
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='messages'>
        Saved Actions<Label>{actions.length}</Label>

      </Menu.Item>
    ),
    render: () => <Tab.Pane active>
          <SavedList actions={actions}></SavedList>
    </Tab.Pane>,
  },

]
      return panes;
}