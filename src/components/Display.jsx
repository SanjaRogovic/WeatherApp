import React from 'react'

const Display = ({weather}) => {
  return (
    <>

    {weather ? 
    <div>
        <h2>Location: {weather.city}</h2>
        <p>{weather.country}</p>
        <p>{weather.description}</p>
    </div>

     : null}
    
    </>
    
  )
}

export default Display