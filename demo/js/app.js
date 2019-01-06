// debugger;
import { rain } from '../../src/L.Rain';
import { points } from './points';

var L = global.L || requires('leaflet');

$('#colorpicker').colorpicker();

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    center = [48, 10],
    lmap = new L.Map('map', {layers: [osm], center, zoom: 5, maxZoom: 22, zoomAnimation: true}),
    _points = reverseData(points),
    root = document.getElementById('content'),
    angleController = document.getElementsByClassName('angle-controller')[0],
    widthController = document.getElementsByClassName('width-controller')[0],
    spacingController = document.getElementsByClassName('spacing-controller')[0],
    lengthController = document.getElementsByClassName('length-controller')[0],
    intervalController = document.getElementsByClassName('interval-controller')[0],
    speedController = document.getElementsByClassName('speed-controller')[0],
    colorpickerController = document.querySelector('#colorpicker input'),
    options = {
        color: colorpickerController.value,
        angle: +angleController.value,          // deg
        width: +widthController.value,          // px
        spacing: +spacingController.value,      // px
        length: +lengthController.value,        // px
        interval: +intervalController.value,    // px
        speed: +speedController.value,          // times
    };

// var polygon = L.polygon(_points, {}).addTo(lmap);
// window.polygon = polygon;
window.lmap = lmap;
window.rain = rain(_points, options).addTo(lmap);

angleController.addEventListener('change', function (e) {
    var angle = Number(e.target.value);
    window.rain.setAngle(angle);
});

widthController.addEventListener('change', function (e) {
    var width = Number(e.target.value);
    window.rain.setWidth(width);
});

spacingController.addEventListener('change', function (e) {
    var spacing = Number(e.target.value);
    window.rain.setSpacing(spacing);
});

lengthController.addEventListener('change', function (e) {
    var length = Number(e.target.value);
    window.rain.setLength(length);
});

intervalController.addEventListener('change', function (e) {
    var interval = Number(e.target.value);
    window.rain.setInterval(interval);
});

speedController.addEventListener('change', function (e) {
    var speed = Number(e.target.value);
    window.rain.setSpeed(speed);
});

lmap.on('click', e => {
    let p = lmap.options.crs.project(e.latlng);
    console.log(p);
})

console.log(colorpickerController.value);
$('#colorpicker').on('colorpickerChange', e => {
    var color = e.color.toHexString();
    console.log(color);

    window.rain.setColor(color);
});

function reverseData(array) {
    return array.map(coords => {
        return coords.map(coord => coord.slice().reverse());
    });
}
