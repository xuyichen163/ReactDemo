import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './Sun.css'

class Sun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this);
    }
    render() {
        return (
            <div>
                <CSSTransition 
                    in={this.state.isShow}
                    timeout = {2000}
                    classNames = "Sun-text"
                    unmountOnExit
                >
                     <div >你好，我姓孙</div>
                </CSSTransition>
               
                <div><button onClick={this.toToggole}>Sun_button</button></div>
            </div>
        );
    }
    toToggole() {
        this.setState({
            //改变isShow的值
            isShow: this.state.isShow ? false : true,
        })
    }
}

export default Sun;