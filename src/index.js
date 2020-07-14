// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () =>{
    return (
    <div>
        <div>
            <p>Hi there!</p>
        </div>
        <div>
            <label>Enter text:</label>
            <input/>
            <button style = {{backgroundColor:'blue', color: 'white'}}>Click me!</button>
        </div>
    </div>
    )
}

//Take the react component and show it on the screen

ReactDOM.render(
 <App />,document.querySelector('#root')
);