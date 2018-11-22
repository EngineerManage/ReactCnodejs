import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="header-box">
                <span onClick={()=>{this.props.history.goBack()}}>&lt;</span>
                详情
            </div>
        )
    }
}

export default withRouter(HeaderComponent);