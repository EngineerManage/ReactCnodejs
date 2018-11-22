import React from 'react';
import * as http from '../api/http';
import { BeforeDay } from '../shared/utils';
import './styles/detail.css';

import HeaderComponent from './common/header';
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

    }

    componentWillUnmount() {

    }

    //  获取数据
    getData() {
        http.getDetail(this.props.match.params.id).then(
            response => {
                this.setState({ data: response.data })
                console.log(response.data);
            }
        )
    }

    //  查看image图片
    lookImage(event) {

    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <h2 className="detail-title">{this.state.data.title}</h2>
                <div className="author-box">
                    {this.state.data.author ? (<img src={this.state.data.author.avatar_url} alt='' />) : null}
                    <div className="author-content">
                        <p>
                            <span>{this.state.data.author ? this.state.data.author.loginname : null}</span>
                            <span className="type">{this.state.data.top ? '置顶' : ''}</span>
                        </p>
                        <p>
                            <span>{BeforeDay(this.state.data.create_at)}</span>
                            <span>{this.state.data.visit_count}浏览</span>
                        </p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} ref={box => this.box = box}></div>
            </div >
        )
    }
}

export default DetailComponent;