/* module = component = object*/
import React from 'react';
import './Button.css';

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            disabled: this.props.disabled
        }
        this.text = this.props.text;    }

    render(){
        let styles = {}
        
        if(this.props.type=="danger"){
            styles ={
                backgroundColor: "red"
            }
        }
        // return JSX synthax
        return <button className="my-button" style={styles} disabled={this.state.disabled}>{this.text}</button>
    }
}

export default Button;