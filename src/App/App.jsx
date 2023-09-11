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
    <Button text="benjamin" bgcolor="tomato" color="yellow" style={{width: '254px', padding:'60px 80px'}} />
    <Button text="button" bgcolor='blue' onClick={(arg) => {console.log('button 2 activated', arg)}}/>
    </div>
    )
};

export default App;