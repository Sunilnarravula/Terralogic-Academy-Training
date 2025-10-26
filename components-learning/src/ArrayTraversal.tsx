import React from 'react'

const ArrayTraversal = () => {
    const items: undefined | any[] =[ "Sunil Naidu"];
  return (
    <div>
        <ol>
            {items?.map(val => (
                <li>{val}</li>
            ))}
        </ol>
    </div>
    
  )
}

export default ArrayTraversal