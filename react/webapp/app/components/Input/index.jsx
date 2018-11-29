import React from 'react';
import "./style.less";

class Input extends React.Component {
    constructor (props, context) {
        super();
        this.state = {
            value: ""
        }
    }

    submitHandler (e) {
        
    }

    keyUpHandler (e) {
        if (e.keyCode === 13) {
            
        }
    }

    changeHandler (e) {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
        
    }

    render () {
        return <div>
            <input type="text" 
                value={this.state.value}  
                onKeyUp={this.keyUpHandler.bind(this)} 
                onChange={this.changeHandler.bind(this)} 
            />
        </div>
    }
}

export default Input;
