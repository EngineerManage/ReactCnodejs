import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import IndexComponent from './component/index';
import EditComponent from './component/edit';
import MessageComponent from './component/message';
import MineComponent from './component/mine';
import DetailComponent from './component/detail';

const routes = [
  {
    path: '/index',
    component: IndexComponent,
  },
  {
    path: '/edit',
    component: EditComponent,
  },
  {
    path: '/message',
    component: MessageComponent,
  },
  {
    path: '/mine',
    component: MineComponent,
  },
  {
    path: '/detail/:id',
    component: DetailComponent
  }
];
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map((item, index) => {
              return (
                <Route exact path={item.path} key={index} component={item.component} />
              )
            })}
            <Redirect to="/index" />
          </Switch>
        </Router>
        {/* <div className="mask-box">
          <span>正在加载...</span>
        </div> */}
      </div>
    );
  }
}

export default App;
