import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';
import PropTypes from 'prop-types';
import './styles/Button.css'
const ButtonGroup = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Screen 
                screenText={props.screenText} 
                setScreenText={props.setScreenText}
                darkMode={props.darkMode}
            /><div className='rx'>
            <div className='num'><ButtonList
                operations={[ 1, 2, 3]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            /></div>
           
            <ButtonList
                operations={['+', '*', 4, 5, 6]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            /> <div className='bd'>
            <ButtonList
                operations={['/','-', 7, 8, 9]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            /></div>
            <ButtonList
                operations={['CLEAR', '<=',0,'=']}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            </div>
        </form>
    )
}

ButtonGroup.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    screenText: PropTypes.string.isRequired,
    setScreenText: PropTypes.func.isRequired,
    handleClickOperation: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default ButtonGroup;
