/**
 * @description 底部导航
 */

import React, {Component} from 'react';
import './tabBar.css';



export default class TabBarComponent extends Component {
  componentWillMount () {
    console.log('loaded~')
  }

  render () {
    return (
      <div id="tabBar">
        <ul>
          <li>
            <i className="iconfont icon-liebiao active" />
          </li>
          <li>
            <i className="iconfont icon-youhui" />
          </li>
          <li>
            <i className="iconfont icon-guangbo" />
          </li>
          <li>
            <i className="iconfont icon-icon_zhanghao" />
          </li>
        </ul>
      </div>
    );
  }
}
