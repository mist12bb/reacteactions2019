import React from 'react';
import { Feed, Card } from 'semantic-ui-react';
import ActionsCategory from './mata/select-acts-cat/actions-category.menu';
import "../../util/style/actions.style/actions.style.css"

const Actions = ({actions, actionsToRnder, category, handleCategory}) => {


  return (
    <div className="actions-compoentent">
    <div className={"select-cateogry__menu"}>
    <ActionsCategory handleSelectCategory={handleCategory}/>
    </div>
      <div className="actions-compoentent__card">
          <Card>
            <Card.Content>

              <Card.Header>
              {category || "debts"}
              </Card.Header>

            </Card.Content>

            <Card.Content>
              <Feed>
                  {actionsToRnder}
              </Feed>
            </Card.Content>

          </Card>
      </div>
    </div>
  );
};

export default Actions;