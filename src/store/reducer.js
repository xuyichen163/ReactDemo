//默认数据
const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
} 

//store 自动将action 推送给reducer
export default (state = defaultState, action) => {  //一个方法函数
    console.log(state,action);
    //reducer  只能接收state 不能改变 state
    if(action.type ==="change_input_value"){
        let newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type ==="addItem"){
        let newState = JSON.parse(JSON.stringify(state)); //深拷贝
        newState.list.push(newState.inputValue) //inputValue的值压入state数组
        newState.inputValue=""
        return newState;
    }
    return state
}
//state: 是整个项目中需要管理的数据信息,这里我们没有什么数据，所以用空对象来表示。