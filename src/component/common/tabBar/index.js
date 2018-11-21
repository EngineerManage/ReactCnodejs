/**
 * @description 底部导航
 */

import React, { Component } from 'react';
import './index.css';

import { NavLink } from 'react-router-dom';

export default class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  tabChange(num) {
    if (this.state.index === num) return;
    this.setState({ index: num });
  }

  render() {
    return (
      <div id="tabBar">
        <ul>
          <li onClick={() => this.tabChange(0)}>
            <NavLink
              to="/index"
              style={{ textDecoration: 'none' }}
              activeClassName="active"
            >
              <i className="iconfont icon-liebiao" />
            </NavLink>
          </li>

          <li onClick={() => this.tabChange(1)}>
            <NavLink
              to="/edit"
              style={{ textDecoration: 'none' }}
              activeClassName="active"
            >
              <i className="iconfont icon-youhui" />
            </NavLink>
          </li>
          <li onClick={() => this.tabChange(2)}>
            <NavLink
              to="/message"
              style={{ textDecoration: 'none' }}
              activeClassName="active"
            >
              <i className="iconfont icon-guangbo" />
            </NavLink>
          </li>
          <li onClick={() => this.tabChange(3)}>
            <NavLink
              to="/mine"
              style={{ textDecoration: 'none' }}
              activeClassName="active"
            >
              <i className="iconfont icon-icon_zhanghao" />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
