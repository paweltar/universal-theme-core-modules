import $ from "jquery";
import Leaflet from "leaflet/dist/leaflet.js";

$(document).ready(function() {
  this.customDefault = Leaflet.icon({
    iconUrl: "/images/leaflet/marker-icon.png",
    shadowUrl: "/images/leaflet/marker-shadow.png"
  });

  var mymap = Leaflet.map("map-container").setView([51.505, -0.09], 13);

  Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    detectRetina: true
  }).addTo(mymap);

  var marker = Leaflet.marker([51.505, -0.09], {
    icon: this.customDefault
  }).addTo(mymap);
});
