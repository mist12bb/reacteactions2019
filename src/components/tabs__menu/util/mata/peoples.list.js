import React from 'react';
import { List } from 'semantic-ui-react';

const PeoplesList = ({Peoples}) => {
  return (
    <div>
    <List divided relaxed>
              
    {Peoples.map((person, i)=>{
        return <List.Item key={i}>
        <List.Icon verticalAlign={"middle"}>{person.name}</List.Icon>
        <List.Content>
        <List.Header as={'a'}>{person.actions}</List.Header>
        <List.Description>{person.date}</List.Description>
        </List.Content>
        </List.Item>
    })}
</List>
    </div>
  );
};

export default PeoplesList;