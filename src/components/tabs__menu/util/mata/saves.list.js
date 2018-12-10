import React from 'react';
import { List } from 'semantic-ui-react';

const SavedList = ({actions}) => {
  return (
    <div>
    <List divided relaxed>
    
    {actions.map((action, i)=>{
        return <List.Item key={i}>
        <List.Icon verticalAlign={"middle"}>{action.amount}</List.Icon>
        <List.Content>
        <List.Header as={'a'}>{action.description}</List.Header>
        <List.Description>{action.date}</List.Description>
        </List.Content>
        </List.Item>
    })}
</List>
    </div>
  );
};

export default SavedList;