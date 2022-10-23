import React, { useState } from 'react';
import './styles/App.css';
import ButtonGroup from './ButtonGroup';
import axios from 'axios';

import { useEffect } from 'react';

const App = ()=> {
  const [screenText, setScreenText] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    if(loading){
      setScreenText("Loading history...")
    }
    axios.get('https://backend-task-six.vercel.app/last').then(res=>{setScreenText(res.data[0].result);
    setLoading(false)});
  },[])

  const handleClickOperation = async (buttonValue) => {
    let result = '';
    if (buttonValue === '=') {     // evaluate the expression and set the new state
      return;
    } else if (buttonValue === 'CLEAR') {
      result=''
    } else if (buttonValue === '<=' && screenText !== '') {
      let val = screenText;
      result = val.substring(0, val.length - 1);
    } else if (buttonValue !== '=' && buttonValue !== '<=') {
      result = screenText+buttonValue;
    }
    const dat={result}
    setScreenText(result);
    await axios.post('https://backend-task-six.vercel.app/setres',dat).then(res=>{
      console.log(res.body)
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = '';
    try {
      // eslint-disable-next-line no-eval
      result = eval(screenText);
    } catch (e) {}
    result = result.toString();
    setScreenText(result);
    const dat={result}
    await axios.post('http://localhost:8001/setres',dat).then(res=>{
      console.log(res.body)
    })
  }

  return (
    <div className={darkMode ? "darkApp app" : "lightApp app"}>
      <div className={darkMode ? "darkCalculator calculator" : "lightCalculator calculator"}>
        
        <ButtonGroup 
          darkMode={darkMode}
          screenText={screenText}
          setScreenText={setScreenText}
          handleClickOperation={handleClickOperation}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
