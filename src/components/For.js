import React, { useEffect, useState } from 'react'

const For = () => {
    const [state, setState] = useState(10)

    useEffect(() => {

        setInterval(() => {
            for (let i = 10; i > 1; i--) {
                setState(state - 1);

            }

        }, 1000);
    });

    return (
        <div>
            <h1>Decrement for using for loop:</h1>
            <h1>{state}</h1>

        </div>
    )
}

export default For
