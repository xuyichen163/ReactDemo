import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index.js'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange)//订阅Redux的状态
        this.clickBtn = this.clickBtn.bind(this);
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                    />
                    <Button
                        type='primary'
                        onClick={this.clickBtn}
                    >
                        增加
                    </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    >

                    </List>
                </div>
            </div>
        );
    }
    //监听 input 按钮
    changeInputValue(e) {
        //创建action
        const action = {
            //action 名字
            type: 'change_input_value',
            value: e.target.value,
        }
        store.dispatch(action);
    }
    //组件发生更新
    storeChange() {
        this.setState(store.getState());
    }

    //按钮绑定 把action传递给store
    clickBtn() {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }
}

export default TodoList;