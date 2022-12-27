import React, { useState } from 'react'

const If = () => {
    const [state, setState] = useState()
    let age = state

    const handleSubmit = () => {
        if (age > 18) {
            alert(`Your age is ${state} and you can drive`)
        }
        else {
            alert(`Your age is ${state} and you can't drive`)
        }
    }

    return (
        <div>
            <h1>Please enter Your age : </h1>

            <input type='text' onChange={(e) => setState(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>submit</button>

        </div>
    )
}

export default If
