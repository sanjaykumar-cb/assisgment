import React, { useState, useEffect } from 'react'

const While = () => {
    let i = 0;

    const [state, setState] = useState(0)

    useEffect(() => {
        setInterval(() => {
            while (i <= 10) {
                console.log(i)
                i++
            }
            setState(state + 1)




        }, 1000);
    });



    return (
        <div>
            <h1>While loop demostration</h1>
            <h3>{state}</h3>


        </div>
    )
}

export default While
