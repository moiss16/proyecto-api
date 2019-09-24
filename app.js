const characterName = document.getElementById('character-name');
const imgCharacter = document.getElementById('img-character');
const mainUrl = 'https://rickandmortyapi.com/api/';

let getMainUrl = async ()=>{
    const respose = await fetch(mainUrl);
    const rickMorty = await respose.json();
    //console.log(rickMorty);
    const {characters, locations, episodes} = rickMorty;
    let getCharacters = async ()=>{
        const response = await fetch(characters);
        const people = await response.json();
        console.log(people);
        
        people.results.forEach(element =>{
            
            characterName.innerHTML += `${element.name}<br>`;
            imgCharacter.src = element.image;
            
            
        });
        

        
        //characterName.innerText = people.results[0].name;
    }
    
    let getLocations = async ()=>{
        const response = await fetch(locations);
        const place = await response.json();
        console.log(place);
        
    }
    
    let getEpisodes = async ()=>{
        const response = await fetch(episodes);
        const chapter = await response.json();
        console.log(chapter);
    }

    getCharacters();
    getLocations();
    getEpisodes();
}
getMainUrl();

