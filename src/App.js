import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li> {false?"JSPang.com":"技术"}</li>
                <li> React deom </li>
            </ul>
        )

        //     var child1 = React.createElement('li',null,'JSPang.com')
        //     var child2 = React.createElement('li',null,'React')
        //     var root = React.createElement('ul',{className = 'my-list'},child1,child2);
    }
}

export default App;