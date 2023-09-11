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
    <Button bgcolor="transparent" color="black" style={{width: '254px', padding:'60px 80px'}}  onClick={(arg) => {console.log('button 1 has been triggered', arg)}}>
        Benjamin  <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_OK.ru-512.png" style={{height: "32px", width:"32px"}}/>
    </Button>
    <Button children="Click me" bgcolor='blue' onClick={(arg) => {console.log('button 2 activated', arg)}}/>
    </div>
    )
};

export default App;