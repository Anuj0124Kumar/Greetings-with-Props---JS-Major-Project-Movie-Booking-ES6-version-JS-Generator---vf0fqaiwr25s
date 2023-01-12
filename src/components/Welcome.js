// write code for Welcome component here
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

