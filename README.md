# Leaflet.Rain

WebGL rain animation for Leaflet maps. Extends L.Polygon.

## [Demo](https://ggolikov.github.io/Leaflet.Rain)

## Installation
works with leaflet@1.0.0 and higher
```
npm install leaflet
npm install leaflet-rain
```

```javascript
import L from 'leaflet';
import 'leaflet-rain';
```

## Usage

```javascript
let map = L.map(...);

let points = [[latlngs], [latlngs], ...],
    options = {
        angle: 80,
        width: 1,
        spacing: 10,
        length: 4,
        interval: 10,
        speed: 1,
        color: 'Oxa6b3e9'
    },
    rain = L.rain(points, options).addTo(map);
```

## API reference
### Factory
Factory|Description
-------|-----------
L.rain(`LatLng[]` _latlngs_, `options` _options?_)| Create rain animation inside (multi)polygon with given latlngs.
### Options
Option|Type|Default|Description
----|----|----|----
angle|`Number`|80| Rain angle (degrees)
width|`Number`|1| Drop width (px)
spacing|`Number`|10| X-spacing between drops (px)
length|`Number`|4| Drop length (px)
interval|`Number`|10| Y-spacing between drops (px)
speed|`Number`|1| Rain speed factor. Values greater 1 increase speed
color|`String`|`Oxa6b3e9`| Rain color hex value

### Methods
Method|Description
------|-------
setAngle(`Number`)|Sets rain angle (degrees).
setWidth(`Number`)|Sets drop width (px).
setSpacing(`Number`)|Sets x-spacing between drops (px).
setLength(`Number`)|Sets drop length (px).
setInterval(`Number`)|Sets y-spacing between drops (px).
setSpeed(`Number`)|Sets rain speed factor.
setColor(`hex string`)|Sets rain color.

## [License](https://opensource.org/licenses/MIT)
