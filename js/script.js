const ipAddress = document.querySelector('.address-data')
const locationData = document.querySelector('.location-data')
const timeZone = document.querySelector('.time-zone-data')
const isp = document.querySelector('.isp-data')
document.getElementById('submit').addEventListener('submit', loadDoc)
const map = L.map('map').setView([0, 0], 13);

function loadDoc(e) {
    const use = document.querySelector('#col').value
    // console.log(use)
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
            
            
            const greenIcon = L.icon({
                iconUrl: '/images/icon-location.svg',
                iconSize:     [30, 50], // size of the icon
            });
           
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map)

        L.marker([latitude, longitude], {icon: greenIcon}).addTo(map)
            .bindPopup('welcome')
            .openPopup();
        }
        
}
        
    xhttp.send();
    document.querySelector('#col').value = ''
    e.preventDefault()
    }

    function json(url) {
        return fetch(url).then(res => res.json());
      }
      
      const apiKey = 'at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9';
      json(`https://geo.ipify.org/api/v2/country,city?apiKey=at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9&ipAddress`).then(data => {

        ipAddress.innerHTML = data.ip
        locationData.innerHTML = `${data.location.region}, ${data.location.country} ${data.as.asn}`
        timeZone.innerHTML = data.location.timezone
        isp.innerHTML = data.isp
        const latitude = data.location.lat
        const longitude = data.location.lng

      
 
        let greenIcon = L.icon({
            iconUrl: '/images/icon-location.svg',
            iconSize:     [30, 50], // size of the icon
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([latitude, longitude], {icon: greenIcon}).addTo(map)
            .bindPopup('welcome')
            .openPopup();
      });


    






