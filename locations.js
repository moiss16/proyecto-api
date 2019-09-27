const locationInfo = document.getElementById('location');
let getLocaUrl = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const place = await response.json();
    let flag = 0;
    place.results.forEach(element =>{
        locationInfo.innerHTML += `
        <div class="loca-conta">
            <p class="tittle-info">${element.name}</p>
            <p class="loca-info">Dimension: ${element.dimension}<br>
            Type: ${element.type}<br></p>
        </div>
        <div class="img-conta">
        <img src="" class="img-loca">
        </div>
        `;
    })
    
    
}
getLocaUrl();