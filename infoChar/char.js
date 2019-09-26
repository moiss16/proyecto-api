const char = document.getElementById("char"); 
let getcharacters = async() =>{
    //const identificacion = document.getElementById('1');
    const response = await fetch ('https://rickandmortyapi.com/api/character/');
    const personaje = await response.json();
    //console.log(personaje.results[2]); 

    const {image , name , status , species , gender } = personaje.results[0];
    console.log(name , status, species, gender, image); 
    char.innerHTML += `<img src="${image}" class="image"></a>` ; 



}
getcharacters();