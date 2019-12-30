import React from 'react'
import Todo from './todo'
import todoData from './todosData'
import AddItem from './addItem';

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            pendingTodos : todoData.filter(item => item.completed === false),
            completedTodos : todoData.filter(item => item.completed === true),
           
        }
       // this.buttonHandler = this.buttonHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.addItemHendler = this.addItemHendler.bind(this);
        
    }
    
   
buttonHandler(){
    //this.setState({count : this.state.todos.length});

}

checkboxHandler(id){
  

    this.setState(prevState => {
console.log("Complete Prev State : "+prevState);
       const updatedTodos= prevState.pendingTodos
       .filter(item => item.id === id)
       .map(item => {
                item.completed = !item.completed;
        return item;
        });
        prevState.completedTodos.push(updatedTodos[0]);

        console.log("Prev state : "+prevState.completedTodos[0]);
       
    
    return {
        pendingTodos : prevState.pendingTodos.filter(item => item.completed === false), 
        completedTodos : prevState.completedTodos
    
    }
    });
}


addItemHendler(itemName){
    const newItem = {}
    newItem.id = this.state.pendingTodos.length + this.state.completedTodos.length + 1;
    newItem.itemName = itemName;
    newItem.completed = false;
    this.setState(prevState => {
        return {
            pendingTodos : prevState.pendingTodos.push(newItem)
        }
    });
}


    render(){
   
            const mainStyle = {
                width : '100%'
            }

            const pendingTodoItems=this.state.pendingTodos.map((todo, index) => {
            return <Todo key={todo.id} config={todo} checkboxHandler={this.checkboxHandler}/>;
            });

            const completedTodoItems=this.state.completedTodos.map((todo, index) => {
                console.log("ToDo : "+todo.itemName);
            return <Todo key={todo.id} config={todo} checkboxHandler={this.checkboxHandler}/>;
            });

            return (
                
                <div className="container">
                <div className="row" style={{paddingTop : '25px'}}>
                    <div className="col-md-4">
                   <AddItem addItemHandlerChild={this.addItemHendler}/>
                    </div>
                </div>
                <div className="row" style={{paddingTop : '60px'}}>
                <div className="col-md-4">
                    Total Pending Tasks : {this.state.pendingTodos.length}
                             {pendingTodoItems}
                </div>
               
                <div className="col-md-4">
                Total Completed Tasks : {this.state.completedTodos.length}
                {completedTodoItems}
                </div>
                    </div>
                
                </div>

            );
    }
}

export default Main;