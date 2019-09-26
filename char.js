let idChar = new Array(20);
let flag = 0; 
for(let i = 0; i < 20; i++){
    flag++;
    idChar[i] = flag;
}
flag = 0;
//const prueba = document.getElementById(idChar);
const charUrl = 'https://rickandmortyapi.com/api/character/';
let getcharacters = async() =>{
    
    const response = await fetch (`${charUrl}${idChar}`);
    const personaje = await response.json();
    
    console.log(personaje);
        
    
    
    /*personaje.results.forEach(element =>{

        let characterInfo = document.getElementById(`'${flag}'`);
        characterInfo.innerText = `Nombre: ${element.name}`;
        characterInfo.innerText = `Status: ${element.status}`;
    });*/
    

}
getcharacters();

