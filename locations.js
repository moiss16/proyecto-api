let getLocaUrl = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const place = await response.json();
    console.log(place);
    
}
getLocaUrl();