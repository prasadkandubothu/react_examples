import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios';
import UserSearch from './UserSearch';


export default function DataFetching() {

    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState({});

    useEffect(() => {
         
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
            .catch(err => {
                console.log("Error while fetching the user data from Json Place Holder service" + err)
            })
    }, [])

   
    function setSearchUserDetails(userDetails){ console.log("In Parent : "+userDetails)
        setSearchUser(userDetails); 
        
    }

    return (
        <div>
              <UserSearch searchUserTrigger={setSearchUserDetails} allUsers={users}></UserSearch>
            {
                /*users.map(user =>
                    <Fragment>
                            <p><a href="javascript:void(0)">{user.name}</a></p>
                    </Fragment>
                )*/
             
               searchUser && searchUser.name
               
            } 
          
        </div>
    )
}
