// rfce ==> Shortcut to create react component

import React, { useState } from 'react'

function PassingObjects() {
    
    const [fullName,setFullName] = useState({firstName : "Jaffarson", lastName : "Batman"})

    function firstName(){
        // fullName.firstName="Jaff"
        // setFullName({...fullName})

        setFullName({...fullName,firstName:"Jaff"})
        // {firstName : "Jaffarson", lastName : "Batman",  firstName : "Jaff" }
    }

    function lastName(){
        // fullName.lastName="The Batman"
        // setFullName({...fullName})

        setFullName({...fullName,lastName:"The Batman"})
        // {firstName : "Jaffarson", lastName : "The Batman",  lastName : "Jaff" }
    }

    function every(){
        // fullName.firstName="Jafffff"
        // fullName.lastName="Theeeeeeeee Batman"
        // setFullName({...fullName})

        setFullName({...fullName,firstName:"Jaffffff",lastName:"Theeeee Batman"})
    }

  return (
    <div>
      <h1>{JSON.stringify(fullName)}</h1>
      <button onClick={firstName}>First Name Changing</button>
      <button onClick={lastName}>Last Name Changing</button>
      <button onClick={every}>Changing Full Name</button>
    </div>
  )
}

export default PassingObjects
