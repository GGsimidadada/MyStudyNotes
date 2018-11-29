import React from "react";
import { render } from "react-dom";

import Input from "../../components/Input";
import List from "../../components/List";

class Todo extends React.Component {
    constructor (props, context) {
        super();
        this.state = {
            todos: []
        }
    }
    render () {
        return <div>
            <Input />
            {/* <List todos={this.state.todos} /> */}
        </div>
    }
}

export default Todo;