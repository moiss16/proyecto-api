let flag = ; 

let getcharacters = async() =>{
    const response = await fetch ('https://rickandmortyapi.com/api/character/');
    const personaje = await response.json();
    console.log(personaje.results[2]); 

    const {image , name , status , species , gender } = personaje.results[0];
    console.log(name , status); 
    character.innerHTML += '<img src="${imgChar}" class="img-char"></a>`;



}
getcharacters();