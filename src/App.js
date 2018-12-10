import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from "redux";
import {Provider} from "react-redux"
import RootReducer from "./redux/ecomeny.redux/redcers";

import Routes from "./components/routes"
import actionsContainer from './components/actions/actions.container';
const store = createStore(RootReducer);
class App extends Component {
  render() {
    return (

      <Provider store={store}>

            <div>
                <Routes/>
          </div>

      </Provider>

    );
  }
}

export default App;
