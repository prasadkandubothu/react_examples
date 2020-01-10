import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function UserSearch(props) {
    const {allUsers} = props;

    const [searchText, setSearchText] = useState('');
    const [searchUserResult, setSearchUserResult] = useState({});

    useEffect(() => { alert("called" + searchText);
    
        getUserDetailsById(searchText);        
    }, [searchText])
    
      function getUserDetailsById(id) { alert("id :"+id)
    //    console.log("made function call")
    //     Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then(res => {
    //             console.log(res);
    //             setSearchUserResult(res.data);
    //         })
    //         .catch(err => {
    //             console.log("Error while fetching the user data from Json Place Holder service" + err)
    //         })

    const userss=allUsers.filter(u => {
        console.log(typeof parseInt(id) +" : in filter "+ typeof u.id)
        console.log(parseInt(id) === u.id +" : in filter "+u.id)
        return parseInt(id) === u.id
    });
    setSearchUserResult(userss[0]);
    console.log("result user : "+ userss);
    //console.log(allUsers);
   }


    return (
        <div>
           <form>
               <input type="text" value={searchText} onChange={e => {setSearchText(e.target.value); props.searchUserTrigger(searchUserResult)}} />
           </form>
        </div>
    )
}
