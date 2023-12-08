import React, { useState } from 'react'

function Greetings() {
    const [name, setName] = useState();
    return (
        <>
         <div className="flex w-full mt-5 justify-between lg:px-8">
            <input type='text' 
            placeholder='Enter Your Name'
            className="border-2 p-2 bg-red-100"
            onChange={(event) => {
                setName(event.target.value)
            }}
            ></input>
            <span>
            Hello <span className="font-bold capitalize">{name}</span>,
            </span>
         </div>
        </>
    )
}

export default Greetings
