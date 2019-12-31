import React from 'react';


class AddItem extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           itemName : ''
       }
  
   this.updateInput = this.updateInput.bind(this);
   this.clearInput = this.clearInput.bind(this);
   this.setInput = this.setInput.bind(this);
   //this.myAddItemHandler = this.myAddItemHandler.bind(this);
}

/*myAddItemHandler(itemName){
    alert( "Clicked  : "+itemName);
}*/

updateInput(event){
    console.log("state changing")
    this.setState({itemName : event.target.value})
}

clearInput(){
    this.setState({itemName : ''});
}

setInput(itemName){
    this.setState({itemName : itemName});
}


    render(){
        const addItemDivStyle = {
           padding:'20px',
            backgroundColor : '#818890'
                    
        }
        return (
            <div style={addItemDivStyle}>
                <form>
                    <input type="text" placeholder="Add Item" id="itemName" onChange={this.updateInput} autoComplete="off" value={this.state.itemName}></input> 
                    <input type="button"  value="Add Item" onClick={() => this.props.myAddItemHandler(this.state.itemName)}></input>
            </form>
            </div>
        );
    }
}

export default AddItem;