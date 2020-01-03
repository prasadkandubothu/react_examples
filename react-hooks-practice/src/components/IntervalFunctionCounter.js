import React, { useState, useEffect } from 'react'

function IntervalFunctionCounter() {

    const [count, setCount] = useState(0);

    const name = "prasad";

    const printName = () => {
        console.log(name);
    }
    
    useEffect(() => {
        //console.log("useEffect")
        printName();
        const inter=setInterval(increment ,  1000)

        return () => {
            clearInterval(inter);
        }
    }, []);

    const increment = () => {     
        setCount(prev => prev + 1);
    }

    return (
        <div>
                <h1><b> {count} </b></h1>
        </div>
    )
}

export default IntervalFunctionCounter
