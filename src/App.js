import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';

import TabBarComponent from './component/common/tabBar/tabBar';
import MainBoxComponent from './component/common/mainBox/mainBox';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MainBoxComponent />
            <TabBarComponent />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
