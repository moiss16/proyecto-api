const character = document.getElementById('character-container');
let getCharacters = async ()=>{
    const response = await fetch();
    const people = await response.json('https://rickandmortyapi.com/api/character/');
    const response2 = await fetch(people.info.next);
    const people2 = await response2.json();
    const response3 = await fetch(people2.info.next);
    const people3 = await response3.json();
    const response4 = await fetch(people3.info.next);
    const people4 = await response4.json();
    //console.log(people);
    let flag = 0;
    people.results.forEach(element =>{
        const imgChar = element.image;
        character.innerHTML += `<img src="${imgChar}">`
        /*flag++;
        if (flag === 20){
            element.forEach().close();
        }*/
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