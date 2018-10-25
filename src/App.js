import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';

import TabBarComponent from './component/common/tabBar/tabBar';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <TabBarComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
