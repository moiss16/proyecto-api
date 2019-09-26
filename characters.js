const character = document.getElementById('character-container');
let getCharacters = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const people = await response.json();
    /*const response2 = await fetch(people.info.next);
    const people2 = await response2.json();
    const response3 = await fetch(people2.info.next);
    const people3 = await response3.json();
    const response4 = await fetch(people3.info.next);
    const people4 = await response4.json();*/
    console.log(people);
    let flag = 0;
    people.results.forEach(element => {
        const imgChar = element.image;
        const nameChar = element.name;
        const statusChar = element.status;
        const speciesChar = element.species;
        const genderChar = element.gender;
        flag++;
        character.innerHTML += `<a href="infoChar/char${flag}.html"><img src="${imgChar}" class="img-char"></a>`;
        
    });
        
        
        
       
        
        //character.innerHTML += `<p> Name: ${nameChar} </p> <p> Status: ${statusChar}</p> <p> Specie: ${speciesChar}</p> <p> Gender: ${genderChar}</p> </div>`
        
        
    /*people2.results.forEach(element =>{
        const imgChar = element.image;
        character.innerHTML += `<img src="${imgChar}" class="img-char">`
    });
    people3.results.forEach(element =>{
        const imgChar = element.image;
        character.innerHTML += `<img src="${imgChar}" class="img-char">`
    });
    people4.results.forEach(element =>{
        const imgChar = element.image;
        character.innerHTML += `<img src="${imgChar}" class="img-char">`
    });*/

}
getCharacters();