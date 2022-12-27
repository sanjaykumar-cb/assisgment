import React, { useState } from 'react'

const Prime = () => {
    const [value, setValue] = useState(0);

    const handleSubmit = () => {
        console.log(value)
        const number = value
        let isPrime = true;
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert(`${number} is a prime number`);
        } else {
            alert(`${number} is a not prime number`);
        }
    }



    return (
        <div>
            Please enter to check prime number<br />
            <input type='text' onChange={(e) => setValue(e.target.value)} required />
            <br />
            <br />
            <button onClick={handleSubmit}>Check</button>

        </div>
    )
}

export default Prime
