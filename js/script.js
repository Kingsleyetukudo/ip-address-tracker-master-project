

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("test").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }



  // how to call use the IP Address 

//   let ip = "8.8.8.8";    
//   let api_key = "at_GWKPWwKCvCVcKYj3AYZsOV9oUDEo9";    
//   (function () {       
//       $.ajax({url: "https://geo.ipify.org/apiv1",       data: {apiKey: api_key, ipAddress: ip},           success: function(data) {("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");  
//             }       
//     });    
//     console.log(data) 
// });





let map = L.map('map').setView([6.484742, 3.3529217], 50);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([9.0820, 8.6753]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();



