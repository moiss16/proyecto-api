
const mainUrl = 'https://rickandmortyapi.com/api/';

let getMainUrl = async ()=>{
    const respose = await fetch(mainUrl);
    const rickMorty = await respose.json();
    //console.log(rickMorty);
    
    
    
}
getMainUrl();