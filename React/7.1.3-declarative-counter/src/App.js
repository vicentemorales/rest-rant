import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    return (
        <h1>{counter}</h1>
    )
}

export default App;
