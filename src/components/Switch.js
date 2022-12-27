import React, { useState } from 'react'

const Switch = () => {
    const [state, setState] = useState('');
    let days = state
    const handleSubmit = () => {
        switch (days) {
            case 'Monday' && 'monday':

                alert(`Today is  ${state}`)
                break;
            case 'Tuesday' && 'tuesday':

                alert(`Today is  ${state}`)
                break;

            case 'Wednessday' && 'wednesday':
                alert(`Today is  ${state}`)
                break;

            case 'Thursday' && 'thursday':
                alert(`Today is  ${state}`)
                break;

            case 'Friday' && 'friday':
                alert(`Today is  ${state}`)
                break;

            case 'Satursday' && 'satursday':
                alert(`Today is  ${state}`)
                break;

            case 'Sunday' && 'sunday':
                alert(`Today is  ${state}`)
                break;

            default:
                alert(`Today is  ${state}`)

        }



    }

    return (
        <div>
            <h1> Enter Todays Days </h1>
            <input type='text' onChange={(e) => setState(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>submit</button>

        </div>
    )
}

export default Switch
