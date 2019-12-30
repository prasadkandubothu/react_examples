import React from 'react';


class AddItem extends React.Component{

   constructor(){
       super();
       this.state = {
           itemName : ''
       }
  

   this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


updateInput(event){
this.setState({itemName : event.target.value})
}


handleSubmit(){
console.log('Your input value is: ' + this.state.itemName)
//Send state to the server code
}



    render(){
        const addItemDivStyle = {
           padding:'20px',
            backgroundColor : '#818890'
                    
        }
        return (
            <div style={addItemDivStyle}>
                <input type="text" placeholder="Add Item" id="itemName" onChange={this.updateInput}></input>
            <button onClick={this.props.addItemHandlerChild('hi')}>Add Item</button>
            </div>
        );
    }
}

export default AddItem;