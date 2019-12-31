import React from 'react';

class Todo extends React.Component{

    render() {
            const config=this.props.config;
            console.log(this.props);
            let bgColor = "indianred"
            if(this.props.config.completed)
                bgColor = 'rgb(137, 197, 137)';

            const todoStyle= {
            padding:'10px 10px 10px 10px',
            width:'200px',
            backgroundColor:bgColor,
            margin:'0'                
            }       
           
            return (
                <h6 style={todoStyle}>
                    <input type="checkbox" checked={this.props.config.completed} onChange={() => this.props.checkboxHandler(this.props.config.id)}/> {this.props.config.itemName}  
                    <span style={{display :  this.props.config.completed === false ? 'inline' : 'none'}}>
                        <input type="button" value="Delete" onClick={() => this.props.deleteHandler(this.props.config.id)}>
                        </input> <input type="button" value="Edit" onClick={() => this.props.editHandler(this.props.config)}></input>
                    </span>
                </h6>
            
            );
    }
}


export default Todo;