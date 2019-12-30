import React from 'react';

class Todo extends React.Component{

    render() {
            const config=this.props.config;
            console.log(this.props);
            const todoStyle= {
            padding:'10px 10px 10px 10px',
            width:'200px',
            margin:'0'                
            }            
            return (
                <h6 style={todoStyle}>
                    <input type="checkbox" checked={this.props.config.completed} onChange={() => this.props.checkboxHandler(this.props.config.id)}/> {this.props.config.itemName}      
                </h6>
            
            );
    }
}


export default Todo;