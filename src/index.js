//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react'
import ReactDOM from 'react-dom'



const date = new Date();
const hours = date.getHours();
let Title;

const customStyle = {
  color : ''
}

if (hours < 12){
  Title = 'Good Morning';
  customStyle.color = 'blue';
}else if (hours < 18){
  Title = 'Good Afternoon';
  customStyle.color = 'yellow';
}else{
  Title = 'Good evening';
  customStyle.color = 'red';
}




ReactDOM.render(
  <h1 className='heading' style={customStyle}>{Title}</h1>
  ,document.getElementById('root'))