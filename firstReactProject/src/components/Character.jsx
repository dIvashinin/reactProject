import React from 'react'

function Character({character}) {
  return (
    <div>
        <p>{character.name}</p>
        <p>{character.gender}</p>
    </div>
  )
}
export default Character;