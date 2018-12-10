import React from 'react';
import { Menu, Input, Icon} from "semantic-ui-react";


import "../../util/style/menu.style/menu.style.css";

import LinkMenu from './mata/link.menu';


const MenuMain = () => {
  return (
    <Menu vertical>
          <Menu.Item>
            <Input placeholder="search"/>
          </Menu.Item>
          <Menu.Item>
            home
            <Menu.Menu>
            <Menu.Item>
           
             <LinkMenu herf={"/actions"} name={"home"} content={"actions"}  />
            </Menu.Item>
            <Menu.Item>
           
             <LinkMenu herf={"/daily"} name={"time"} content={"daily entrings"} />
            </Menu.Item>
              <Menu.Item>
              <LinkMenu name={'reddit'} herf={"/report"} content={"report"}/>
              </Menu.Item>
              <Menu.Item>
                      <LinkMenu name={"add circle"} herf={"/add-action"} content={"add new actions"}/>
              </Menu.Item>
              <Menu.Item>
                      <LinkMenu name={"save"} herf={"/saved-actions"} content={"saved actions"}/>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Icon name="grid layout"/>
            Browse
          </Menu.Item>
        </Menu>
  
  );
};

export default MenuMain;