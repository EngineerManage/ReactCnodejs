import React, { Component } from 'react';
import TabBarComponent from './common/tabBar';

import { connect } from 'react-redux';
import * as http from '../api/http';

import './styles/index.css';
import { chooseTab } from '../redux/action';

const mapStateToProps = state => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chooseTab: (value) => {
            dispatch(chooseTab(value))
        }
    }
}

class IndexComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: {
                page: 1,
                limit: 10,
                mdrender: true,
                tab: this.props.tab
            },
            listData: [],
            tabList: [
                {
                    key: '全部',
                    value: ''
                }, {
                    key: '问答',
                    value: 'ask'
                }, {
                    key: '分享',
                    value: 'share'
                }, {
                    key: '招聘',
                    value: 'job'
                }, {
                    key: '精华',
                    value: 'good'
                }
            ]
        }
    }

    componentWillMount() {
        this.getData();
    }

    componentDidMount() {

    }

    //  获取数据
    getData() {
        http.getTopics(this.state.postData).then(
            response => {
                this.setState({ listData: response.data });
            }
        )
    }

    //  tab选择
    chooseTab(value) {
        if (this.props.tab === value) {
            return;
        }
        this.setState({ postData: { ...this.state.postData, tab: value } }, () => {
            this.props.chooseTab(value);
            this.getData();
        });
    }

    render() {
        return (
            <div>
                <div className="main-box">

                    <ul className="tab-list">
                        {this.state.tabList.map((item, index) => {
                            return (
                                <li
                                    className={this.props.tab === item.value ? 'active' : ''}
                                    key={index}
                                    onClick={() => this.chooseTab(item.value)}>{item.key}
                                </li>
                            )
                        })}
                    </ul>

                    {this.state.listData.map((item, index) => {
                        return (
                            <div key={index}>
                                11
                            </div>
                        )
                    })}
                </div>
                <TabBarComponent />
            </div>
        )
    }
}

const IndexComponent = connect(mapStateToProps, mapDispatchToProps)(IndexComp);

export default IndexComponent;