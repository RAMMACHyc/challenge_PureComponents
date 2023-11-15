import React from 'react'
import Panel from './Panel'
import {getImageUrl} from "../utils"
let currentPerson;
export default function Profile({person}) {
    currentPerson = person;
  return (
   <Panel>
    <Header />
    <Avatar />
   </Panel>
  )
}
function Header(){
    return <h1>{currentPerson.name}</h1>
}
function Avatar(){
    return(
        <img 
            className='avatar'
            src={getImageUrl(currentPerson)}
            alt={currentPerson.name}
            width={100}
            height={100}
        />
    )
}

