import React, { Component } from 'react';
import PropTypes from 'prop-types'


class SisterItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //组件第一次存在与dom中 函数是不会被执行的
    // 如果已经存在dom中，函数不会被执行
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('child-componentWillReceiveProps')
    // };
    // componentWillUnmount(){
    //     console.log('child - componentWillUnmount--组件被删除的时候执行')
    // }

    // nextProps:变化后的属性;
    // nextState:变化后的状态;
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }

    };

    render() {
        console.log("child-render");
        return (
            //content 是父组件传递过来的
            <li onClick={this.handleClick}>
                {this.props.dname}一二
                {this.props.content}</li>
        );
    };
    //删除组件 继承父组件的删除方法 利用父组件传递的index删除
    handleClick() {
        // console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }
}

//类型校验 父组件给子组件传值

SisterItem.protoTypes = {
    dname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
}


SisterItem.defaultProps = {
    dname: '007'
}
export default SisterItem;