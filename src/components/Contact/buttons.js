import React from "react";

export default function BUTTONS(){
    return(
        <div className="new-contact">
            <button onClick={() => window.location = 'mailto:wildbeats@iiitkottayam.ac.in'} className="contact-button">Contact</button>
            <a href="https://www.iiitkottayam.ac.in"><button type="submit" className="mag-button">Magazine</button></a>
        </div>
        
    )
}