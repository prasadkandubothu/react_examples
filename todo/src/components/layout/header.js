import React from 'react';

class Header extends React.Component{

render(){
    
    return (
        <div>
      
       <nav className="navbar navbar-expand-sm navbar-light bg-dark">
           <a className="navbar-brand" href="#" style={{color:'white'}}>To Do List</a>
           <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>
          
       </nav>
       
        </div>
    );
    }
}

export default Header;