import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as http from '../api/http';
import { BeforeDay } from '../shared/utils';
import './styles/detail.css';

import HeaderComponent from './common/header';

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.getData();
    }

    componentDidMount() {
        console.log(this.props.token);
    }

    componentWillUnmount() {

    }

    // 收藏/取消 主题
    isColletTopic(item) {
        const id = item.id;
        http.colletTopic(id, this.props.token).then(
            data => {
                if (!data.success) {
                    this.props.history.push('/login');
                    return;
                }
                alert('收藏成功');
            }
        )
    }

    //  获取数据
    getData() {
        http.getDetail(this.props.match.params.id).then(
            response => {
                this.setState({ data: response.data })
                console.log(response.data);
                console.log()
            }
        )
    }

    //  查看image图片
    lookImage(event) {

    }

    render() {
        const filterName = (name) => {
            switch (name) {
                case 'ask':
                    return '问答';
                case 'share':
                    return '分享';
                case 'job':
                    return '招聘';
                case 'good':
                    return '精华';
                default:
                    return '';
            }
        }

        const replyContent = this.state.data.replies ? (
            this.state.data.replies.map((item, index) => {
                return (
                    <div className="reply-person" key={index}>
                        <div className="person-data">
                            <img src={item.author.avatar_url} alt='' />
                            <div>
                                <span>{item.author.loginname}</span>
                                <span>发布于{BeforeDay(item.create_at)}</span>
                                <div className="operate">
                                    <span>点赞{item.ups.length}</span>
                                    <span
                                        onClick={() => this.isColletTopic(item)}>
                                        收藏</span>
                                </div>
                            </div>
                        </div>
                        <div className="reply-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                )
            })
        ) : null;

        return (
            <div>
                <HeaderComponent />
                <div className="detail-box">
                    <h2 className="detail-title">{this.state.data.title}</h2>
                    <div className="author-box">
                        {this.state.data.author ? (<img src={this.state.data.author.avatar_url} alt='' />) : null}
                        <div className="author-content">
                            <p>
                                <span>{this.state.data.author ? this.state.data.author.loginname : null}</span>
                                <span className="type">{this.state.data.top ? '置顶' : filterName(this.state.data ? this.state.data.tab : '')}</span>
                            </p>
                            <p>
                                <span>{BeforeDay(this.state.data.create_at)}</span>
                                <span>{this.state.data.visit_count}浏览</span>
                            </p>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} ref={box => this.box = box}>
                    </div>
                    <div className="reply">
                        <h2 className="reply-title"><span className="reply-count">{this.state.data.reply_count}</span>回复</h2>
                        {/* <div className="reply-person">
                            <div className="person-data">
                                <img src={this.state.data.author ? this.state.data.author.avatar_url : ''} alt='' />
                                <p>
                                    <span>张三测试</span>
                                    <span>发布于</span>
                                    <div className="operate">
                                        <span>点赞</span>
                                        <span>收藏</span>
                                    </div>
                                </p>
                            </div>
                            <div className="reply-content"></div>
                        </div> */}
                        {replyContent}
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(connect(mapStateToProps)(DetailComponent));