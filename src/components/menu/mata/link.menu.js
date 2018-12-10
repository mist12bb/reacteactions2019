import React from 'react'
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const  LinkMenu = ({herf, name, content}) =>  {

  return (
    <div>
      <Link to={herf}  >
      <Icon name={name} size="big"/>
      {content}
      </Link>
    </div>
  )
}

export default LinkMenu
