const charimg = document.getElementById('charimg'); 
const chartxt = document.getElementById('chartxt'); 

let getcharacters = async() =>{
    //const identificacion = document.getElementById('1');
    const response = await fetch ('https://rickandmortyapi.com/api/character/');
    const personaje = await response.json();
    //console.log(personaje.results[2]); 
    
    
    const {image , name , status , species , gender } = personaje.results[1];
    console.log(name , status, species, gender, image); 
    
    charimg.innerHTML += `<div class "foto-personaje"> <img src="${image}" class="image" height="400"> </div> ` ; 
    chartxt.innerHTML += `<div class "texto-personaje"> <p> Name: ${name} </p> <p> Status: ${status}</p> <p> Specie: ${species}</p> <p> Gender: ${gender}</p> </div> `;
    

}
getcharacters();