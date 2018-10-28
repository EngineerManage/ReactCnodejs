/**
 * mainBox 主体显示内容
 */
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './mainBox.css';

import IndexComponent from '../../index';
import EditComponent from '../../edit';
import MessageComponent from '../../message';
import MineComponent from '../../mine';

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
];

class MainBoxComponent extends Component {
  componentWillMount () {}

  render () {
    return (
      <div id="mainBox">
        <Switch>
          {routes.map ((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                extra
                render={props => <item.component {...props} />}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default MainBoxComponent;
