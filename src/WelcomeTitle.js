import React from 'react'

function WelcomeTitle({user , primary}) {
    return (
        <div>
          {primary ? <h1>`Welcome ${user}!</h1> : <h2>Welcome!</h2>}  
        </div>
    )
}

export default WelcomeTitle
