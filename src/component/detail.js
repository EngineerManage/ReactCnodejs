import React, { Component } from 'react';
import * as http from '../api/http';

import './styles/detail.css';

export default class DetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        http.getDetail(this.props.match.params.id).then(
            response => {
                this.setState({ data: response.data })
                console.log(response.data.content);
            }
        )
    }

    render() {
        return (
            <div>
                <div className="header">
                    <span>详情</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html:this.state.data.content }}></div>
            </div>
        )
    }
}