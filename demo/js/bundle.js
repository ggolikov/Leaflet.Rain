(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

var _L = require("../../src/L.Rain");

var _points2 = require("./points");

// debugger;
var L = global.L || requires('leaflet');
$('#colorpicker').colorpicker();

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}),
    center = [48, 10],
    lmap = new L.Map('map', {
  layers: [osm],
  center: center,
  zoom: 5,
  maxZoom: 22,
  zoomAnimation: true
}),
    _points = reverseData(_points2.points),
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
  angle: +angleController.value,
  // deg
  width: +widthController.value,
  // px
  spacing: +spacingController.value,
  // px
  length: +lengthController.value,
  // px
  interval: +intervalController.value,
  // px
  speed: +speedController.value // times

}; // var polygon = L.polygon(_points, {}).addTo(lmap);
// window.polygon = polygon;


window.lmap = lmap;
window.rain = (0, _L.rain)(_points, options).addTo(lmap);
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
lmap.on('click', function (e) {
  var p = lmap.options.crs.project(e.latlng);
  console.log(p);
});
console.log(colorpickerController.value);
$('#colorpicker').on('colorpickerChange', function (e) {
  var color = e.color.toHexString();
  console.log(color);
  window.rain.setColor(color);
});

function reverseData(array) {
  return array.map(function (coords) {
    return coords.map(function (coord) {
      return coord.slice().reverse();
    });
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../src/L.Rain":4,"./points":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.points = void 0;
// const points = [
//     [
//         [55.69421125604121, 37.54774667317003],
//         [55.66461829847256, 37.64467559673309],
//         [55.71969100435865, 37.74377967499773],
//         [55.75642250250910, 37.81378467668735],
//         [55.81585260019754, 37.79587453318040],
//         [55.86420631205231, 37.59550967918217],
//         [55.84966610228329, 37.45237697928278],
//         [55.76898042829575, 37.33897824574137],
//         [55.65990909622123, 37.46863803081038],
//         [55.69421125604121, 37.54774667317003]
//     ], [
//         [55.69421125604121, 38.54774667317003],
//         [55.66461829847256, 38.64467559673309],
//         [55.71969100435865, 38.74377967499773],
//         [55.75642250250910, 38.81378467668735],
//         [55.81585260019754, 38.79587453318040],
//         [55.86420631205231, 38.59550967918217],
//         [55.84966610228329, 38.45237697928278],
//         [55.76898042829575, 38.33897824574137],
//         [55.65990909622123, 38.46863803081038],
//         [55.69421125604121, 38.54774667317003]
//     ]
// ];
var points = [[[8.96484375, 55.30413773740139], [7.8662109375, 55.05320258537112], [8.349609375, 54.67383096593114], [8.6572265625, 54.44449176335762], [8.3056640625, 53.904338156274704], [7.55859375, 53.38332836757156], [7.55859375, 52.82932091031373], [7.822265625000001, 52.24125614966341], [8.4375, 51.754240074033525], [8.8330078125, 51.31688050404585], [9.140625, 50.84757295365389], [9.184570312499998, 49.15296965617042], [8.525390625, 48.574789910928864], [9.228515625, 48.019324184801185], [10.0634765625, 46.6795944656402], [10.634765625, 46.255846818480315], [11.865234375, 46.37725420510028], [12.919921874999998, 46.98025235521883], [13.359375, 47.60616304386874], [13.974609375, 48.45835188280866], [14.1064453125, 49.296471602658066], [14.1943359375, 49.97948776108648], [14.0625, 50.84757295365389], [13.886718749999998, 51.645294049305406], [12.83203125, 53.173119202640635], [12.12890625, 54.08517342088679], [11.4697265625, 54.77534585936447], [8.96484375, 55.30413773740139]], [[18.45703125, 48.980216985374994], [17.666015625, 49.26780455063753], [17.4462890625, 48.83579746243093], [17.4462890625, 48.42920055556841], [18.193359375, 47.754097979680026], [18.984375, 47.368594345213374], [19.775390625, 47.010225655683485], [20.8740234375, 46.76996843356982], [23.2470703125, 46.31658418182218], [23.9501953125, 46.437856895024204], [24.169921875, 46.800059446787316], [23.7744140625, 47.66538735632654], [23.115234374999996, 48.25394114463431], [22.3681640625, 48.574789910928864], [18.45703125, 48.980216985374994]], [[5.4931640625, 44.276671273775186], [4.4384765625, 43.739352079154706], [5.1416015625, 43.068887774169625], [5.4052734375, 42.48830197960227], [5.9765625, 41.50857729743935], [6.5478515625, 40.74725696280421], [7.8662109375, 40.48038142908172], [8.6572265625, 40.48038142908172], [9.580078125, 41.07935114946899], [10.3271484375, 42.65012181368022], [9.0966796875, 44.24519901522129], [8.2177734375, 44.62175409623324], [5.4931640625, 44.276671273775186]]];
exports.points = points;

},{}],3:[function(require,module,exports){
module.exports = function(strings) {
  if (typeof strings === 'string') strings = [strings]
  var exprs = [].slice.call(arguments,1)
  var parts = []
  for (var i = 0; i < strings.length-1; i++) {
    parts.push(strings[i], exprs[i] || '')
  }
  parts.push(strings[i])
  return parts.join('')
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rain = exports.Rain = void 0;

var _matrixUtils = _interopRequireDefault(require("./matrixUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var glsl = require('glslify');

var vertexShader = glsl(["#define GLSLIFY 1\nuniform mat4 u_matrix;\nattribute vec2 a_position;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n    gl_PointSize = 10.0;\n}\n"]);
var fragmentShader = glsl(["precision mediump float;\n#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_angle;\nuniform float u_width;\nuniform float u_spacing;\nuniform float u_length;\nuniform float u_interval;\nuniform float u_speed;\nuniform float u_time;\nuniform int u_color;\n\nfloat drawCoord(float coord, float fill, float gap) {\n    float patternLength = fill + gap;\n    float modulo = mod(coord, patternLength);\n    return step(modulo, patternLength - gap);\n}\n\nvoid main() {\n    float rainStripeWidth = 2.0;\n    float spacingInClipCoordinates = u_spacing/u_resolution.x;\n\n    float red = float(u_color / 256 / 256);\n    float green = float(u_color / 256 - int(red * 256.0));\n    float blue = float(u_color - int(red * 256.0 * 256.0) - int(green * 256.0));\n\n    mat2 rotationMatrix = mat2(\n        cos(u_angle), -sin(u_angle),\n        sin(u_angle), cos(u_angle)\n    );\n\n    vec2 rotatedfragCoord = rotationMatrix * gl_FragCoord.xy;\n    float pos = -1.0 / ( gl_FragCoord.y / u_resolution.y);\n    float yShift = u_time * u_speed;\n    float drawX = drawCoord(rotatedfragCoord.x, u_width, u_spacing);\n    float drawY = drawCoord(rotatedfragCoord.y + yShift, u_length, u_interval);\n\n    float draw = drawX * drawY;\n\n    if (draw < 0.9) {\n        discard;\n    }\n\n    gl_FragColor = vec4(red / 255.0, green / 255.0, blue / 255.0, 1.0);\n}\n"]);
/**
 * angle
 * width
 * spacing
 * length
 * interval
 * speed
 */

var Rain = L.Polygon.extend({
  options: {
    angle: 60,
    width: 2,
    spacing: 5,
    updateWhenZooming: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  },
  onAdd: function onAdd(map) {
    var canvas, gl;
    this._map = map;
    this._time = 0;

    if (!this._canvas) {
      canvas = this._canvas = this._initCanvas(map);
      gl = this._gl = this._initWebGl(canvas);
    }

    this._initShaders(gl);

    if (gl) {
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    if (this.options.pane) {
      this.getPane().appendChild(this._canvas);
    } else {
      map._panes.overlayPane.appendChild(this._canvas);
    }

    map.on('move', this._reset, this);
    map.on('resize', this._resize, this);

    if (map.options.zoomAnimation && L.Browser.any3d) {
      map.on('zoomanim', this._animateZoom, this);
    }

    this._reset();
  },
  onRemove: function onRemove(map) {
    if (this.options.pane) {
      this.getPane().removeChild(this._canvas);
    } else {
      map.getPanes().overlayPane.removeChild(this._canvas);
    }

    map.off('moveend', this._reset, this);

    if (map.options.zoomAnimation) {
      map.off('zoomanim', this._animateZoom, this);
    }
  },
  addTo: function addTo(map) {
    map.addLayer(this);
    return this;
  },
  drawScene: function drawScene() {
    var buf,
        polygonsCount,
        currentIndex = 0,
        count = 0;
    var gl = this._gl;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    polygonsCount = this._latlngs.length;

    for (var i = 0; i < polygonsCount; i++) {
      var polygonLanLngs = this._latlngs[i];
      count = polygonLanLngs.length;

      this._updateMatrix(gl);

      gl.drawArrays(gl.TRIANGLE_FAN, currentIndex, count);
      currentIndex += count;
    }
  },
  render: function render() {
    var gl = this._gl,
        time = L.Util.requestAnimFrame(this.render.bind(this)),
        timeLocation = gl.getUniformLocation(this.shaderProgram, "u_time"),
        deltaTime = time - this._time; // console.log(deltaTime);

    gl.uniform1f(timeLocation, deltaTime); // gl.uniform1f(timeLocation, time);

    this.drawScene(); // this._time = time;
  },
  setAngle: function setAngle(angle) {
    var gl = this._gl,
        angleLocation = gl.getUniformLocation(this.shaderProgram, "u_angle"),
        rad = angle * Math.PI / 180 - Math.PI / 2.0;
    this.options.angle = angle;
    gl.uniform1f(angleLocation, rad);

    this._redraw();
  },
  setWidth: function setWidth(width) {
    var gl = this._gl,
        widthLocation = gl.getUniformLocation(this.shaderProgram, "u_width");
    this.options.width = width;
    gl.uniform1f(widthLocation, width);

    this._redraw();
  },
  setSpacing: function setSpacing(spacing) {
    var gl = this._gl,
        spacingLocation = gl.getUniformLocation(this.shaderProgram, "u_spacing");
    this.options.spacing = spacing;
    gl.uniform1f(spacingLocation, spacing);

    this._redraw();
  },
  setLength: function setLength(length) {
    var gl = this._gl,
        lengthLocation = gl.getUniformLocation(this.shaderProgram, "u_length");
    this.options.length = length;
    gl.uniform1f(lengthLocation, length);

    this._redraw();
  },
  setInterval: function setInterval(interval) {
    var gl = this._gl,
        intervalLocation = gl.getUniformLocation(this.shaderProgram, "u_interval");
    this.options.interval = interval;
    gl.uniform1f(intervalLocation, interval);

    this._redraw();
  },
  setSpeed: function setSpeed(speed) {
    var gl = this._gl,
        speedLocation = gl.getUniformLocation(this.shaderProgram, "u_speed");
    this.options.speed = speed;
    gl.uniform1f(speedLocation, speed);

    this._redraw();
  },
  setColor: function setColor(color) {
    var gl = this._gl,
        colorLocation = gl.getUniformLocation(this.shaderProgram, "u_color");

    if (color[0] === '#') {
      color.replace('#', '0x');
      this.options.color = color;
      gl.uniform1i(colorLocation, color);

      this._redraw();
    }
  },
  _initCanvas: function _initCanvas() {
    var canvas = L.DomUtil.create('canvas', 'webgl-canvas leaflet-layer');
    var originProp = L.DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
    canvas.style[originProp] = '50% 50%';

    var size = this._map.getSize();

    canvas.width = size.x;
    canvas.height = size.y;
    canvas.style.position = 'absolute';
    var animated = this._map.options.zoomAnimation && L.Browser.any3d;
    L.DomUtil.addClass(canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));
    return canvas;
  },
  _initShaders: function _initShaders(gl) {
    var fragmentShader = this._getShader("vertex", this.options.vertexShader),
        vertexShader = this._getShader("fragment", this.options.fragmentShader),
        shaderProgram = this.shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Unable to initialize the shader program.");
    }

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(shaderProgram);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    var angleLocation = gl.getUniformLocation(this.shaderProgram, "u_angle"),
        spacingLocation = gl.getUniformLocation(this.shaderProgram, "u_spacing"),
        widthLocation = gl.getUniformLocation(this.shaderProgram, "u_width"),
        lengthLocation = gl.getUniformLocation(this.shaderProgram, "u_legnth"),
        lengthLocation = gl.getUniformLocation(this.shaderProgram, "u_length"),
        intervalLocation = gl.getUniformLocation(this.shaderProgram, "u_interval"),
        speedLocation = gl.getUniformLocation(this.shaderProgram, "u_speed"),
        colorLocation = gl.getUniformLocation(this.shaderProgram, "u_color"); // угол дождя

    gl.uniform1f(angleLocation, this.options.angle * Math.PI / 180 - Math.PI / 2.0);
    gl.uniform1f(widthLocation, this.options.width);
    gl.uniform1f(spacingLocation, this.options.spacing);
    gl.uniform1f(lengthLocation, this.options.length);
    gl.uniform1f(intervalLocation, this.options.interval);
    gl.uniform1i(speedLocation, this.options.speed);

    if (this.options.color[0] === '#') {
      this.options.color.replace('#', '0x');
    }

    gl.uniform1f(colorLocation, this.options.color);
    this.render();
  },
  _initWebGl: function _initWebGl(canvas) {
    var gl = null;

    try {
      gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) {}

    if (!gl) {
      console.warn("Unable to initialize WebGL. Your browser may not support it.");
      gl = null;
    }

    return gl;
  },
  // временная функция - шейдеры надо будет записать в скоупе
  _getShader: function _getShader(type, source) {
    var gl = this._gl,
        shader = gl.createShader(type == "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
    if (!type) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  },
  _updateMatrix: function _updateMatrix(gl) {
    var matrixLocation = gl.getUniformLocation(this.shaderProgram, "u_matrix"),
        crs = this._map.options.crs,
        center = this._map.getCenter(),
        outsideBounds = Math.abs(center.lat) > crs.projection.MAX_LATITUDE,
        projectFunc = outsideBounds ? this._project.bind(this) : crs.project.bind(crs),
        zoom = this._map.getZoom(),
        CRSCenter = projectFunc(center),
        x = CRSCenter.x,
        y = CRSCenter.y,
        pxSize = crs.transformation.untransform(L.point([1, 1]), 1),
        mapSize = this._map.getSize(),
        CRSUnitsPerPx = mapSize.divideBy(crs.scale(zoom)),
        half = pxSize.scaleBy(CRSUnitsPerPx),
        transformMatrix = _matrixUtils.default.identityMatrix(),
        translationMatrix = _matrixUtils.default.translationMatrix([-x, -y, 0]),
        scaleMatrix = _matrixUtils.default.scaleMatrix([1 / half.x, -1 / half.y, 1]);

    transformMatrix = _matrixUtils.default.matrixMultiply(transformMatrix, translationMatrix);
    transformMatrix = _matrixUtils.default.matrixMultiply(transformMatrix, scaleMatrix);
    gl.uniformMatrix4fv(matrixLocation, false, transformMatrix);
  },
  _project: function _project(latlng) {
    var R = this._map.options.crs.projection.R,
        d = Math.PI / 180,
        sin = Math.sin(latlng.lat * d);
    return L.point(R * latlng.lng * d, R * Math.log((1 + sin) / (1 - sin)) / 2);
  },
  _reset: function _reset() {
    var topLeft = this._map.containerPointToLayerPoint([0, 0]);

    L.DomUtil.setPosition(this._canvas, topLeft);

    this._redraw();
  },
  _resize: function _resize(e) {
    var size = e.newSize;
    this._canvas.width = size.x;
    this._canvas.height = size.y;

    this._reset();
  },
  _redraw: function _redraw() {
    var gl = this._gl,
        positionLocation = gl.getAttribLocation(this.shaderProgram, "a_position"),
        projectLatLng = this._projectLatLng.bind(this),
        bufArray = [].concat.apply([], this._latlngs).map(function (ll) {
      return projectLatLng(ll);
    }).reduce(function (previousValue, currentValue) {
      return previousValue.concat(currentValue);
    }, []),
        bytesPerVertex = 8,
        buf = gl.createBuffer();

    var resolutionLocation = gl.getUniformLocation(this.shaderProgram, "u_resolution");
    gl.uniform2fv(resolutionLocation, [this._canvas.width, this._canvas.height]);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufArray), gl.STATIC_DRAW);

    this._bindAttrib(positionLocation, 2, gl.FLOAT, false, bytesPerVertex, 0); // this.render();

  },
  // Small utility function
  _bindAttrib: function _bindAttrib(attribIndex, size, type, normalized, stride, offset) {
    if (attribIndex === -1) return;

    this._gl.enableVertexAttribArray(attribIndex);

    this._gl.vertexAttribPointer(attribIndex, size, type, normalized, stride, offset);
  },
  _projectLatLng: function _projectLatLng(latLng) {
    var crsPoint = this._map.options.crs.project(latLng);

    return [crsPoint.x, crsPoint.y];
  },
  _animateZoom: function _animateZoom(e) {
    var scale = this._map.getZoomScale(e.zoom),
        offset = this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

    if (L.DomUtil.setTransform) {
      L.DomUtil.setTransform(this._canvas, offset, scale);
    } else {
      this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ')';
    }
  }
});
exports.Rain = Rain;

var rain = function rain(latlngs, options) {
  return new L.Rain(latlngs, options);
};

exports.rain = rain;
L.Rain = Rain;
L.rain = rain;

},{"./matrixUtils":5,"glslify":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var matrixUtils = {
  matrixMultiply: function matrixMultiply(a, b) {
    var a00 = a[0 * 4 + 0];
    var a01 = a[0 * 4 + 1];
    var a02 = a[0 * 4 + 2];
    var a03 = a[0 * 4 + 3];
    var a10 = a[1 * 4 + 0];
    var a11 = a[1 * 4 + 1];
    var a12 = a[1 * 4 + 2];
    var a13 = a[1 * 4 + 3];
    var a20 = a[2 * 4 + 0];
    var a21 = a[2 * 4 + 1];
    var a22 = a[2 * 4 + 2];
    var a23 = a[2 * 4 + 3];
    var a30 = a[3 * 4 + 0];
    var a31 = a[3 * 4 + 1];
    var a32 = a[3 * 4 + 2];
    var a33 = a[3 * 4 + 3];
    var b00 = b[0 * 4 + 0];
    var b01 = b[0 * 4 + 1];
    var b02 = b[0 * 4 + 2];
    var b03 = b[0 * 4 + 3];
    var b10 = b[1 * 4 + 0];
    var b11 = b[1 * 4 + 1];
    var b12 = b[1 * 4 + 2];
    var b13 = b[1 * 4 + 3];
    var b20 = b[2 * 4 + 0];
    var b21 = b[2 * 4 + 1];
    var b22 = b[2 * 4 + 2];
    var b23 = b[2 * 4 + 3];
    var b30 = b[3 * 4 + 0];
    var b31 = b[3 * 4 + 1];
    var b32 = b[3 * 4 + 2];
    var b33 = b[3 * 4 + 3];
    return [a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30, a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31, a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32, a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33, a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30, a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31, a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32, a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33, a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30, a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31, a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32, a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33, a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30, a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31, a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32, a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33];
  },
  // Returns an identity matrix
  identityMatrix: function identityMatrix() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  },
  // Returns a translation matrix
  // Offset is a 3-element array
  translationMatrix: function translationMatrix(t) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t[0], t[1], t[2], 1];
  },
  // Returns a scale matrix
  // Scale is a 3-element array
  scaleMatrix: function scaleMatrix(s) {
    return [s[0], 0, 0, 0, 0, s[1], 0, 0, 0, 0, s[2], 0, 0, 0, 0, 1];
  }
};
var _default = matrixUtils;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL2pzL2FwcC5qcyIsImRlbW8vanMvcG9pbnRzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYnJvd3Nlci5qcyIsInNyYy9MLlJhaW4uanMiLCJzcmMvbWF0cml4VXRpbHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQTs7QUFDQTs7QUFGQTtBQUlBLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFQLElBQVksUUFBUSxDQUFDLFNBQUQsQ0FBNUI7QUFFQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFdBQWxCOztBQUVBLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFGLENBQVksaUVBQVosRUFBK0U7QUFDakYsRUFBQSxPQUFPLEVBQUUsRUFEd0U7QUFFakYsRUFBQSxXQUFXLEVBQUU7QUFGb0UsQ0FBL0UsQ0FBVjtBQUFBLElBSUksTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FKYjtBQUFBLElBS0ksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQU4sQ0FBVSxLQUFWLEVBQWlCO0FBQUMsRUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFELENBQVQ7QUFBZ0IsRUFBQSxNQUFNLEVBQU4sTUFBaEI7QUFBd0IsRUFBQSxJQUFJLEVBQUUsQ0FBOUI7QUFBaUMsRUFBQSxPQUFPLEVBQUUsRUFBMUM7QUFBOEMsRUFBQSxhQUFhLEVBQUU7QUFBN0QsQ0FBakIsQ0FMWDtBQUFBLElBTUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxlQUFELENBTnpCO0FBQUEsSUFPSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FQWDtBQUFBLElBUUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxrQkFBaEMsRUFBb0QsQ0FBcEQsQ0FSdEI7QUFBQSxJQVNJLGVBQWUsR0FBRyxRQUFRLENBQUMsc0JBQVQsQ0FBZ0Ms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Q0FBUDtBQUNILENBRkQ7OztBQUlBLENBQUMsQ0FBQyxJQUFGLEdBQVMsSUFBVDtBQUNBLENBQUMsQ0FBQyxJQUFGLEdBQVMsSUFBVDs7Ozs7Ozs7O0FDOVhBLElBQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxFQUFFLHdCQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQzVCLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUws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LEVBQ1MsQ0FEVCxFQUNhLENBRGIsRUFFSCxDQUZHLEVBRUcsQ0FGSCxFQUVTLENBRlQsRUFFYSxDQUZiLEVBR0gsQ0FIRyxFQUdHLENBSEgsRUFHUyxDQUhULEVBR2EsQ0FIYixFQUlILENBQUMsQ0FBQyxDQUFELENBSkUsRUFJRyxDQUFDLENBQUMsQ0FBRCxDQUpKLEVBSVMsQ0FBQyxDQUFDLENBQUQsQ0FKVixFQUlnQixDQUpoQixDQUFQO0FBTUgsR0F6RVc7QUEyRVo7QUFDQTtBQUNBLEVBQUEsV0FBVyxFQUFFLHFCQUFVLENBQVYsRUFBYTtBQUV0QixXQUFPLENBQ0gsQ0FBQyxDQUFDLENBQUQsQ0FERSxFQUNNLENBRE4sRUFDWSxDQURaLEVBQ2dCLENBRGhCLEVBRUgsQ0FGRyxFQUVBLENBQUMsQ0FBQyxDQUFELENBRkQsRUFFUyxDQUZULEVBRWEsQ0FGYixFQUdILENBSEcsRUFHRyxDQUhILEVBR00sQ0FBQyxDQUFDLENBQUQsQ0FIUCxFQUdhLENBSGIsRUFJSCxDQUpHLEVBSUcsQ0FKSCxFQUlTLENBSlQsRUFJYSxDQUpiLENBQVA7QUFNSDtBQXJGVyxDQUFwQjtlQXdGZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gZGVidWdnZXI7XG5pbXBvcnQgeyByYWluIH0gZnJvbSAnLi4vLi4vc3JjL0wuUmFpbic7XG5pbXBvcnQgeyBwb2ludHMgfSBmcm9tICcuL3BvaW50cyc7XG5cbnZhciBMID0gZ2xvYmFsLkwgfHwgcmVxdWlyZXMoJ2xlYWZsZXQnKTtcblxuJCgnI2NvbG9ycGlja2VyJykuY29sb3JwaWNrZXIoKTtcblxudmFyIG9zbSA9IEwudGlsZUxheWVyKCdodHRwOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS9saWdodF9ub2xhYmVscy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIG1heFpvb206IDE4LFxuICAgICAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPidcbiAgICB9KSxcbiAgICBjZW50ZXIgPSBbNDgsIDEwXSxcbiAgICBsbWFwID0gbmV3IEwuTWFwKCdtYXAnLCB7bGF5ZXJzOiBbb3NtXSwgY2VudGVyLCB6b29tOiA1LCBtYXhab29tOiAyMiwgem9vbUFuaW1hdGlvbjogdHJ1ZX0pLFxuICAgIF9wb2ludHMgPSByZXZlcnNlRGF0YShwb2ludHMpLFxuICAgIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxuICAgIGFuZ2xlQ29udHJvbGxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuZ2xlLWNvbnRyb2xsZXInKVswXSxcbiAgICB3aWR0aENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aWR0aC1jb250cm9sbGVyJylbMF0sXG4gICAgc3BhY2luZ0NvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcGFjaW5nLWNvbnRyb2xsZXInKVswXSxcbiAgICBsZW5ndGhDb250cm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVuZ3RoLWNvbnRyb2xsZXInKVswXSxcbiAgICBpbnRlcnZhbENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnRlcnZhbC1jb250cm9sbGVyJylbMF0sXG4gICAgc3BlZWRDb250cm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3BlZWQtY29udHJvbGxlcicpWzBdLFxuICAgIGNvbG9ycGlja2VyQ29udHJvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcnBpY2tlciBpbnB1dCcpLFxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnBpY2tlckNvbnRyb2xsZXIudmFsdWUsXG4gICAgICAgIGFuZ2xlOiArYW5nbGVDb250cm9sbGVyLnZhbHVlLCAgICAgICAgICAvLyBkZWdcbiAgICAgICAgd2lkdGg6ICt3aWR0aENvbnRyb2xsZXIudmFsdWUsICAgICAgICAgIC8vIHB4XG4gICAgICAgIHNwYWNpbmc6ICtzcGFjaW5nQ29udHJvbGxlci52YWx1ZSwgICAgICAvLyBweFxuICAgICAgICBsZW5ndGg6ICtsZW5ndGhDb250cm9sbGVyLnZhbHVlLCAgICAgICAgLy8gcHhcbiAgICAgICAgaW50ZXJ2YWw6ICtpbnRlcnZhbENvbnRyb2xsZXIudmFsdWUsICAgIC8vIHB4XG4gICAgICAgIHNwZWVkOiArc3BlZWRDb250cm9sbGVyLnZhbHVlLCAgICAgICAgICAvLyB0aW1lc1xuICAgIH07XG5cbi8vIHZhciBwb2x5Z29uID0gTC5wb2x5Z29uKF9wb2ludHMsIHt9KS5hZGRUbyhsbWFwKTtcbi8vIHdpbmRvdy5wb2x5Z29uID0gcG9seWdvbjtcbndpbmRvdy5sbWFwID0gbG1hcDtcbndpbmRvdy5yYWluID0gcmFpbihfcG9pbnRzLCBvcHRpb25zKS5hZGRUbyhsbWFwKTtcblxuYW5nbGVDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGFuZ2xlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRBbmdsZShhbmdsZSk7XG59KTtcblxud2lkdGhDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHdpZHRoID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRXaWR0aCh3aWR0aCk7XG59KTtcblxuc3BhY2luZ0NvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc3BhY2luZyA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgd2luZG93LnJhaW4uc2V0U3BhY2luZyhzcGFjaW5nKTtcbn0pO1xuXG5sZW5ndGhDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGxlbmd0aCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgd2luZG93LnJhaW4uc2V0TGVuZ3RoKGxlbmd0aCk7XG59KTtcblxuaW50ZXJ2YWxDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGludGVydmFsID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG59KTtcblxuc3BlZWRDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNwZWVkID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRTcGVlZChzcGVlZCk7XG59KTtcblxubG1hcC5vbignY2xpY2snLCBlID0+IHtcbiAgICBsZXQgcCA9IGxtYXAub3B0aW9ucy5jcnMucHJvamVjdChlLmxhdGxuZyk7XG4gICAgY29uc29sZS5sb2cocCk7XG59KVxuXG5jb25zb2xlLmxvZyhjb2xvcnBpY2tlckNvbnRyb2xsZXIudmFsdWUpO1xuJCgnI2NvbG9ycGlja2VyJykub24oJ2NvbG9ycGlja2VyQ2hhbmdlJywgZSA9PiB7XG4gICAgdmFyIGNvbG9yID0gZS5jb2xvci50b0hleFN0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcblxuICAgIHdpbmRvdy5yYWluLnNldENvbG9yKGNvbG9yKTtcbn0pO1xuXG5mdW5jdGlvbiByZXZlcnNlRGF0YShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5tYXAoY29vcmRzID0+IHtcbiAgICAgICAgcmV0dXJuIGNvb3Jkcy5tYXAoY29vcmQgPT4gY29vcmQuc2xpY2UoKS5yZXZlcnNlKCkpO1xuICAgIH0pO1xufVxuIiwiLy8gY29uc3QgcG9pbnRzID0gW1xuLy8gICAgIFtcbi8vICAgICAgICAgWzU1LjY5NDIxMTI1NjA0MTIxLCAzNy41NDc3NDY2NzMxNzAwM10sXG4vLyAgICAgICAgIFs1NS42NjQ2MTgyOTg0NzI1NiwgMzcuNjQ0Njc1NTk2NzMzMDldLFxuLy8gICAgICAgICBbNTUuNzE5NjkxMDA0MzU4NjUsIDM3Ljc0Mzc3OTY3NDk5NzczXSxcbi8vICAgICAgICAgWzU1Ljc1NjQyMjUwMjUwOTEwLCAzNy44MTM3ODQ2NzY2ODczNV0sXG4vLyAgICAgICAgIFs1NS44MTU4NTI2MDAxOTc1NCwgMzcuNzk1ODc0NTMzMTgwNDBdLFxuLy8gICAgICAgICBbNTUuODY0MjA2MzEyMDUyMzEsIDM3LjU5NTUwOTY3OTE4MjE3XSxcbi8vICAgICAgICAgWzU1Ljg0OTY2NjEwMjI4MzI5LCAzNy40NTIzNzY5NzkyODI3OF0sXG4vLyAgICAgICAgIFs1NS43Njg5ODA0MjgyOTU3NSwgMzcuMzM4OTc4MjQ1NzQxMzddLFxuLy8gICAgICAgICBbNTUuNjU5OTA5MDk2MjIxMjMsIDM3LjQ2ODYzODAzMDgxMDM4XSxcbi8vICAgICAgICAgWzU1LjY5NDIxMTI1NjA0MTIxLCAzNy41NDc3NDY2NzMxNzAwM11cbi8vICAgICBdLCBbXG4vLyAgICAgICAgIFs1NS42OTQyMTEyNTYwNDEyMSwgMzguNTQ3NzQ2NjczMTcwMDNdLFxuLy8gICAgICAgICBbNTUuNjY0NjE4Mjk4NDcyNTYsIDM4LjY0NDY3NTU5NjczMzA5XSxcbi8vICAgICAgICAgWzU1LjcxOTY5MTAwNDM1ODY1LCAzOC43NDM3Nzk2NzQ5OTc3M10sXG4vLyAgICAgICAgIFs1NS43NTY0MjI1MDI1MDkxMCwgMzguODEzNzg0Njc2Njg3MzVdLFxuLy8gICAgICAgICBbNTUuODE1ODUyNjAwMTk3NTQsIDM4Ljc5NTg3NDUzMzE4MDQwXSxcbi8vICAgICAgICAgWzU1Ljg2NDIwNjMxMjA1MjMxLCAzOC41OTU1MDk2NzkxODIxN10sXG4vLyAgICAgICAgIFs1NS44NDk2NjYxMDIyODMyOSwgMzguNDUyMzc2OTc5MjgyNzhdLFxuLy8gICAgICAgICBbNTUuNzY4OTgwNDI4Mjk1NzUsIDM4LjMzODk3ODI0NTc0MTM3XSxcbi8vICAgICAgICAgWzU1LjY1OTkwOTA5NjIyMTIzLCAzOC40Njg2MzgwMzA4MTAzOF0sXG4vLyAgICAgICAgIFs1NS42OTQyMTEyNTYwNDEyMSwgMzguNTQ3NzQ2NjczMTcwMDNdXG4vLyAgICAgXVxuLy8gXTtcblxuY29uc3QgcG9pbnRzID0gW1xuICAgIFtcbiAgICAgICAgWzguOTY0ODQzNzUsIDU1LjMwNDEzNzczNzQwMTM5XSxcbiAgICAgICAgWzcuODY2MjEwOTM3NSwgNTUuMDUzMjAyNTg1MzcxMTJdLFxuICAgICAgICBbOC4zNDk2MDkzNzUsIDU0LjY3MzgzMDk2NTkzMTE0XSxcbiAgICAgICAgWzguNjU3MjI2NTYyNSwgNTQuNDQ0NDkxNzYzMzU3NjJdLFxuICAgICAgICBbOC4zMDU2NjQwNjI1LCA1My45MDQzMzgxNTYyNzQ3MDRdLFxuICAgICAgICBbNy41NTg1OTM3NSwgNTMuMzgzMzI4MzY3NTcxNTZdLFxuICAgICAgICBbNy41NTg1OTM3NSwgNTIuODI5MzIwOTEwMzEzNzNdLFxuICAgICAgICBbNy44MjIyNjU2MjUwMDAwMDEsIDUyLjI0MTI1NjE0OTY2MzQxXSxcbiAgICAgICAgWzguNDM3NSwgNTEuNzU0MjQwMDc0MDMzNTI1XSxcbiAgICAgICAgWzguODMzMDA3ODEyNSwgNTEuMzE2ODgwNTA0MDQ1ODVdLFxuICAgICAgICBbOS4xNDA2MjUsIDUwLjg0NzU3Mjk1MzY1Mzg5XSxcbiAgICAgICAgWzkuMTg0NTcwMzEyNDk5OTk4LCA0OS4xNTI5Njk2NTYxNzA0Ml0sXG4gICAgICAgIFs4LjUyNTM5MDYyNSwgNDguNTc0Nzg5OTEwOTI4ODY0XSxcbiAgICAgICAgWzkuMjI4NTE1NjI1LCA0OC4wMTkzMjQxODQ4MDExODVdLFxuICAgICAgICBbMTAuMDYzNDc2NTYyNSwgNDYuNjc5NTk0NDY1NjQwMl0sXG4gICAgICAgIFsxMC42MzQ3NjU2MjUsIDQ2LjI1NTg0NjgxODQ4MDMxNV0sXG4gICAgICAgIFsxMS44NjUyMzQzNzUsIDQ2LjM3NzI1NDIwNTEwMDI4XSxcbiAgICAgICAgWzEyLjkxOTkyMTg3NDk5OTk5OCwgNDYuOTgwMjUyMzU1MjE4ODNdLFxuICAgICAgICBbMTMuMzU5Mzc1LCA0Ny42MDYxNjMwNDM4Njg3NF0sXG4gICAgICAgIFsxMy45NzQ2MDkzNzUsIDQ4LjQ1ODM1MTg4MjgwODY2XSxcbiAgICAgICAgWzE0LjEwNjQ0NTMxMjUsIDQ5LjI5NjQ3MTYwMjY1ODA2Nl0sXG4gICAgICAgIFsxNC4xOTQzMzU5Mzc1LCA0OS45Nzk0ODc3NjEwODY0OF0sXG4gICAgICAgIFsxNC4wNjI1LCA1MC44NDc1NzI5NTM2NTM4OV0sXG4gICAgICAgIFsxMy44ODY3MTg3NDk5OTk5OTgsIDUxLjY0NTI5NDA0OTMwNTQwNl0sXG4gICAgICAgIFsxMi44MzIwMzEyNSwgNTMuMTczMTE5MjAyNjQwNjM1XSxcbiAgICAgICAgWzEyLjEyODkwNjI1LCA1NC4wODUxNzM0MjA4ODY3OV0sXG4gICAgICAgIFsxMS40Njk3MjY1NjI1LCA1NC43NzUzNDU4NTkzNjQ0N10sXG4gICAgICAgIFs4Ljk2NDg0Mzc1LCA1NS4zMDQxMzc3Mzc0MDEzOV1cbiAgICBdLFxuICAgIFtcbiAgICAgICAgWzE4LjQ1NzAzMTI1LCA0OC45ODAyMTY5ODUzNzQ5OTRdLFxuICAgICAgICBbMTcuNjY2MDE1NjI1LCA0OS4yNjc4MDQ1NTA2Mzc1M10sXG4gICAgICAgIFsxNy40NDYyODkwNjI1LCA0OC44MzU3OTc0NjI0MzA5M10sXG4gICAgICAgIFsxNy40NDYyODkwNjI1LCA0OC40MjkyMDA1NTU1Njg0MV0sXG4gICAgICAgIFsxOC4xOTMzNTkzNzUsIDQ3Ljc1NDA5Nzk3OTY4MDAyNl0sXG4gICAgICAgIFsxOC45ODQzNzUsIDQ3LjM2ODU5NDM0NTIxMzM3NF0sXG4gICAgICAgIFsxOS43NzUzOTA2MjUsIDQ3LjAxMDIyNTY1NTY4MzQ4NV0sXG4gICAgICAgIFsyMC44NzQwMjM0Mzc1LCA0Ni43Njk5Njg0MzM1Njk4Ml0sXG4gICAgICAgIFsyMy4yNDcwNzAzMTI1LCA0Ni4zMTY1ODQxODE4MjIxOF0sXG4gICAgICAgIFsyMy45NTAxOTUzMTI1LCA0Ni40Mzc4NTY4OTUwMjQyMDRdLFxuICAgICAgICBbMjQuMTY5OTIxODc1LCA0Ni44MDAwNTk0NDY3ODczMTZdLFxuICAgICAgICBbMjMuNzc0NDE0MDYyNSwgNDcuNjY1Mzg3MzU2MzI2NTRdLFxuICAgICAgICBbMjMuMTE1MjM0Mzc0OTk5OTk2LCA0OC4yNTM5NDExNDQ2MzQzMV0sXG4gICAgICAgIFsyMi4zNjgxNjQwNjI1LCA0OC41NzQ3ODk5MTA5Mjg4NjRdLFxuICAgICAgICBbMTguNDU3MDMxMjUsIDQ4Ljk4MDIxNjk4NTM3NDk5NF1cbiAgICBdLFxuICAgIFtcbiAgICAgICAgWzUuNDkzMTY0MDYyNSwgNDQuMjc2NjcxMjczNzc1MTg2XSxcbiAgICAgICAgWzQuNDM4NDc2NTYyNSwgNDMuNzM5MzUyMDc5MTU0NzA2XSxcbiAgICAgICAgWzUuMTQxNjAxNTYyNSwgNDMuMDY4ODg3Nzc0MTY5NjI1XSxcbiAgICAgICAgWzUuNDA1MjczNDM3NSwgNDIuNDg4MzAxOTc5NjAyMjddLFxuICAgICAgICBbNS45NzY1NjI1LCA0MS41MDg1NzcyOTc0MzkzNV0sXG4gICAgICAgIFs2LjU0Nzg1MTU2MjUsIDQwLjc0NzI1Njk2MjgwNDIxXSxcbiAgICAgICAgWzcuODY2MjEwOTM3NSwgNDAuNDgwMzgxNDI5MDgxNzJdLFxuICAgICAgICBbOC42NTcyMjY1NjI1LCA0MC40ODAzODE0MjkwODE3Ml0sXG4gICAgICAgIFs5LjU4MDA3ODEyNSwgNDEuMDc5MzUxMTQ5NDY4OTldLFxuICAgICAgICBbMTAuMzI3MTQ4NDM3NSwgNDIuNjUwMTIxODEzNjgwMjJdLFxuICAgICAgICBbOS4wOTY2Nzk2ODc1LCA0NC4yNDUxOTkwMTUyMjEyOV0sXG4gICAgICAgIFs4LjIxNzc3MzQzNzUsIDQ0LjYyMTc1NDA5NjIzMzI0XSxcbiAgICAgICAgWzUuNDkzMTY0MDYyNSwgNDQuMjc2NjcxMjczNzc1MTg2XVxuICAgIF1cbl07XG5cbmV4cG9ydCB7IHBvaW50cyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmdzKSB7XHJcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnc3RyaW5nJykgc3RyaW5ncyA9IFtzdHJpbmdzXVxyXG4gIHZhciBleHBycyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpXHJcbiAgdmFyIHBhcnRzID0gW11cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoLTE7IGkrKykge1xyXG4gICAgcGFydHMucHVzaChzdHJpbmdzW2ldLCBleHByc1tpXSB8fCAnJylcclxuICB9XHJcbiAgcGFydHMucHVzaChzdHJpbmdzW2ldKVxyXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxyXG59XHJcbiIsImltcG9ydCBtYXRyaXhVdGlscyBmcm9tICcuL21hdHJpeFV0aWxzJztcbnZhciBnbHNsID0gcmVxdWlyZSgnZ2xzbGlmeScpO1xudmFyIHZlcnRleFNoYWRlciA9IGdsc2woW1wiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIG1hdDQgdV9tYXRyaXg7XFxuYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiB2ZWM0KGFfcG9zaXRpb24sIDAuMCwgMS4wKTtcXG4gICAgZ2xfUG9pbnRTaXplID0gMTAuMDtcXG59XFxuXCJdKTtcbnZhciBmcmFnbWVudFNoYWRlciA9IGdsc2woW1wicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdV9hbmdsZTtcXG51bmlmb3JtIGZsb2F0IHVfd2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1X3NwYWNpbmc7XFxudW5pZm9ybSBmbG9hdCB1X2xlbmd0aDtcXG51bmlmb3JtIGZsb2F0IHVfaW50ZXJ2YWw7XFxudW5pZm9ybSBmbG9hdCB1X3NwZWVkO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcbnVuaWZvcm0gaW50IHVfY29sb3I7XFxuXFxuZmxvYXQgZHJhd0Nvb3JkKGZsb2F0IGNvb3JkLCBmbG9hdCBmaWxsLCBmbG9hdCBnYXApIHtcXG4gICAgZmxvYXQgcGF0dGVybkxlbmd0aCA9IGZpbGwgKyBnYXA7XFxuICAgIGZsb2F0IG1vZHVsbyA9IG1vZChjb29yZCwgcGF0dGVybkxlbmd0aCk7XFxuICAgIHJldHVybiBzdGVwKG1vZHVsbywgcGF0dGVybkxlbmd0aCAtIGdhcCk7XFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZmxvYXQgcmFpblN0cmlwZVdpZHRoID0gMi4wO1xcbiAgICBmbG9hdCBzcGFjaW5nSW5DbGlwQ29vcmRpbmF0ZXMgPSB1X3NwYWNpbmcvdV9yZXNvbHV0aW9uLng7XFxuXFxuICAgIGZsb2F0IHJlZCA9IGZsb2F0KHVfY29sb3IgLyAyNTYgLyAyNTYpO1xcbiAgICBmbG9hdCBncmVlbiA9IGZsb2F0KHVfY29sb3IgLyAyNTYgLSBpbnQocmVkICogMjU2LjApKTtcXG4gICAgZmxvYXQgYmx1ZSA9IGZsb2F0KHVfY29sb3IgLSBpbnQocmVkICogMjU2LjAgKiAyNTYuMCkgLSBpbnQoZ3JlZW4gKiAyNTYuMCkpO1xcblxcbiAgICBtYXQyIHJvdGF0aW9uTWF0cml4ID0gbWF0MihcXG4gICAgICAgIGNvcyh1X2FuZ2xlKSwgLXNpbih1X2FuZ2xlKSxcXG4gICAgICAgIHNpbih1X2FuZ2xlKSwgY29zKHVfYW5nbGUpXFxuICAgICk7XFxuXFxuICAgIHZlYzIgcm90YXRlZGZyYWdDb29yZCA9IHJvdGF0aW9uTWF0cml4ICogZ2xfRnJhZ0Nvb3JkLnh5O1xcbiAgICBmbG9hdCBwb3MgPSAtMS4wIC8gKCBnbF9GcmFnQ29vcmQueSAvIHVfcmVzb2x1dGlvbi55KTtcXG4gICAgZmxvYXQgeVNoaWZ0ID0gdV90aW1lICogdV9zcGVlZDtcXG4gICAgZmxvYXQgZHJhd1ggPSBkcmF3Q29vcmQocm90YXRlZGZyYWdDb29yZC54LCB1X3dpZHRoLCB1X3NwYWNpbmcpO1xcbiAgICBmbG9hdCBkcmF3WSA9IGRyYXdDb29yZChyb3RhdGVkZnJhZ0Nvb3JkLnkgKyB5U2hpZnQsIHVfbGVuZ3RoLCB1X2ludGVydmFsKTtcXG5cXG4gICAgZmxvYXQgZHJhdyA9IGRyYXdYICogZHJhd1k7XFxuXFxuICAgIGlmIChkcmF3IDwgMC45KSB7XFxuICAgICAgICBkaXNjYXJkO1xcbiAgICB9XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocmVkIC8gMjU1LjAsIGdyZWVuIC8gMjU1LjAsIGJsdWUgLyAyNTUuMCwgMS4wKTtcXG59XFxuXCJdKTtcblxuLyoqXG4gKiBhbmdsZVxuICogd2lkdGhcbiAqIHNwYWNpbmdcbiAqIGxlbmd0aFxuICogaW50ZXJ2YWxcbiAqIHNwZWVkXG4gKi9cbnZhciBSYWluID0gTC5Qb2x5Z29uLmV4dGVuZCh7XG4gICAgb3B0aW9uczoge1xuICAgICAgICBhbmdsZTogNjAsXG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICBzcGFjaW5nOiA1LFxuICAgICAgICB1cGRhdGVXaGVuWm9vbWluZzogdHJ1ZSxcbiAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudFNoYWRlclxuICAgIH0sXG5cbiAgICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICB2YXIgY2FudmFzLCBnbDtcblxuICAgICAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICAgICAgdGhpcy5fdGltZSA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcyA9IHRoaXMuX2NhbnZhcyA9IHRoaXMuX2luaXRDYW52YXMobWFwKTtcbiAgICAgICAgICAgIGdsID0gdGhpcy5fZ2wgPSB0aGlzLl9pbml0V2ViR2woY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRTaGFkZXJzKGdsKTtcblxuICAgICAgICBpZiAoZ2wpIHtcbiAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMC4wKTtcbiAgICAgICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVHxnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYW5lKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhbmUoKS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLl9wYW5lcy5vdmVybGF5UGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwLm9uKCdtb3ZlJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xuICAgICAgICBtYXAub24oJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkKSB7XG4gICAgICAgICAgICBtYXAub24oJ3pvb21hbmltJywgdGhpcy5fYW5pbWF0ZVpvb20sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICB9LFxuXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYW5lKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhbmUoKS5yZW1vdmVDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2NhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAub2ZmKCdtb3ZlZW5kJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xuXG4gICAgICAgIGlmIChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBtYXAub2ZmKCd6b29tYW5pbScsIHRoaXMuX2FuaW1hdGVab29tLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRUbzogZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICBtYXAuYWRkTGF5ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkcmF3U2NlbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1ZixcbiAgICAgICAgICAgIHBvbHlnb25zQ291bnQsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsO1xuXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG5cbiAgICAgICAgcG9seWdvbnNDb3VudCA9IHRoaXMuX2xhdGxuZ3MubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seWdvbnNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9seWdvbkxhbkxuZ3MgPSB0aGlzLl9sYXRsbmdzW2ldO1xuICAgICAgICAgICAgY291bnQgPSBwb2x5Z29uTGFuTG5ncy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU1hdHJpeChnbCk7XG4gICAgICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX0ZBTiwgY3VycmVudEluZGV4LCBjb3VudCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggKz0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgdGltZSA9IEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgdGltZUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X3RpbWVcIiksXG4gICAgICAgICAgICBkZWx0YVRpbWUgPSB0aW1lIC0gdGhpcy5fdGltZTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGVsdGFUaW1lKTtcblxuICAgICAgICBnbC51bmlmb3JtMWYodGltZUxvY2F0aW9uLCBkZWx0YVRpbWUpO1xuICAgICAgICAvLyBnbC51bmlmb3JtMWYodGltZUxvY2F0aW9uLCB0aW1lKTtcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUoKTtcblxuICAgICAgICAvLyB0aGlzLl90aW1lID0gdGltZTtcbiAgICB9LFxuXG4gICAgc2V0QW5nbGU6IGZ1bmN0aW9uIChhbmdsZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIGFuZ2xlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfYW5nbGVcIiksXG4gICAgICAgICAgICByYWQgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAgLSBNYXRoLlBJIC8gMi4wO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICBnbC51bmlmb3JtMWYoYW5nbGVMb2NhdGlvbiwgcmFkKTtcbiAgICAgICAgdGhpcy5fcmVkcmF3KCk7XG4gICAgfSxcblxuICAgIHNldFdpZHRoOiBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICB3aWR0aExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X3dpZHRoXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBnbC51bmlmb3JtMWYod2lkdGhMb2NhdGlvbiwgd2lkdGgpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0U3BhY2luZzogZnVuY3Rpb24gKHNwYWNpbmcpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICBzcGFjaW5nTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfc3BhY2luZ1wiKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc3BhY2luZyA9IHNwYWNpbmc7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGFjaW5nTG9jYXRpb24sIHNwYWNpbmcpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0TGVuZ3RoOiBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgbGVuZ3RoTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfbGVuZ3RoXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsZW5ndGhMb2NhdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fcmVkcmF3KCk7XG4gICAgfSxcblxuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICBpbnRlcnZhbExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X2ludGVydmFsXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgICBnbC51bmlmb3JtMWYoaW50ZXJ2YWxMb2NhdGlvbiwgaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0U3BlZWQ6IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIHNwZWVkTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfc3BlZWRcIik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGVlZExvY2F0aW9uLCBzcGVlZCk7XG4gICAgICAgIHRoaXMuX3JlZHJhdygpO1xuICAgIH0sXG5cbiAgICBzZXRDb2xvcjogZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgY29sb3JMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9jb2xvclwiKTtcblxuICAgICAgICBpZiAoY29sb3JbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgY29sb3IucmVwbGFjZSgnIycsICcweCcpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBnbC51bmlmb3JtMWkoY29sb3JMb2NhdGlvbiwgY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5fcmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRDYW52YXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IEwuRG9tVXRpbC5jcmVhdGUoJ2NhbnZhcycsICd3ZWJnbC1jYW52YXMgbGVhZmxldC1sYXllcicpO1xuXG4gICAgICAgIHZhciBvcmlnaW5Qcm9wID0gTC5Eb21VdGlsLnRlc3RQcm9wKFsndHJhbnNmb3JtT3JpZ2luJywgJ1dlYmtpdFRyYW5zZm9ybU9yaWdpbicsICdtc1RyYW5zZm9ybU9yaWdpbiddKTtcbiAgICAgICAgY2FudmFzLnN0eWxlW29yaWdpblByb3BdID0gJzUwJSA1MCUnO1xuXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcbiAgICAgICAgY2FudmFzLndpZHRoICA9IHNpemUueDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUueTtcbiAgICAgICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgICAgICB2YXIgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcbiAgICAgICAgTC5Eb21VdGlsLmFkZENsYXNzKGNhbnZhcywgJ2xlYWZsZXQtem9vbS0nICsgKGFuaW1hdGVkID8gJ2FuaW1hdGVkJyA6ICdoaWRlJykpO1xuXG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfSxcblxuICAgIF9pbml0U2hhZGVyczogZnVuY3Rpb24gKGdsKSB7XG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuX2dldFNoYWRlcihcInZlcnRleFwiLCB0aGlzLm9wdGlvbnMudmVydGV4U2hhZGVyKSxcbiAgICAgICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuX2dldFNoYWRlcihcImZyYWdtZW50XCIsIHRoaXMub3B0aW9ucy5mcmFnbWVudFNoYWRlciksXG4gICAgICAgICAgICBzaGFkZXJQcm9ncmFtID0gdGhpcy5zaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICBhbGVydChcIlVuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzaGFkZXIgcHJvZ3JhbS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORSk7XG5cbiAgICAgICAgdmFyIGFuZ2xlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfYW5nbGVcIiksXG4gICAgICAgICAgICBzcGFjaW5nTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfc3BhY2luZ1wiKSxcbiAgICAgICAgICAgIHdpZHRoTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfd2lkdGhcIiksXG4gICAgICAgICAgICBsZW5ndGhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9sZWdudGhcIiksXG4gICAgICAgICAgICBsZW5ndGhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9sZW5ndGhcIiksXG4gICAgICAgICAgICBpbnRlcnZhbExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X2ludGVydmFsXCIpLFxuICAgICAgICAgICAgc3BlZWRMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9zcGVlZFwiKSxcbiAgICAgICAgICAgIGNvbG9yTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfY29sb3JcIik7XG5cbiAgICAgICAgLy8g0YPQs9C+0Lsg0LTQvtC20LTRj1xuICAgICAgICBnbC51bmlmb3JtMWYoYW5nbGVMb2NhdGlvbiwgdGhpcy5vcHRpb25zLmFuZ2xlICogTWF0aC5QSSAvIDE4MCAtIE1hdGguUEkgLyAyLjApO1xuICAgICAgICBnbC51bmlmb3JtMWYod2lkdGhMb2NhdGlvbiwgdGhpcy5vcHRpb25zLndpZHRoKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHNwYWNpbmdMb2NhdGlvbiwgdGhpcy5vcHRpb25zLnNwYWNpbmcpO1xuICAgICAgICBnbC51bmlmb3JtMWYobGVuZ3RoTG9jYXRpb24sIHRoaXMub3B0aW9ucy5sZW5ndGgpO1xuICAgICAgICBnbC51bmlmb3JtMWYoaW50ZXJ2YWxMb2NhdGlvbiwgdGhpcy5vcHRpb25zLmludGVydmFsKTtcbiAgICAgICAgZ2wudW5pZm9ybTFpKHNwZWVkTG9jYXRpb24sIHRoaXMub3B0aW9ucy5zcGVlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb2xvclswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IucmVwbGFjZSgnIycsICcweCcpO1xuICAgICAgICB9XG4gICAgICAgIGdsLnVuaWZvcm0xZihjb2xvckxvY2F0aW9uLCB0aGlzLm9wdGlvbnMuY29sb3IpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSxcblxuICAgIF9pbml0V2ViR2w6IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgdmFyIGdsID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpIHx8IGNhbnZhcy5nZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG5cbiAgICAgICAgaWYgKCFnbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wuIFlvdXIgYnJvd3NlciBtYXkgbm90IHN1cHBvcnQgaXQuXCIpO1xuICAgICAgICAgICAgZ2wgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsO1xuICAgIH0sXG5cbiAgICAvLyDQstGA0LXQvNC10L3QvdCw0Y8g0YTRg9C90LrRhtC40Y8gLSDRiNC10LnQtNC10YDRiyDQvdCw0LTQviDQsdGD0LTQtdGCINC30LDQv9C40YHQsNGC0Ywg0LIg0YHQutC+0YPQv9C1XG4gICAgX2dldFNoYWRlcjogZnVuY3Rpb24gKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlID09IFwidmVydGV4XCIgPyBnbC5WRVJURVhfU0hBREVSIDogZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcnM6IFwiICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZU1hdHJpeDogZnVuY3Rpb24gKGdsKSB7XG4gICAgICAgIHZhciBtYXRyaXhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIiksXG4gICAgICAgICAgICBjcnMgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMsXG4gICAgICAgICAgICBjZW50ZXIgPSB0aGlzLl9tYXAuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBvdXRzaWRlQm91bmRzID0gTWF0aC5hYnMoY2VudGVyLmxhdCkgPiBjcnMucHJvamVjdGlvbi5NQVhfTEFUSVRVREUsXG4gICAgICAgICAgICBwcm9qZWN0RnVuYyA9IG91dHNpZGVCb3VuZHMgPyB0aGlzLl9wcm9qZWN0LmJpbmQodGhpcykgOiBjcnMucHJvamVjdC5iaW5kKGNycyksXG4gICAgICAgICAgICB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKSxcbiAgICAgICAgICAgIENSU0NlbnRlciA9IHByb2plY3RGdW5jKGNlbnRlciksXG4gICAgICAgICAgICB4ID0gQ1JTQ2VudGVyLngsXG4gICAgICAgICAgICB5ID0gQ1JTQ2VudGVyLnksXG4gICAgICAgICAgICBweFNpemUgPSBjcnMudHJhbnNmb3JtYXRpb24udW50cmFuc2Zvcm0oTC5wb2ludChbMSwxXSksIDEpLFxuICAgICAgICAgICAgbWFwU2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCksXG4gICAgICAgICAgICBDUlNVbml0c1BlclB4ID0gbWFwU2l6ZS5kaXZpZGVCeSggY3JzLnNjYWxlKHpvb20pICksXG4gICAgICAgICAgICBoYWxmID0gcHhTaXplLnNjYWxlQnkoQ1JTVW5pdHNQZXJQeCksXG4gICAgICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBtYXRyaXhVdGlscy5pZGVudGl0eU1hdHJpeCgpLFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXggPSBtYXRyaXhVdGlscy50cmFuc2xhdGlvbk1hdHJpeChbLXgsIC0geSwgMF0pLFxuICAgICAgICAgICAgc2NhbGVNYXRyaXggPSBtYXRyaXhVdGlscy5zY2FsZU1hdHJpeChbMS9oYWxmLngsIC0xL2hhbGYueSwgMV0pO1xuXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG1hdHJpeFV0aWxzLm1hdHJpeE11bHRpcGx5KHRyYW5zZm9ybU1hdHJpeCwgdHJhbnNsYXRpb25NYXRyaXgpO1xuICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBtYXRyaXhVdGlscy5tYXRyaXhNdWx0aXBseSh0cmFuc2Zvcm1NYXRyaXgsIHNjYWxlTWF0cml4KTtcblxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1hdHJpeExvY2F0aW9uLCBmYWxzZSwgdHJhbnNmb3JtTWF0cml4KTtcbiAgICB9LFxuXG4gICAgX3Byb2plY3Q6IGZ1bmN0aW9uIChsYXRsbmcpIHtcbiAgICAgICAgdmFyIFIgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMucHJvamVjdGlvbi5SLFxuICAgICAgICAgICAgZCA9IE1hdGguUEkgLyAxODAsXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihsYXRsbmcubGF0ICogZCk7XG5cblx0XHRyZXR1cm4gTC5wb2ludChcblx0XHRcdFIgKiBsYXRsbmcubG5nICogZCxcblx0XHRcdFIgKiBNYXRoLmxvZygoMSArIHNpbikgLyAoMSAtIHNpbikpIC8gMik7XG4gICAgfSxcblxuICAgIF9yZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9wTGVmdCA9IHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF5ZXJQb2ludChbMCwgMF0pO1xuICAgICAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fY2FudmFzLCB0b3BMZWZ0KTtcblxuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgX3Jlc2l6ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHNpemUgPSBlLm5ld1NpemU7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoICA9IHNpemUueDtcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHNpemUueTtcblxuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgIH0sXG5cbiAgICBfcmVkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgcG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpLFxuICAgICAgICAgICAgcHJvamVjdExhdExuZyA9IHRoaXMuX3Byb2plY3RMYXRMbmcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGJ1ZkFycmF5ID0gW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLl9sYXRsbmdzKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxsKSB7cmV0dXJuIHByb2plY3RMYXRMbmcobGwpfSlcbiAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICAgIGJ5dGVzUGVyVmVydGV4ID0gOCxcbiAgICAgICAgICAgIGJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgICAgIHZhciByZXNvbHV0aW9uTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfcmVzb2x1dGlvblwiKTtcbiAgICAgICAgZ2wudW5pZm9ybTJmdihyZXNvbHV0aW9uTG9jYXRpb24sIFt0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHRdKTtcblxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoYnVmQXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgICAgdGhpcy5fYmluZEF0dHJpYihwb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIGJ5dGVzUGVyVmVydGV4LCAwKTtcblxuICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICAvLyBTbWFsbCB1dGlsaXR5IGZ1bmN0aW9uXG4gICAgX2JpbmRBdHRyaWI6IGZ1bmN0aW9uIChhdHRyaWJJbmRleCwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGF0dHJpYkluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJJbmRleCk7XG4gICAgICAgIHRoaXMuX2dsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmliSW5kZXgsIHNpemUsIHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICB9LFxuXG4gICAgX3Byb2plY3RMYXRMbmc6IGZ1bmN0aW9uIChsYXRMbmcpIHtcbiAgICAgICAgdmFyIGNyc1BvaW50ID0gdGhpcy5fbWFwLm9wdGlvbnMuY3JzLnByb2plY3QobGF0TG5nKTtcblxuICAgICAgICByZXR1cm4gW2Nyc1BvaW50LngsIGNyc1BvaW50LnldO1xuICAgIH0sXG5cbiAgICBfYW5pbWF0ZVpvb206IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IHRoaXMuX21hcC5nZXRab29tU2NhbGUoZS56b29tKSxcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcbiAgICAgICAgaWYgKEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID0gTC5Eb21VdGlsLmdldFRyYW5zbGF0ZVN0cmluZyhvZmZzZXQpICsgJyBzY2FsZSgnICsgc2NhbGUgKyAnKSc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIHJhaW4gPSBmdW5jdGlvbihsYXRsbmdzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBMLlJhaW4obGF0bG5ncywgb3B0aW9ucyk7XG59O1xuXG5MLlJhaW4gPSBSYWluO1xuTC5yYWluID0gcmFpbjtcblxuZXhwb3J0IHtcbiAgICBSYWluLFxuICAgIHJhaW5cbn1cbiIsImNvbnN0IG1hdHJpeFV0aWxzID0ge1xuICAgIG1hdHJpeE11bHRpcGx5OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYTAwID0gYVswKjQrMF07XG4gICAgICAgIHZhciBhMDEgPSBhWzAqNCsxXTtcbiAgICAgICAgdmFyIGEwMiA9IGFbMCo0KzJdO1xuICAgICAgICB2YXIgYTAzID0gYVswKjQrM107XG4gICAgICAgIHZhciBhMTAgPSBhWzEqNCswXTtcbiAgICAgICAgdmFyIGExMSA9IGFbMSo0KzFdO1xuICAgICAgICB2YXIgYTEyID0gYVsxKjQrMl07XG4gICAgICAgIHZhciBhMTMgPSBhWzEqNCszXTtcbiAgICAgICAgdmFyIGEyMCA9IGFbMio0KzBdO1xuICAgICAgICB2YXIgYTIxID0gYVsyKjQrMV07XG4gICAgICAgIHZhciBhMjIgPSBhWzIqNCsyXTtcbiAgICAgICAgdmFyIGEyMyA9IGFbMio0KzNdO1xuICAgICAgICB2YXIgYTMwID0gYVszKjQrMF07XG4gICAgICAgIHZhciBhMzEgPSBhWzMqNCsxXTtcbiAgICAgICAgdmFyIGEzMiA9IGFbMyo0KzJdO1xuICAgICAgICB2YXIgYTMzID0gYVszKjQrM107XG4gICAgICAgIHZhciBiMDAgPSBiWzAqNCswXTtcbiAgICAgICAgdmFyIGIwMSA9IGJbMCo0KzFdO1xuICAgICAgICB2YXIgYjAyID0gYlswKjQrMl07XG4gICAgICAgIHZhciBiMDMgPSBiWzAqNCszXTtcbiAgICAgICAgdmFyIGIxMCA9IGJbMSo0KzBdO1xuICAgICAgICB2YXIgYjExID0gYlsxKjQrMV07XG4gICAgICAgIHZhciBiMTIgPSBiWzEqNCsyXTtcbiAgICAgICAgdmFyIGIxMyA9IGJbMSo0KzNdO1xuICAgICAgICB2YXIgYjIwID0gYlsyKjQrMF07XG4gICAgICAgIHZhciBiMjEgPSBiWzIqNCsxXTtcbiAgICAgICAgdmFyIGIyMiA9IGJbMio0KzJdO1xuICAgICAgICB2YXIgYjIzID0gYlsyKjQrM107XG4gICAgICAgIHZhciBiMzAgPSBiWzMqNCswXTtcbiAgICAgICAgdmFyIGIzMSA9IGJbMyo0KzFdO1xuICAgICAgICB2YXIgYjMyID0gYlszKjQrMl07XG4gICAgICAgIHZhciBiMzMgPSBiWzMqNCszXTtcbiAgICAgICAgcmV0dXJuIFthMDAgKiBiMDAgKyBhMDEgKiBiMTAgKyBhMDIgKiBiMjAgKyBhMDMgKiBiMzAsXG4gICAgICAgICAgICBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjEgKyBhMDMgKiBiMzEsXG4gICAgICAgICAgICBhMDAgKiBiMDIgKyBhMDEgKiBiMTIgKyBhMDIgKiBiMjIgKyBhMDMgKiBiMzIsXG4gICAgICAgICAgICBhMDAgKiBiMDMgKyBhMDEgKiBiMTMgKyBhMDIgKiBiMjMgKyBhMDMgKiBiMzMsXG4gICAgICAgICAgICBhMTAgKiBiMDAgKyBhMTEgKiBiMTAgKyBhMTIgKiBiMjAgKyBhMTMgKiBiMzAsXG4gICAgICAgICAgICBhMTAgKiBiMDEgKyBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzEsXG4gICAgICAgICAgICBhMTAgKiBiMDIgKyBhMTEgKiBiMTIgKyBhMTIgKiBiMjIgKyBhMTMgKiBiMzIsXG4gICAgICAgICAgICBhMTAgKiBiMDMgKyBhMTEgKiBiMTMgKyBhMTIgKiBiMjMgKyBhMTMgKiBiMzMsXG4gICAgICAgICAgICBhMjAgKiBiMDAgKyBhMjEgKiBiMTAgKyBhMjIgKiBiMjAgKyBhMjMgKiBiMzAsXG4gICAgICAgICAgICBhMjAgKiBiMDEgKyBhMjEgKiBiMTEgKyBhMjIgKiBiMjEgKyBhMjMgKiBiMzEsXG4gICAgICAgICAgICBhMjAgKiBiMDIgKyBhMjEgKiBiMTIgKyBhMjIgKiBiMjIgKyBhMjMgKiBiMzIsXG4gICAgICAgICAgICBhMjAgKiBiMDMgKyBhMjEgKiBiMTMgKyBhMjIgKiBiMjMgKyBhMjMgKiBiMzMsXG4gICAgICAgICAgICBhMzAgKiBiMDAgKyBhMzEgKiBiMTAgKyBhMzIgKiBiMjAgKyBhMzMgKiBiMzAsXG4gICAgICAgICAgICBhMzAgKiBiMDEgKyBhMzEgKiBiMTEgKyBhMzIgKiBiMjEgKyBhMzMgKiBiMzEsXG4gICAgICAgICAgICBhMzAgKiBiMDIgKyBhMzEgKiBiMTIgKyBhMzIgKiBiMjIgKyBhMzMgKiBiMzIsXG4gICAgICAgICAgICBhMzAgKiBiMDMgKyBhMzEgKiBiMTMgKyBhMzIgKiBiMjMgKyBhMzMgKiBiMzNdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gICAgICAgIGlkZW50aXR5TWF0cml4OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIDEsICAwLCAgMCwgIDAsXG4gICAgICAgICAgICAgICAgMCwgIDEsICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgMCwgIDEsICAwLFxuICAgICAgICAgICAgICAgIDAsICAwLCAgMCwgIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBSZXR1cm5zIGEgdHJhbnNsYXRpb24gbWF0cml4XG4gICAgICAgIC8vIE9mZnNldCBpcyBhIDMtZWxlbWVudCBhcnJheVxuICAgICAgICB0cmFuc2xhdGlvbk1hdHJpeDogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAxLCAgICAwLCAgICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgICAxLCAgICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgICAwLCAgICAxLCAgMCxcbiAgICAgICAgICAgICAgICB0WzBdLCB0WzFdLCB0WzJdLCAgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBSZXR1cm5zIGEgc2NhbGUgbWF0cml4XG4gICAgICAgIC8vIFNjYWxlIGlzIGEgMy1lbGVtZW50IGFycmF5XG4gICAgICAgIHNjYWxlTWF0cml4OiBmdW5jdGlvbiAocykge1xuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHNbMF0sICAgIDAsICAgIDAsICAwLFxuICAgICAgICAgICAgICAgIDAsIHNbMV0sICAgIDAsICAwLFxuICAgICAgICAgICAgICAgIDAsICAgIDAsIHNbMl0sICAwLFxuICAgICAgICAgICAgICAgIDAsICAgIDAsICAgIDAsICAxXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdHJpeFV0aWxzO1xuIl19
