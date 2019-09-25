let getEpisodes = async ()=>{
    const response = await fetch(episodes);
    const chapter = await response.json();
    //console.log(chapter);
}