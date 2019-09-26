const character = document.getElementById('character-container');
let idChar = new Array(20);

let getCharacters = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const people = await response.json();
    const response2 = await fetch(people.info.next);
    const people2 = await response2.json();
    const response3 = await fetch(people2.info.next);
    const people3 = await response3.json();
    const response4 = await fetch(people3.info.next);
    const people4 = await response4.json();
    let flag = 0;
    
    people.results.forEach(element => {
        const imgChar = element.image;
        flag++;
        idChar [flag] = element.id;
        character.innerHTML += `
        <a href="infoChar/char${flag}.html">
        <img src="${imgChar}" class="img-char" id="${idChar}">
        </a>`;
    });
       
    people2.results.forEach(element =>{
        const imgChar = element.image;
        flag++;
        idChar [flag] = element.id;
        character.innerHTML += `
        <a href="infoChar/char${flag}.html">
        <img src="${imgChar}" class="img-char" id="${idChar}">
        </a>`;
    });
    people3.results.forEach(element =>{
        const imgChar = element.image;
        flag++;
        idChar [flag] = element.id;
        character.innerHTML += `
        <a href="infoChar/char${flag}.html">
        <img src="${imgChar}" class="img-char" id="${idChar}">
        </a>`;
    });
    people4.results.forEach(element =>{
        const imgChar = element.image;
        flag++;
        idChar [flag] = element.id;
        character.innerHTML += `
        <a href="infoChar/char${flag}.html">
        <img src="${imgChar}" class="img-char" id="${idChar}">
        </a>`;
    });

}
getCharacters();
