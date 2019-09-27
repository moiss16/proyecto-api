const locationInfo = document.getElementById('location');
let getLocaUrl = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const place = await response.json();
    let flag = 1;
    place.results.forEach(element =>{
        locationInfo.innerHTML += `
        <div class="container">
            <img src="imagenes/${flag}.jpg" class="image">
            <div class= "overlay overlayleft"> 


            <p class="informacion">${element.name} </p>
            <p class="informacion2">Dimension: ${element.dimension}     Type: ${element.type}  </p>
            </div>
        </div>  `;

        flag ++; 
    
        

    })
    
    
}
getLocaUrl();