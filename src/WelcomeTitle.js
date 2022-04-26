import React from 'react';

// Create the WelcomeTitle React component​​​​​​‌​​‌‌​​​‌‌‌​‌‌‌​​‌‌​‌‌‌‌​ here

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment

function WelcomeTitle({user , primary}) {
    return (
        <h2>
          {primary ? <h1>Welcome {user}!</h1> : <h2>Welcome!</h2>}  
        </h2>
    )
}

// Do not change
export default WelcomeTitle;