import React from 'react'

const GetElementById = () => {
    function changeColor(color) {
        const elem = document.getElementById('para');
        elem.style.color = color;
    }
    return (
        <div>
            <p id="para">Some text here</p>
            <button onClick={(color) => changeColor("red")} style={{ margin: '10px ' }}>Red</button>
            <button onClick={(color) => changeColor("blue")} style={{ margin: '10px ' }}>Blue</button>
            <button onClick={(color) => changeColor("black")} style={{ margin: '10px ' }}>Black</button>


        </div>
    )
}

export default GetElementById
