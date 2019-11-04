import React, {Fragment} from 'react';

// Constants
import {Dictionary} from '../../constants/Data';

// Components
import Button from '../Button';

// Styles
import './index.scss';

const Mailling = () => {
    return (
        <Fragment>
            <span className="mailling__call">
                {
                Dictionary.MAILLING_CALL
            }</span>
            <div className="mailling__input-container">
                <input placeholder={
                    Dictionary.MAILLING_INPUT
                }/>
                <Button variant="contained">
                    {
                    Dictionary.MAILLING_BUTTON
                }</Button>
            </div>
        </Fragment>
    )
}

export default Mailling
