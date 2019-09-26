const episodesInfo = document.getElementById('epi-container');
const episodesbox = document.getElementById('epi-cuadro');
let getEpisodes = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const chapter = await response.json();
    const response2 = await fetch('https://rickandmortyapi.com/api/episode?page=2')
    const chapter2 = await response2.json();
    numcap = 1;

    chapter.results.forEach(element => {
        
        episodesInfo.innerHTML += `<div class = "cuadrito" > <img src="imagenes/capitulos/${numcap}.jpg" class="fotos-capitulos" > 
        <div class = "texto" > <p>name: ${element.name}</p><p> Air date: ${element.air_date}</p><p>Episode: ${element.episode}</p><p>Created: ${element.created}</p><br></div></div>`;
        numcap ++ ;
    
    });
    chapter2.results.forEach(element => {
        
        episodesInfo.innerHTML += `<div class = "cuadrito" > <img src="imagenes/capitulos/${numcap}.jpg" class="fotos-capitulos" > 
        <div class = "texto" > <p>name: ${element.name}</p><p> Air date: ${element.air_date}</p><p>Episode: ${element.episode}</p><p>Created: ${element.created}</p><br></div></div>`;
        numcap ++ ;
    
    });
    
}
getEpisodes(); 
