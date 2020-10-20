//create map
const map = L.map('mapid').setView([-8.1527208, -34.9178249], 15);

//create and add titleLyer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});
//create popup overlay
const popup = L.popup({
  closeButton: false,
  classname: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar de Maria <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>'
);

//create ans add marker
L.marker([-8.1527208, -34.9178249], { icon }).addTo(map).bindPopup(popup);
