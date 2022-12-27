import React, { useEffect, useState } from 'react'

const Closure = () => {
    const [number, setNumber] = useState()

    useEffect(() => {
        function add() {
            let counter = 5;
            function plus() {
                counter += 5;
                setNumber(counter)
                return console.log(counter);
            }
            plus()
        }
        add()

    })


    return (
        <div>
            <h1>Closure function add outer function value is 5 and inner function value 5 and the result is  </h1>
            <h1>{number}</h1>

        </div>
    )
}

export default Closure
