
let ip = document.getElementById('ip');
let btn = document.getElementById('btn');
let address = document.getElementById('ip-address')
let ubication = document.getElementById('ubic');
let isp = document.getElementById('isp');
let time = document.getElementById('timeZone');
let info = [];
let route = document.getElementById('map');
let route1 = document.getElementById('mapid');

window.addEventListener('DOMContentLoaded',()=>{
    geoLocation(ip.value, 'map');
})

btn.addEventListener('click', ()=>{
      geoLocation(ip.value, 'mapid');
      route.style.display ='none';
      route1.style.display = 'block';

        });
   
function geoLocation(ip, nombre){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3lLCLZcsnpOvV5ZbX9QmiTLxXfUFp&ipAddress=${ip}&domain=${ip}`)
    .then(response=>response.json())
    .then(data =>{
          address.innerText = data.ip;
            ubication.innerText = data.location.city;
            time.innerText = data.location.timezone;
            isp.innerText = data.isp;
            mapa(data.location.lat, data.location.lng, nombre);
    });
    
}
console.log(info)
 function callBack(items){
        items.map(item=>{
            address.innerText = item.ip;
            ubication.innerText = item.location.city;
            time.innerText = item.location.timezone;
            isp.innerText = item.isp;
            });
    
  
}


function mapa(lat,long,nombre){
    var map = L.map(nombre).setView([lat, long],13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([lat, long])
marker.bindPopup('This is Your location').openPopup()
marker.addTo(map)
};


