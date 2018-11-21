import React, { Component } from 'react';
import TabBarComponent from './common/tabBar';

import { connect } from 'react-redux';
import * as http from '../api/http';

import './styles/index.css';
import { chooseTab } from '../redux/action';

import IndexViewComponent from '../component/common/indexView';

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
                    value: 'all'
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
        this._updateScrollData();
    }

    // 监听scroll
    _updateScrollData() {
        let scroll = this.refs.scroll;
        scroll.addEventListener('scroll', (e) => {
            const dom = e.srcElement;
            if (dom.scrollHeight < dom.clientHeight + dom.scrollTop + 1) {
                //  加载下一页
                this.setState({ postData: { ...this.state.postData, page: this.state.postData.page + 1 } }, () => {
                    this.getData();
                })
            }
        }, false);
    }

    //  获取数据
    getData() {
        http.getTopics(this.state.postData).then(
            response => {
                this.setState({ listData: [].concat(this.state.listData, response.data) });
            }
        )
    }

    //  tab选择
    chooseTab(value) {
        if (this.props.tab === value) {
            return;
        }
        this.setState({ postData: { ...this.state.postData, tab: value, page: 1 } }, () => {
            this.props.chooseTab(value);
            this.setState({ listData: [] }, () => {
                this.getData();
            })
        });
    }

    render() {
        return (
            <div>
                <div className="main-box" ref="scroll">
                    <ul className="tab-list" style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#fff' }}>
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
                    <div className="indexView-box">
                        {this.state.listData.map((item, index) => {
                            return (
                                <IndexViewComponent key={index} {...item} />
                            )
                        })}
                    </div>
                </div>
                <TabBarComponent />
            </div>
        )
    }
}

const IndexComponent = connect(mapStateToProps, mapDispatchToProps)(IndexComp);

export default IndexComponent;