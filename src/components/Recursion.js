import React, { useEffect, useState } from 'react'

const Recursion = () => {
    const [number, setNumber] = useState()

    useEffect(() => {
        function countDown(number) {
            console.log(number);
            setNumber(number);
            const newNumber = number - 1;

            if (newNumber > 0) {
                countDown(newNumber);
            }
        }
        countDown(4);

    })

    return (
        <div>
            <h1>check console for output</h1>


        </div>
    )
}

export default Recursion
