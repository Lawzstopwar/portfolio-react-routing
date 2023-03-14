import React from 'react';
import myResume from "../PDF/LawzStopwarCV.pdf"

function Resume(props) {
    return (
        <div>
            <h1>Resume Page</h1>
            <iframe 
                src={myResume}
                width="100%" 
                height="800"></iframe>
        </div>
    );
}

export default Resume;