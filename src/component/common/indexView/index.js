import React from 'react';
import './index.css';

import { BeforeDay } from '../../../shared/utils';

export default class IndexViewComponent extends React.Component {

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
        return (
            <div className="box">
                <div className="title">
                    {this.props.top ? (<div className="tips active">置顶</div>) : (<div className="tips">{filterName(this.props.tab)}</div>)}
                    <span className="title-content"><a href={'/detail/' + this.props.id}>{this.props.title}</a></span>
                </div>
                <div className="box-content">
                    <img src={this.props.author.avatar_url} alt="" />
                    <div className="person-info">
                        <p>
                            <span>{this.props.author.loginname}</span>
                            <span>{this.props.reply_count}/{this.props.visit_count}</span>
                        </p>
                        <p>
                            <span>{BeforeDay(this.props.create_at)}</span>
                            <span>{BeforeDay(this.props.last_reply_at)}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
