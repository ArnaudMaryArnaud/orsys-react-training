import React from 'react'
import Button from './components/Button/Button.jsx';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const App=(props) => {
    return (
    <div className='App'>DEMAT BREIZH<hr/>
    <Button text="benjamin" bgcolor="tomato" color="yellow" />
    <Button text="button" color="red" bgcolor="blue"/>
    </div>
    )
};

export default App;