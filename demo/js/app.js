import '../../src/L.Rain';
import { points } from './points';
import L from 'leaflet';

$('#colorpicker').colorpicker();

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    center = [48, 10],
    lmap = new L.Map('map', {layers: [osm], center, zoom: 5, maxZoom: 22, zoomAnimation: true}),

    root                  = document.querySelector('#content'),
    colorpickerController = document.querySelector('#colorpicker input'),
    angleController       = document.querySelector('.angle-controller'),
    widthController       = document.querySelector('.width-controller'),
    spacingController     = document.querySelector('.spacing-controller'),
    lengthController      = document.querySelector('.length-controller'),
    intervalController    = document.querySelector('.interval-controller'),
    speedController       = document.querySelector('.speed-controller'),

    options = {
        angle:      +angleController.value,          // deg
        width:      +widthController.value,          // px
        spacing:    +spacingController.value,      // px
        length:     +lengthController.value,        // px
        interval:   +intervalController.value,    // px
        speed:      +speedController.value,          // times
        color:      rgb2hex(colorpickerController.value)
    },
    rain = L.rain(points, options).addTo(lmap);
console.log(rain)
angleController.addEventListener('change', function (e) {
    var angle = Number(e.target.value);
    rain.setAngle(angle);
});

widthController.addEventListener('change', function (e) {
    var width = Number(e.target.value);
    rain.setWidth(width);
});

spacingController.addEventListener('change', function (e) {
    var spacing = Number(e.target.value);
    rain.setSpacing(spacing);
});

lengthController.addEventListener('change', function (e) {
    var length = Number(e.target.value);
    rain.setLength(length);
});

intervalController.addEventListener('change', function (e) {
    var interval = Number(e.target.value);
    rain.setInterval(interval);
});

speedController.addEventListener('change', function (e) {
    var speed = Number(e.target.value);
    rain.setSpeed(speed);
});

$('#colorpicker').on('colorpickerChange', e => {
    var color = e.color.toHexString();

    rain.setColor(color);
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}
