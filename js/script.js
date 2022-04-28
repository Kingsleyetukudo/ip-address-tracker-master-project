let ipAddress = document.querySelector('.address-data')
let locationData = document.querySelector('.location-data')
let timeZone = document.querySelector('.time-zone-data')
let isp = document.querySelector('.isp-data')
document.getElementById('submit').addEventListener('submit', loadDoc)

function loadDoc(e) {
    const use = document.querySelector('#col').value
    console.log(use)
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", `https://geo.ipify.org/api/v2/country,city?apiKey=at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9&ipAddress=${use}`, true);

    xhttp.onload = function() {
        if (this.status === 200) {
            const dataInput = JSON.parse(this.responseText) 
            ipAddress.innerHTML = dataInput.ip
            locationData.innerHTML = `${dataInput.location.region}, ${dataInput.location.city} ${dataInput.as.asn}`
            timeZone.innerHTML = dataInput.location.timezone
            isp.innerHTML = dataInput.isp
            const latitude = dataInput.location.lat
            const longitude = dataInput.location.lng
                console.log(dataInput)
            let map = L.map('map').setView([latitude,longitude], 13);
            
            let greenIcon = L.icon({
                iconUrl: '/images/icon-location.svg',
                iconSize:     [30, 50], // size of the icon
            });
           
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([longitude, latitude], {icon: greenIcon}).addTo(map)
            .bindPopup('welcome')
            .openPopup();
        }
        
}
        
    // xhttp.send();
    // document.querySelector('#col').value = ''
    e.preventDefault()
    }

    // function json(url) {
    //     return fetch(url).then(res => res.json());
    //   }
      
    //   let apiKey = 'at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9';
    //   json(`https://geo.ipify.org/api/v2/country,city?apiKey=at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9&ipAddress`).then(data => {

    //     ipAddress.innerHTML = data.ip
    //     locationData.innerHTML = `${data.location.region}, ${data.location.country} ${data.as.asn}`
    //     timeZone.innerHTML = data.location.timezone
    //     isp.innerHTML = data.isp
    //     const latitude = data.location.lat
    //     const longitude = data.location.lng

    //     let map = L.map('map').setView([longitude, latitude], 13);
 
    //     let greenIcon = L.icon({
    //         iconUrl: '/images/icon-location.svg',
    //         iconSize:     [30, 50], // size of the icon
    //     });
        
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
        
    //     L.marker([latitude, longitude], {icon: greenIcon}).addTo(map)
    //         .bindPopup('welcome')
    //         .openPopup();
    //   });


    






