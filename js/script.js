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
            locationData.innerHTML = `${dataInput.location.region}, ${dataInput.location.city}`
            timeZone.innerHTML = dataInput.location.timezone
            isp.innerHTML = dataInput.isp
            const latitude = dataInput.location.lat
            const longitude = dataInput.location.lng

            let map = L.map('map').setView([longitude, latitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
            
            // console.log(dataInput)
        }
        
        }

    // xhttp.send();
    e.preventDefault()
    }



    function json(url) {
        return fetch(url).then(res => res.json());
      }
      
    //   let apiKey = 'at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9';
    //   json(`https://geo.ipify.org/api/v2/country,city?apiKey=at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9&ipAddress=129.56.74.238
    //   `).then(data => {

        ipAddress.innerHTML = data.ip
        locationData.innerHTML = `${data.location.city}, ${data.location.country}`
        timeZone.innerHTML = data.location.timezone
        isp.innerHTML = data.isp
        const latitude = data.location.lat
        const longitude = data.location.lng


        let map = L.map('map').setView([longitude, latitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        console.log(data.ip);
        console.log(data.location.city);
        console.log(data.location.country);
        console.log(data.location.timezone);
        console.log(data.isp);
        console.log(data.country_code);
        //so many more properties
      });





