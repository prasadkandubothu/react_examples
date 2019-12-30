import React from 'react'
import Todo from './todo'
import todoData from './todosData'

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            todos : todoData
            // count : this.pendingTasksCount()
        }
       // this.buttonHandler = this.buttonHandler.bind(this);
        // this.pendingTasksCount = this.pendingTasksCount.bind(this);
        
    }
    
    // pendingTasksCount(){
    //     return todoData.filter(item => {
    //         return item.completed === false
    //     });
    // }

buttonHandler(){
    //this.setState({count : this.state.todos.length});

}

checkboxHandler(id){
    alert("checkbox handler" +id);
}
    render(){
     
            const mainStyle = {
                width : '100%',
                contentAlign:'center'            
            }

            const todos1=this.state.todos.map((todo, index) => {
                console.log(index);
                todo.id = index;
            return <Todo key={todo.id} config={todo} checkboxHandler={this.checkboxHandler}/>;
            });

            return (
                <div style = {mainStyle}>
                    Total Pending Tasks : {this.state.count} 
                    {todos1}                
                </div>
            );
    }
}

export default Main;