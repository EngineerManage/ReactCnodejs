/*
 * @Author: WuFengliang 
 * @Date: 2018-11-23 10:48:21 
 * @Description:   登录 
 * @Last Modified time: 2018-11-23 10:48:21 
 */
import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './common/header';
import { addToken } from '../redux/action';

import './styles/login.css';

const mapDispatchToProps = (dispatch) => {
    return {
        addToken: (token) => {
            dispatch(addToken({ 'token': token }))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            token: ''
        }
    }

    // 设置token
    setToken(event) {
        this.setState({ token: event.target.value })
    }

    //  登录
    login() {
        this.props.addToken(this.state.token);
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <HeaderComponent title="登录" />
                <div className="login-box">
                    <input type="text" placeholder="Access Token" onInput={e => this.setToken(e)} />
                    <button onClick={() => this.login()}>登录</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);