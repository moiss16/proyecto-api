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
        const response2 = await fetch(people.info.next);
        const people2 = await response2.json();
        const response3 = await fetch(people2.info.next);
        const people3 = await response3.json();
        const response4 = await fetch(people3.info.next);
        const people4 = await response4.json();
        //console.log(people);
        
        people.results.forEach(element =>{
            const imgChar = element.image;
            character.innerHTML += `<img src="${imgChar}">`
        });
        people2.results.forEach(element =>{
            const imgChar = element.image;
            character.innerHTML += `<img src="${imgChar}">`
        });
        people3.results.forEach(element =>{
            const imgChar = element.image;
            character.innerHTML += `<img src="${imgChar}">`
        });
        people4.results.forEach(element =>{
            const imgChar = element.image;
            character.innerHTML += `<img src="${imgChar}">`
        });
        
    }
    
    
    
    let getEpisodes = async ()=>{
        const response = await fetch(episodes);
        const chapter = await response.json();
        //console.log(chapter);
    }

    getCharacters();
    getEpisodes();
}
getMainUrl();