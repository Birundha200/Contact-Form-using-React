import { useState } from 'react';
import './Error.css';
export default function Error(){
    
    return(
        <div className="errorbody">
        <div className="popuperror">
            <h3>Error</h3>
            <div className="errorpopup-centext">
                <p className="para1">An error occured.Please try again later.</p>
                <button className="closebutton" onClick={closePopup}>close</button>
            </div>
        </div>
    </div>
    )
};