//const characterName = document.getElementById('character-name');
//const imgCharacter = document.getElementById('img-character');
const character = document.getElementById('character-container');
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
            const imgChar = element.image;
            character.innerHTML += `
                <div class="character">
                    <h1>${element.name}</h1>
                    <img src="${imgChar}" class="img-character">
                </div>
            `
        });
        
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

