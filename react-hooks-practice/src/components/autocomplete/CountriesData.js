import React, { Component, useContext } from 'react'
import axios from 'axios';
import { UserContext} from '../App';



export default class CountriesData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }

        console.log("conext :  "+this.props.name);
    }

   

    //https://restcountries.eu/rest/v2/all
    
    componentDidMount() { console.log("component did mount")
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

    render() {
         const name = useContext(UserContext);
        return (
            <UserContext.Consumer>
                hi : {name}
            </UserContext.Consumer>
        )
    }
}
