const episodesInfo = document.getElementById('epi-container');
let getEpisodes = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const chapter = await response.json();
    chapter.results.forEach(element =>{
        episodesInfo.innerHTML += `<h1>${element.name}</h1>`;
    })
}
getEpisodes();