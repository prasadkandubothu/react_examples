import React, { Component, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../../App';




 class CountriesData extends Component {

    

    constructor(props) {
        super(props)
   
    }

   

    //https://restcountries.eu/rest/v2/all
    
    componentDidMount() { 
    const value=this.context;
     console.log(this.context);
console.log("component did mount : "+value)
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

    render() {
         //const name = useContext(UserContext);
        return (
           <div>
                hi : 
                </div>
           
        )
    }
    
}



export default CountriesData;