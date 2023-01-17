// write code for Welcome component here
<<<<<<< HEAD
import React from "react";

 function Welcome (props){
    
    return (
        <div>
            <h1>Hey{props.name}!</h1>
            <h2>Welcome to Newton School.</h2>
        </div>
    )
 }

 export default Welcome;
=======
import React from 'react'

export default function Welcome(props) {

    const {name} = props;
  return (
    <div>
        <h1>Hey{name}!</h1>
        <h2>Welcome to Newton School.</h2>
    </div>
  )
}

>>>>>>> refs/remotes/origin/main
