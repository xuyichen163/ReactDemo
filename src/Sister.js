import React, { Component, Fragment } from 'react';
import './Sister.css'
import SisiterItem from './SisiterItem';

class Sister extends Component {
    // 生命周期函数指在某一个时刻组件会自动调用执行的函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    };

    // componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，
    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // };
    // componentDidMount() {
    //     console.log('componentDidMount----组件挂载完成的时刻执行')
    // };

    // shouldComponentUpdate() {
    //     console.log("1-shouldComponentUpdate---组件发生改变前执行");
    //     return true;//false 不进行后续的操作 
    // };
    // UNSAFE_componentWillUpdate() {
    //     console.log("2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行");
    // }
    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate----组件更新之后执行')
    // }
    // render函数是只要有state和props变化就会执行

    
    render() {
        // console.log('3-render---组件挂载中.......')
        return (
            <Fragment>
                <div>
                    <label htmlFor="inp1">加入服务：</label>
                    <input
                        id="inp1"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (

                                /*<li
                                  key={index + item}
                                  onClick={this.deleteItem.bind(this, index)}
                                  dangerouslySetInnerHTML={{__html:item}}
                              >                                  
                              </li>
                              */


                                <SisiterItem
                                    key={index + item}
                                    //给子组件传递index
                                    content={item}
                                    index={index}

                                    //向子组件传递 deleteItem方法
                                    deleteItem={this.deleteItem.bind(this)}
                                />

                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    };


    inputChange(e) {
        // console.log(e.target.value);
        // console.log(this);
        this.setState({
            inputValue: this.input.value,
        })
    };
    //增加列表
    addList() {
        //this.setState 是一个异步函数 所以用setState的回调
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll("li").length);
        })

    };

    //删除列表项
    deleteItem(index) {
        // React是禁止直接操作state的
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list,
        })

    }
}

export default Sister;