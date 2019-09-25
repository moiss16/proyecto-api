const locationInfo = document.getElementById('location');
let getLocaUrl = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const place = await response.json();
    place.results.forEach(element =>{
        
        locationInfo.innerHTML += `<h1>${element.name}</h1>`;
    })
    console.log(place);
    
}
getLocaUrl();