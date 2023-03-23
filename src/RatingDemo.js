import React from 'react'
import Sagar from './Sagar';
import UserInfo from './UserInfo';
import MyButton from './MyButton';
import Mask from './Mask';
import Panel from './Panel';
import Toggle from './Toggle';
import Star from './Star';
import Header from './Header';
import { useState } from 'react';
import FancyButton from './FancyButton';
import Counter from './Counter';
import Rating from './Rating';

export default function RatingDemo() {
    const [valueInApp, setValueInApp] = useState(0);

    function InvokeAppMethod(newValue) {
      setValueInApp(newValue)
    }
  
    return (
      <div className="App">
  
        <button onClick={() => setValueInApp(0)}>Reset</button>
  
        <Rating onChange={InvokeAppMethod} value={valueInApp} />
  
        {valueInApp}
      </div>
    );
}
