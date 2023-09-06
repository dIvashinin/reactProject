import React, { useEffect, useState } from 'react'
import Character from '../components/Character';

function Characters() {

    const [characters, setCharacters] = useState();
    const [error, setError] = useState(false);

    const fetchCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character").then((response)=>{
          return response.json()  
        }).then((data)=>{
            const chars = data.results;
            console.log('chars :>> ', chars);
            setCharacters(chars);
        }).catch((error)=>{
            console.log('error :>> ', error);
        });
    };

    useEffect(() => {
      fetchCharacters();
    
    }, []);
    

  return (
    <div>
        <h2>Rick & Morty</h2>
        {/* conditional rendering
        {characters && characters.map((character)=>{
          return <p key={character.id} >{character.name}</p>  
        })} */}

        {/* with ternary operator */}
        {characters ? (characters.map((character) =>{
            return <div key={character.id} >
                <Character character={character}/>
            </div>
        })
  ):(
    <h1>...loading</h1>
    )}
    </div>
  );
}

export default Characters