const locationInfo = document.getElementById('location');
let getLocaUrl = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const place = await response.json();
    let flag = 0;
    place.results.forEach(element =>{
        locationInfo.innerHTML += `
        <ul>
            <h1>${element.name}</h1>
            <li>Dimension: ${element.dimension}</li>
            <li>Type: ${element.type}<br></li>
        </ul>
        <div class="img-conta">
        <img src="imagenes/The_Smith_Residence.webp" class="img-loca">
        </div>
        `;


    })
    
    
}
getLocaUrl();