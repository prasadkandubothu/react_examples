import React, { useState, Fragment, useEffect } from 'react'

function FunctionCouter(){

    //useState
    const [count, setCount] = useState(0);

    const increment = ()=>{
        //updating state using useState
        setCount(prevState => prevState + 1);        
    }

    //useEffect
    useEffect(() => {
        document.title = `You clicked  ${count} times`;
    });
    

    return (
        <Fragment>
        <button onClick={increment}>Click Me [Function], Clicked {count} Times </button>
        </Fragment>
    );
}



export default FunctionCouter;