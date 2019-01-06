(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

var _L = require("../../src/L.Rain");

var _points2 = require("./points");

// debugger;
var L = global.L || requires('leaflet');

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
    options = {
  // color: 0xDD1D36,
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
console.log(_points2.points);
console.log(_points);
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
var fragmentShader = glsl(["precision mediump float;\n#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_angle;\nuniform float u_width;\nuniform float u_spacing;\nuniform float u_length;\nuniform float u_interval;\nuniform float u_speed;\nuniform float u_time;\n\nfloat random (float value) {\n    return fract(sin(value) * 1000000.0);\n}\n\nfloat drawCoord(float coord, float fill, float gap) {\n    float patternLength = fill + gap;\n    float modulo = mod(coord, patternLength);\n    return step(modulo, patternLength - gap);\n}\n\nvoid main() {\n    float rainStripeWidth = 2.0;\n    float spacingInClipCoordinates = u_spacing/u_resolution.x;\n\n    float red = 0.0;\n    float green = 0.0;\n    float blue = 1.0;\n\n    mat2 rotationMatrix = mat2(\n        cos(u_angle), -sin(u_angle),\n        sin(u_angle), cos(u_angle)\n    );\n\n    vec2 rotatedfragCoord = rotationMatrix * gl_FragCoord.xy;\n    float pos = -1.0 / ( gl_FragCoord.y / u_resolution.y);\n    float yShift = u_time * u_speed;\n    // float yShift = u_time /** u_speed/* + random(u_time)*/;\n    float drawX = drawCoord(rotatedfragCoord.x, u_width, u_spacing);\n    float drawY = drawCoord(rotatedfragCoord.y + yShift, u_length, u_interval);\n\n    float draw = drawX * drawY;\n\n    if (draw < 0.9) {\n        discard;\n    }\n\n    vec3 color = vec3(red, green, blue);\n\n\tgl_FragColor = vec4(color, 1.0);\n}\n"]);
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
        speedLocation = gl.getUniformLocation(this.shaderProgram, "u_speed"); // угол дождя

    gl.uniform1f(angleLocation, this.options.angle * Math.PI / 180 - Math.PI / 2.0);
    gl.uniform1f(widthLocation, this.options.width);
    gl.uniform1f(spacingLocation, this.options.spacing);
    gl.uniform1f(lengthLocation, this.options.length);
    gl.uniform1f(intervalLocation, this.options.interval);
    gl.uniform1f(speedLocation, this.options.speed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL2pzL2FwcC5qcyIsImRlbW8vanMvcG9pbnRzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYnJvd3Nlci5qcyIsInNyYy9MLlJhaW4uanMiLCJzcmMvbWF0cml4VXRpbHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQTs7QUFDQTs7QUFGQTtBQUlBLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFQLElBQVksUUFBUSxDQUFDLFNBQUQsQ0FBNUI7O0FBRUEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxpRUFBWixFQUErRTtBQUNqRixFQUFBLE9BQU8sRUFBRSxFQUR3RTtBQUVqRixFQUFBLFdBQVcsRUFBRTtBQUZvRSxDQUEvRSxDQUFWO0FBQUEsSUFJSSxNQUFNLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUpiO0FBQUEsSUFLSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBTixDQUFVLEtBQVYsRUFBaUI7QUFBQyxFQUFBLE1BQU0sRUFBRSxDQUFDLEdBQUQsQ0FBVDtBQUFnQixFQUFBLE1BQU0sRUFBTixNQUFoQjtBQUF3QixFQUFBLElBQUksRUFBRSxDQUE5QjtBQUFpQyxFQUFBLE9BQU8sRUFBRSxFQUExQztBQUE4QyxFQUFBLGFBQWEsRUFBRTtBQUE3RCxDQUFqQixDQUxYO0FBQUEsSUFNSSxPQUFPLEdBQUcsV0FBVyxDQUFDLGVBQUQsQ0FOekI7QUFBQSxJQU9JLElBQUksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQVBYO0FBQUEsSUFRSSxlQUFlLEdBQUcsUUFBUSxDQUFDLHNCQUFULENBQWdDLGtCQUFoQyxFQUFvRCxDQUFwRCxDQVJ0QjtBQUFBLElBU0ksZUFBZSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxrQkFBaEMsRUFBb0QsQ0FBcEQsQ0FUdEI7QUFBQSxJQVVJLGlC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QVMsSUFBVDtBQUNBLENBQUMsQ0FBQyxJQUFGLEdBQVMsSUFBVDs7Ozs7Ozs7O0FDNVdBLElBQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxFQUFFLHdCQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQzVCLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUYsR0FBSSxDQUFMLENBQVg7QUFDQSxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFGLEdBQUksQ0FBTCxDQUFYO0FBQ0EsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRixHQUFJLENBQUwsQ0FBWDtBQUNBLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFF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SCxFQUVTLENBRlQsRUFFYSxDQUZiLEVBR0gsQ0FIRyxFQUdHLENBSEgsRUFHUyxDQUhULEVBR2EsQ0FIYixFQUlILENBQUMsQ0FBQyxDQUFELENBSkUsRUFJRyxDQUFDLENBQUMsQ0FBRCxDQUpKLEVBSVMsQ0FBQyxDQUFDLENBQUQsQ0FKVixFQUlnQixDQUpoQixDQUFQO0FBTUgsR0F6RVc7QUEyRVo7QUFDQTtBQUNBLEVBQUEsV0FBVyxFQUFFLHFCQUFVLENBQVYsRUFBYTtBQUV0QixXQUFPLENBQ0gsQ0FBQyxDQUFDLENBQUQsQ0FERSxFQUNNLENBRE4sRUFDWSxDQURaLEVBQ2dCLENBRGhCLEVBRUgsQ0FGRyxFQUVBLENBQUMsQ0FBQyxDQUFELENBRkQsRUFFUyxDQUZULEVBRWEsQ0FGYixFQUdILENBSEcsRUFHRyxDQUhILEVBR00sQ0FBQyxDQUFDLENBQUQsQ0FIUCxFQUdhLENBSGIsRUFJSCxDQUpHLEVBSUcsQ0FKSCxFQUlTLENBSlQsRUFJYSxDQUpiLENBQVA7QUFNSDtBQXJGVyxDQUFwQjtlQXdGZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gZGVidWdnZXI7XG5pbXBvcnQgeyByYWluIH0gZnJvbSAnLi4vLi4vc3JjL0wuUmFpbic7XG5pbXBvcnQgeyBwb2ludHMgfSBmcm9tICcuL3BvaW50cyc7XG5cbnZhciBMID0gZ2xvYmFsLkwgfHwgcmVxdWlyZXMoJ2xlYWZsZXQnKTtcblxudmFyIG9zbSA9IEwudGlsZUxheWVyKCdodHRwOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS9saWdodF9ub2xhYmVscy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIG1heFpvb206IDE4LFxuICAgICAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPidcbiAgICB9KSxcbiAgICBjZW50ZXIgPSBbNDgsIDEwXSxcbiAgICBsbWFwID0gbmV3IEwuTWFwKCdtYXAnLCB7bGF5ZXJzOiBbb3NtXSwgY2VudGVyLCB6b29tOiA1LCBtYXhab29tOiAyMiwgem9vbUFuaW1hdGlvbjogdHJ1ZX0pLFxuICAgIF9wb2ludHMgPSByZXZlcnNlRGF0YShwb2ludHMpLFxuICAgIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxuICAgIGFuZ2xlQ29udHJvbGxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuZ2xlLWNvbnRyb2xsZXInKVswXSxcbiAgICB3aWR0aENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aWR0aC1jb250cm9sbGVyJylbMF0sXG4gICAgc3BhY2luZ0NvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcGFjaW5nLWNvbnRyb2xsZXInKVswXSxcbiAgICBsZW5ndGhDb250cm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVuZ3RoLWNvbnRyb2xsZXInKVswXSxcbiAgICBpbnRlcnZhbENvbnRyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnRlcnZhbC1jb250cm9sbGVyJylbMF0sXG4gICAgc3BlZWRDb250cm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3BlZWQtY29udHJvbGxlcicpWzBdLFxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC8vIGNvbG9yOiAweEREMUQzNixcbiAgICAgICAgYW5nbGU6ICthbmdsZUNvbnRyb2xsZXIudmFsdWUsICAgICAgICAgIC8vIGRlZ1xuICAgICAgICB3aWR0aDogK3dpZHRoQ29udHJvbGxlci52YWx1ZSwgICAgICAgICAgLy8gcHhcbiAgICAgICAgc3BhY2luZzogK3NwYWNpbmdDb250cm9sbGVyLnZhbHVlLCAgICAgIC8vIHB4XG4gICAgICAgIGxlbmd0aDogK2xlbmd0aENvbnRyb2xsZXIudmFsdWUsICAgICAgICAvLyBweFxuICAgICAgICBpbnRlcnZhbDogK2ludGVydmFsQ29udHJvbGxlci52YWx1ZSwgICAgLy8gcHhcbiAgICAgICAgc3BlZWQ6ICtzcGVlZENvbnRyb2xsZXIudmFsdWUsICAgICAgICAgIC8vIHRpbWVzXG4gICAgfTtcblxuLy8gdmFyIHBvbHlnb24gPSBMLnBvbHlnb24oX3BvaW50cywge30pLmFkZFRvKGxtYXApO1xuLy8gd2luZG93LnBvbHlnb24gPSBwb2x5Z29uO1xud2luZG93LmxtYXAgPSBsbWFwO1xuY29uc29sZS5sb2cocG9pbnRzKTtcbmNvbnNvbGUubG9nKF9wb2ludHMpO1xud2luZG93LnJhaW4gPSByYWluKF9wb2ludHMsIG9wdGlvbnMpLmFkZFRvKGxtYXApO1xuXG5hbmdsZUNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgYW5nbGUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHdpbmRvdy5yYWluLnNldEFuZ2xlKGFuZ2xlKTtcbn0pO1xuXG53aWR0aENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgd2lkdGggPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHdpbmRvdy5yYWluLnNldFdpZHRoKHdpZHRoKTtcbn0pO1xuXG5zcGFjaW5nQ29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzcGFjaW5nID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRTcGFjaW5nKHNwYWNpbmcpO1xufSk7XG5cbmxlbmd0aENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbGVuZ3RoID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB3aW5kb3cucmFpbi5zZXRMZW5ndGgobGVuZ3RoKTtcbn0pO1xuXG5pbnRlcnZhbENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgaW50ZXJ2YWwgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHdpbmRvdy5yYWluLnNldEludGVydmFsKGludGVydmFsKTtcbn0pO1xuXG5zcGVlZENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc3BlZWQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHdpbmRvdy5yYWluLnNldFNwZWVkKHNwZWVkKTtcbn0pO1xuXG5sbWFwLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGxldCBwID0gbG1hcC5vcHRpb25zLmNycy5wcm9qZWN0KGUubGF0bG5nKTtcbiAgICBjb25zb2xlLmxvZyhwKTtcbn0pXG5cbmZ1bmN0aW9uIHJldmVyc2VEYXRhKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5Lm1hcChjb29yZHMgPT4ge1xuICAgICAgICByZXR1cm4gY29vcmRzLm1hcChjb29yZCA9PiBjb29yZC5zbGljZSgpLnJldmVyc2UoKSk7XG4gICAgfSk7XG59XG4iLCIvLyBjb25zdCBwb2ludHMgPSBbXG4vLyAgICAgW1xuLy8gICAgICAgICBbNTUuNjk0MjExMjU2MDQxMjEsIDM3LjU0Nzc0NjY3MzE3MDAzXSxcbi8vICAgICAgICAgWzU1LjY2NDYxODI5ODQ3MjU2LCAzNy42NDQ2NzU1OTY3MzMwOV0sXG4vLyAgICAgICAgIFs1NS43MTk2OTEwMDQzNTg2NSwgMzcuNzQzNzc5Njc0OTk3NzNdLFxuLy8gICAgICAgICBbNTUuNzU2NDIyNTAyNTA5MTAsIDM3LjgxMzc4NDY3NjY4NzM1XSxcbi8vICAgICAgICAgWzU1LjgxNTg1MjYwMDE5NzU0LCAzNy43OTU4NzQ1MzMxODA0MF0sXG4vLyAgICAgICAgIFs1NS44NjQyMDYzMTIwNTIzMSwgMzcuNTk1NTA5Njc5MTgyMTddLFxuLy8gICAgICAgICBbNTUuODQ5NjY2MTAyMjgzMjksIDM3LjQ1MjM3Njk3OTI4Mjc4XSxcbi8vICAgICAgICAgWzU1Ljc2ODk4MDQyODI5NTc1LCAzNy4zMzg5NzgyNDU3NDEzN10sXG4vLyAgICAgICAgIFs1NS42NTk5MDkwOTYyMjEyMywgMzcuNDY4NjM4MDMwODEwMzhdLFxuLy8gICAgICAgICBbNTUuNjk0MjExMjU2MDQxMjEsIDM3LjU0Nzc0NjY3MzE3MDAzXVxuLy8gICAgIF0sIFtcbi8vICAgICAgICAgWzU1LjY5NDIxMTI1NjA0MTIxLCAzOC41NDc3NDY2NzMxNzAwM10sXG4vLyAgICAgICAgIFs1NS42NjQ2MTgyOTg0NzI1NiwgMzguNjQ0Njc1NTk2NzMzMDldLFxuLy8gICAgICAgICBbNTUuNzE5NjkxMDA0MzU4NjUsIDM4Ljc0Mzc3OTY3NDk5NzczXSxcbi8vICAgICAgICAgWzU1Ljc1NjQyMjUwMjUwOTEwLCAzOC44MTM3ODQ2NzY2ODczNV0sXG4vLyAgICAgICAgIFs1NS44MTU4NTI2MDAxOTc1NCwgMzguNzk1ODc0NTMzMTgwNDBdLFxuLy8gICAgICAgICBbNTUuODY0MjA2MzEyMDUyMzEsIDM4LjU5NTUwOTY3OTE4MjE3XSxcbi8vICAgICAgICAgWzU1Ljg0OTY2NjEwMjI4MzI5LCAzOC40NTIzNzY5NzkyODI3OF0sXG4vLyAgICAgICAgIFs1NS43Njg5ODA0MjgyOTU3NSwgMzguMzM4OTc4MjQ1NzQxMzddLFxuLy8gICAgICAgICBbNTUuNjU5OTA5MDk2MjIxMjMsIDM4LjQ2ODYzODAzMDgxMDM4XSxcbi8vICAgICAgICAgWzU1LjY5NDIxMTI1NjA0MTIxLCAzOC41NDc3NDY2NzMxNzAwM11cbi8vICAgICBdXG4vLyBdO1xuXG5jb25zdCBwb2ludHMgPSBbXG4gICAgW1xuICAgICAgICBbOC45NjQ4NDM3NSwgNTUuMzA0MTM3NzM3NDAxMzldLFxuICAgICAgICBbNy44NjYyMTA5Mzc1LCA1NS4wNTMyMDI1ODUzNzExMl0sXG4gICAgICAgIFs4LjM0OTYwOTM3NSwgNTQuNjczODMwOTY1OTMxMTRdLFxuICAgICAgICBbOC42NTcyMjY1NjI1LCA1NC40NDQ0OTE3NjMzNTc2Ml0sXG4gICAgICAgIFs4LjMwNTY2NDA2MjUsIDUzLjkwNDMzODE1NjI3NDcwNF0sXG4gICAgICAgIFs3LjU1ODU5Mzc1LCA1My4zODMzMjgzNjc1NzE1Nl0sXG4gICAgICAgIFs3LjU1ODU5Mzc1LCA1Mi44MjkzMjA5MTAzMTM3M10sXG4gICAgICAgIFs3LjgyMjI2NTYyNTAwMDAwMSwgNTIuMjQxMjU2MTQ5NjYzNDFdLFxuICAgICAgICBbOC40Mzc1LCA1MS43NTQyNDAwNzQwMzM1MjVdLFxuICAgICAgICBbOC44MzMwMDc4MTI1LCA1MS4zMTY4ODA1MDQwNDU4NV0sXG4gICAgICAgIFs5LjE0MDYyNSwgNTAuODQ3NTcyOTUzNjUzODldLFxuICAgICAgICBbOS4xODQ1NzAzMTI0OTk5OTgsIDQ5LjE1Mjk2OTY1NjE3MDQyXSxcbiAgICAgICAgWzguNTI1MzkwNjI1LCA0OC41NzQ3ODk5MTA5Mjg4NjRdLFxuICAgICAgICBbOS4yMjg1MTU2MjUsIDQ4LjAxOTMyNDE4NDgwMTE4NV0sXG4gICAgICAgIFsxMC4wNjM0NzY1NjI1LCA0Ni42Nzk1OTQ0NjU2NDAyXSxcbiAgICAgICAgWzEwLjYzNDc2NTYyNSwgNDYuMjU1ODQ2ODE4NDgwMzE1XSxcbiAgICAgICAgWzExLjg2NTIzNDM3NSwgNDYuMzc3MjU0MjA1MTAwMjhdLFxuICAgICAgICBbMTIuOTE5OTIxODc0OTk5OTk4LCA0Ni45ODAyNTIzNTUyMTg4M10sXG4gICAgICAgIFsxMy4zNTkzNzUsIDQ3LjYwNjE2MzA0Mzg2ODc0XSxcbiAgICAgICAgWzEzLjk3NDYwOTM3NSwgNDguNDU4MzUxODgyODA4NjZdLFxuICAgICAgICBbMTQuMTA2NDQ1MzEyNSwgNDkuMjk2NDcxNjAyNjU4MDY2XSxcbiAgICAgICAgWzE0LjE5NDMzNTkzNzUsIDQ5Ljk3OTQ4Nzc2MTA4NjQ4XSxcbiAgICAgICAgWzE0LjA2MjUsIDUwLjg0NzU3Mjk1MzY1Mzg5XSxcbiAgICAgICAgWzEzLjg4NjcxODc0OTk5OTk5OCwgNTEuNjQ1Mjk0MDQ5MzA1NDA2XSxcbiAgICAgICAgWzEyLjgzMjAzMTI1LCA1My4xNzMxMTkyMDI2NDA2MzVdLFxuICAgICAgICBbMTIuMTI4OTA2MjUsIDU0LjA4NTE3MzQyMDg4Njc5XSxcbiAgICAgICAgWzExLjQ2OTcyNjU2MjUsIDU0Ljc3NTM0NTg1OTM2NDQ3XSxcbiAgICAgICAgWzguOTY0ODQzNzUsIDU1LjMwNDEzNzczNzQwMTM5XVxuICAgIF0sXG4gICAgW1xuICAgICAgICBbMTguNDU3MDMxMjUsIDQ4Ljk4MDIxNjk4NTM3NDk5NF0sXG4gICAgICAgIFsxNy42NjYwMTU2MjUsIDQ5LjI2NzgwNDU1MDYzNzUzXSxcbiAgICAgICAgWzE3LjQ0NjI4OTA2MjUsIDQ4LjgzNTc5NzQ2MjQzMDkzXSxcbiAgICAgICAgWzE3LjQ0NjI4OTA2MjUsIDQ4LjQyOTIwMDU1NTU2ODQxXSxcbiAgICAgICAgWzE4LjE5MzM1OTM3NSwgNDcuNzU0MDk3OTc5NjgwMDI2XSxcbiAgICAgICAgWzE4Ljk4NDM3NSwgNDcuMzY4NTk0MzQ1MjEzMzc0XSxcbiAgICAgICAgWzE5Ljc3NTM5MDYyNSwgNDcuMDEwMjI1NjU1NjgzNDg1XSxcbiAgICAgICAgWzIwLjg3NDAyMzQzNzUsIDQ2Ljc2OTk2ODQzMzU2OTgyXSxcbiAgICAgICAgWzIzLjI0NzA3MDMxMjUsIDQ2LjMxNjU4NDE4MTgyMjE4XSxcbiAgICAgICAgWzIzLjk1MDE5NTMxMjUsIDQ2LjQzNzg1Njg5NTAyNDIwNF0sXG4gICAgICAgIFsyNC4xNjk5MjE4NzUsIDQ2LjgwMDA1OTQ0Njc4NzMxNl0sXG4gICAgICAgIFsyMy43NzQ0MTQwNjI1LCA0Ny42NjUzODczNTYzMjY1NF0sXG4gICAgICAgIFsyMy4xMTUyMzQzNzQ5OTk5OTYsIDQ4LjI1Mzk0MTE0NDYzNDMxXSxcbiAgICAgICAgWzIyLjM2ODE2NDA2MjUsIDQ4LjU3NDc4OTkxMDkyODg2NF0sXG4gICAgICAgIFsxOC40NTcwMzEyNSwgNDguOTgwMjE2OTg1Mzc0OTk0XVxuICAgIF0sXG4gICAgW1xuICAgICAgICBbNS40OTMxNjQwNjI1LCA0NC4yNzY2NzEyNzM3NzUxODZdLFxuICAgICAgICBbNC40Mzg0NzY1NjI1LCA0My43MzkzNTIwNzkxNTQ3MDZdLFxuICAgICAgICBbNS4xNDE2MDE1NjI1LCA0My4wNjg4ODc3NzQxNjk2MjVdLFxuICAgICAgICBbNS40MDUyNzM0Mzc1LCA0Mi40ODgzMDE5Nzk2MDIyN10sXG4gICAgICAgIFs1Ljk3NjU2MjUsIDQxLjUwODU3NzI5NzQzOTM1XSxcbiAgICAgICAgWzYuNTQ3ODUxNTYyNSwgNDAuNzQ3MjU2OTYyODA0MjFdLFxuICAgICAgICBbNy44NjYyMTA5Mzc1LCA0MC40ODAzODE0MjkwODE3Ml0sXG4gICAgICAgIFs4LjY1NzIyNjU2MjUsIDQwLjQ4MDM4MTQyOTA4MTcyXSxcbiAgICAgICAgWzkuNTgwMDc4MTI1LCA0MS4wNzkzNTExNDk0Njg5OV0sXG4gICAgICAgIFsxMC4zMjcxNDg0Mzc1LCA0Mi42NTAxMjE4MTM2ODAyMl0sXG4gICAgICAgIFs5LjA5NjY3OTY4NzUsIDQ0LjI0NTE5OTAxNTIyMTI5XSxcbiAgICAgICAgWzguMjE3NzczNDM3NSwgNDQuNjIxNzU0MDk2MjMzMjRdLFxuICAgICAgICBbNS40OTMxNjQwNjI1LCA0NC4yNzY2NzEyNzM3NzUxODZdXG4gICAgXVxuXTtcblxuZXhwb3J0IHsgcG9pbnRzIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZ3MpIHtcclxuICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSBzdHJpbmdzID0gW3N0cmluZ3NdXHJcbiAgdmFyIGV4cHJzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSlcclxuICB2YXIgcGFydHMgPSBbXVxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0sIGV4cHJzW2ldIHx8ICcnKVxyXG4gIH1cclxuICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0pXHJcbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXHJcbn1cclxuIiwiaW1wb3J0IG1hdHJpeFV0aWxzIGZyb20gJy4vbWF0cml4VXRpbHMnO1xudmFyIGdsc2wgPSByZXF1aXJlKCdnbHNsaWZ5Jyk7XG52YXIgdmVydGV4U2hhZGVyID0gZ2xzbChbXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gbWF0NCB1X21hdHJpeDtcXG5hdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIHZlYzQoYV9wb3NpdGlvbiwgMC4wLCAxLjApO1xcbiAgICBnbF9Qb2ludFNpemUgPSAxMC4wO1xcbn1cXG5cIl0pO1xudmFyIGZyYWdtZW50U2hhZGVyID0gZ2xzbChbXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB1X2FuZ2xlO1xcbnVuaWZvcm0gZmxvYXQgdV93aWR0aDtcXG51bmlmb3JtIGZsb2F0IHVfc3BhY2luZztcXG51bmlmb3JtIGZsb2F0IHVfbGVuZ3RoO1xcbnVuaWZvcm0gZmxvYXQgdV9pbnRlcnZhbDtcXG51bmlmb3JtIGZsb2F0IHVfc3BlZWQ7XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxuZmxvYXQgcmFuZG9tIChmbG9hdCB2YWx1ZSkge1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKHZhbHVlKSAqIDEwMDAwMDAuMCk7XFxufVxcblxcbmZsb2F0IGRyYXdDb29yZChmbG9hdCBjb29yZCwgZmxvYXQgZmlsbCwgZmxvYXQgZ2FwKSB7XFxuICAgIGZsb2F0IHBhdHRlcm5MZW5ndGggPSBmaWxsICsgZ2FwO1xcbiAgICBmbG9hdCBtb2R1bG8gPSBtb2QoY29vcmQsIHBhdHRlcm5MZW5ndGgpO1xcbiAgICByZXR1cm4gc3RlcChtb2R1bG8sIHBhdHRlcm5MZW5ndGggLSBnYXApO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGZsb2F0IHJhaW5TdHJpcGVXaWR0aCA9IDIuMDtcXG4gICAgZmxvYXQgc3BhY2luZ0luQ2xpcENvb3JkaW5hdGVzID0gdV9zcGFjaW5nL3VfcmVzb2x1dGlvbi54O1xcblxcbiAgICBmbG9hdCByZWQgPSAwLjA7XFxuICAgIGZsb2F0IGdyZWVuID0gMC4wO1xcbiAgICBmbG9hdCBibHVlID0gMS4wO1xcblxcbiAgICBtYXQyIHJvdGF0aW9uTWF0cml4ID0gbWF0MihcXG4gICAgICAgIGNvcyh1X2FuZ2xlKSwgLXNpbih1X2FuZ2xlKSxcXG4gICAgICAgIHNpbih1X2FuZ2xlKSwgY29zKHVfYW5nbGUpXFxuICAgICk7XFxuXFxuICAgIHZlYzIgcm90YXRlZGZyYWdDb29yZCA9IHJvdGF0aW9uTWF0cml4ICogZ2xfRnJhZ0Nvb3JkLnh5O1xcbiAgICBmbG9hdCBwb3MgPSAtMS4wIC8gKCBnbF9GcmFnQ29vcmQueSAvIHVfcmVzb2x1dGlvbi55KTtcXG4gICAgZmxvYXQgeVNoaWZ0ID0gdV90aW1lICogdV9zcGVlZDtcXG4gICAgLy8gZmxvYXQgeVNoaWZ0ID0gdV90aW1lIC8qKiB1X3NwZWVkLyogKyByYW5kb20odV90aW1lKSovO1xcbiAgICBmbG9hdCBkcmF3WCA9IGRyYXdDb29yZChyb3RhdGVkZnJhZ0Nvb3JkLngsIHVfd2lkdGgsIHVfc3BhY2luZyk7XFxuICAgIGZsb2F0IGRyYXdZID0gZHJhd0Nvb3JkKHJvdGF0ZWRmcmFnQ29vcmQueSArIHlTaGlmdCwgdV9sZW5ndGgsIHVfaW50ZXJ2YWwpO1xcblxcbiAgICBmbG9hdCBkcmF3ID0gZHJhd1ggKiBkcmF3WTtcXG5cXG4gICAgaWYgKGRyYXcgPCAwLjkpIHtcXG4gICAgICAgIGRpc2NhcmQ7XFxuICAgIH1cXG5cXG4gICAgdmVjMyBjb2xvciA9IHZlYzMocmVkLCBncmVlbiwgYmx1ZSk7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG59XFxuXCJdKTtcblxuLyoqXG4gKiBhbmdsZVxuICogd2lkdGhcbiAqIHNwYWNpbmdcbiAqIGxlbmd0aFxuICogaW50ZXJ2YWxcbiAqIHNwZWVkXG4gKi9cbnZhciBSYWluID0gTC5Qb2x5Z29uLmV4dGVuZCh7XG4gICAgb3B0aW9uczoge1xuICAgICAgICBhbmdsZTogNjAsXG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICBzcGFjaW5nOiA1LFxuICAgICAgICB1cGRhdGVXaGVuWm9vbWluZzogdHJ1ZSxcbiAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudFNoYWRlclxuICAgIH0sXG5cbiAgICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICB2YXIgY2FudmFzLCBnbDtcblxuICAgICAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICAgICAgdGhpcy5fdGltZSA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcyA9IHRoaXMuX2NhbnZhcyA9IHRoaXMuX2luaXRDYW52YXMobWFwKTtcbiAgICAgICAgICAgIGdsID0gdGhpcy5fZ2wgPSB0aGlzLl9pbml0V2ViR2woY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRTaGFkZXJzKGdsKTtcblxuICAgICAgICBpZiAoZ2wpIHtcbiAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMC4wKTtcbiAgICAgICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVHxnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYW5lKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhbmUoKS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLl9wYW5lcy5vdmVybGF5UGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwLm9uKCdtb3ZlJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xuICAgICAgICBtYXAub24oJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkKSB7XG4gICAgICAgICAgICBtYXAub24oJ3pvb21hbmltJywgdGhpcy5fYW5pbWF0ZVpvb20sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICB9LFxuXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYW5lKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhbmUoKS5yZW1vdmVDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2NhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAub2ZmKCdtb3ZlZW5kJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xuXG4gICAgICAgIGlmIChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBtYXAub2ZmKCd6b29tYW5pbScsIHRoaXMuX2FuaW1hdGVab29tLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRUbzogZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICBtYXAuYWRkTGF5ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkcmF3U2NlbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1ZixcbiAgICAgICAgICAgIHBvbHlnb25zQ291bnQsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsO1xuXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG5cbiAgICAgICAgcG9seWdvbnNDb3VudCA9IHRoaXMuX2xhdGxuZ3MubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seWdvbnNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9seWdvbkxhbkxuZ3MgPSB0aGlzLl9sYXRsbmdzW2ldO1xuICAgICAgICAgICAgY291bnQgPSBwb2x5Z29uTGFuTG5ncy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU1hdHJpeChnbCk7XG4gICAgICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX0ZBTiwgY3VycmVudEluZGV4LCBjb3VudCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggKz0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgdGltZSA9IEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgdGltZUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X3RpbWVcIiksXG4gICAgICAgICAgICBkZWx0YVRpbWUgPSB0aW1lIC0gdGhpcy5fdGltZTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGVsdGFUaW1lKTtcblxuICAgICAgICBnbC51bmlmb3JtMWYodGltZUxvY2F0aW9uLCBkZWx0YVRpbWUpO1xuICAgICAgICAvLyBnbC51bmlmb3JtMWYodGltZUxvY2F0aW9uLCB0aW1lKTtcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUoKTtcblxuICAgICAgICAvLyB0aGlzLl90aW1lID0gdGltZTtcbiAgICB9LFxuXG4gICAgc2V0QW5nbGU6IGZ1bmN0aW9uIChhbmdsZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIGFuZ2xlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfYW5nbGVcIiksXG4gICAgICAgICAgICByYWQgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAgLSBNYXRoLlBJIC8gMi4wO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICBnbC51bmlmb3JtMWYoYW5nbGVMb2NhdGlvbiwgcmFkKTtcbiAgICAgICAgdGhpcy5fcmVkcmF3KCk7XG4gICAgfSxcblxuICAgIHNldFdpZHRoOiBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICB3aWR0aExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X3dpZHRoXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBnbC51bmlmb3JtMWYod2lkdGhMb2NhdGlvbiwgd2lkdGgpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0U3BhY2luZzogZnVuY3Rpb24gKHNwYWNpbmcpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICBzcGFjaW5nTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfc3BhY2luZ1wiKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc3BhY2luZyA9IHNwYWNpbmc7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGFjaW5nTG9jYXRpb24sIHNwYWNpbmcpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0TGVuZ3RoOiBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgbGVuZ3RoTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfbGVuZ3RoXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsZW5ndGhMb2NhdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fcmVkcmF3KCk7XG4gICAgfSxcblxuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fZ2wsXG4gICAgICAgICAgICBpbnRlcnZhbExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X2ludGVydmFsXCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgICBnbC51bmlmb3JtMWYoaW50ZXJ2YWxMb2NhdGlvbiwgaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgc2V0U3BlZWQ6IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIHNwZWVkTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfc3BlZWRcIik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGVlZExvY2F0aW9uLCBzcGVlZCk7XG4gICAgICAgIHRoaXMuX3JlZHJhdygpO1xuICAgIH0sXG5cbiAgICBfaW5pdENhbnZhczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ3dlYmdsLWNhbnZhcyBsZWFmbGV0LWxheWVyJyk7XG5cbiAgICAgICAgdmFyIG9yaWdpblByb3AgPSBMLkRvbVV0aWwudGVzdFByb3AoWyd0cmFuc2Zvcm1PcmlnaW4nLCAnV2Via2l0VHJhbnNmb3JtT3JpZ2luJywgJ21zVHJhbnNmb3JtT3JpZ2luJ10pO1xuICAgICAgICBjYW52YXMuc3R5bGVbb3JpZ2luUHJvcF0gPSAnNTAlIDUwJSc7XG5cbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuICAgICAgICBjYW52YXMud2lkdGggID0gc2l6ZS54O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZS55O1xuICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgICAgIHZhciBhbmltYXRlZCA9IHRoaXMuX21hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkO1xuICAgICAgICBMLkRvbVV0aWwuYWRkQ2xhc3MoY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9LFxuXG4gICAgX2luaXRTaGFkZXJzOiBmdW5jdGlvbiAoZ2wpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5fZ2V0U2hhZGVyKFwidmVydGV4XCIsIHRoaXMub3B0aW9ucy52ZXJ0ZXhTaGFkZXIpLFxuICAgICAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5fZ2V0U2hhZGVyKFwiZnJhZ21lbnRcIiwgdGhpcy5vcHRpb25zLmZyYWdtZW50U2hhZGVyKSxcbiAgICAgICAgICAgIHNoYWRlclByb2dyYW0gPSB0aGlzLnNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGluaXRpYWxpemUgdGhlIHNoYWRlciBwcm9ncmFtLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FKTtcblxuICAgICAgICB2YXIgYW5nbGVMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9hbmdsZVwiKSxcbiAgICAgICAgICAgIHNwYWNpbmdMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9zcGFjaW5nXCIpLFxuICAgICAgICAgICAgd2lkdGhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV93aWR0aFwiKSxcbiAgICAgICAgICAgIGxlbmd0aExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X2xlZ250aFwiKSxcbiAgICAgICAgICAgIGxlbmd0aExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X2xlbmd0aFwiKSxcbiAgICAgICAgICAgIGludGVydmFsTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfaW50ZXJ2YWxcIiksXG4gICAgICAgICAgICBzcGVlZExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJ1X3NwZWVkXCIpO1xuXG4gICAgICAgIC8vINGD0LPQvtC7INC00L7QttC00Y9cbiAgICAgICAgZ2wudW5pZm9ybTFmKGFuZ2xlTG9jYXRpb24sIHRoaXMub3B0aW9ucy5hbmdsZSAqIE1hdGguUEkgLyAxODAgLSBNYXRoLlBJIC8gMi4wKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHdpZHRoTG9jYXRpb24sIHRoaXMub3B0aW9ucy53aWR0aCk7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGFjaW5nTG9jYXRpb24sIHRoaXMub3B0aW9ucy5zcGFjaW5nKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGxlbmd0aExvY2F0aW9uLCB0aGlzLm9wdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGludGVydmFsTG9jYXRpb24sIHRoaXMub3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgICAgIGdsLnVuaWZvcm0xZihzcGVlZExvY2F0aW9uLCB0aGlzLm9wdGlvbnMuc3BlZWQpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSxcblxuICAgIF9pbml0V2ViR2w6IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgdmFyIGdsID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpIHx8IGNhbnZhcy5nZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG5cbiAgICAgICAgaWYgKCFnbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wuIFlvdXIgYnJvd3NlciBtYXkgbm90IHN1cHBvcnQgaXQuXCIpO1xuICAgICAgICAgICAgZ2wgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsO1xuICAgIH0sXG5cbiAgICAvLyDQstGA0LXQvNC10L3QvdCw0Y8g0YTRg9C90LrRhtC40Y8gLSDRiNC10LnQtNC10YDRiyDQvdCw0LTQviDQsdGD0LTQtdGCINC30LDQv9C40YHQsNGC0Ywg0LIg0YHQutC+0YPQv9C1XG4gICAgX2dldFNoYWRlcjogZnVuY3Rpb24gKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9nbCxcbiAgICAgICAgICAgIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlID09IFwidmVydGV4XCIgPyBnbC5WRVJURVhfU0hBREVSIDogZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcnM6IFwiICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZU1hdHJpeDogZnVuY3Rpb24gKGdsKSB7XG4gICAgICAgIHZhciBtYXRyaXhMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIiksXG4gICAgICAgICAgICBjcnMgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMsXG4gICAgICAgICAgICBjZW50ZXIgPSB0aGlzLl9tYXAuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBvdXRzaWRlQm91bmRzID0gTWF0aC5hYnMoY2VudGVyLmxhdCkgPiBjcnMucHJvamVjdGlvbi5NQVhfTEFUSVRVREUsXG4gICAgICAgICAgICBwcm9qZWN0RnVuYyA9IG91dHNpZGVCb3VuZHMgPyB0aGlzLl9wcm9qZWN0LmJpbmQodGhpcykgOiBjcnMucHJvamVjdC5iaW5kKGNycyksXG4gICAgICAgICAgICB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKSxcbiAgICAgICAgICAgIENSU0NlbnRlciA9IHByb2plY3RGdW5jKGNlbnRlciksXG4gICAgICAgICAgICB4ID0gQ1JTQ2VudGVyLngsXG4gICAgICAgICAgICB5ID0gQ1JTQ2VudGVyLnksXG4gICAgICAgICAgICBweFNpemUgPSBjcnMudHJhbnNmb3JtYXRpb24udW50cmFuc2Zvcm0oTC5wb2ludChbMSwxXSksIDEpLFxuICAgICAgICAgICAgbWFwU2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCksXG4gICAgICAgICAgICBDUlNVbml0c1BlclB4ID0gbWFwU2l6ZS5kaXZpZGVCeSggY3JzLnNjYWxlKHpvb20pICksXG4gICAgICAgICAgICBoYWxmID0gcHhTaXplLnNjYWxlQnkoQ1JTVW5pdHNQZXJQeCksXG4gICAgICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBtYXRyaXhVdGlscy5pZGVudGl0eU1hdHJpeCgpLFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXggPSBtYXRyaXhVdGlscy50cmFuc2xhdGlvbk1hdHJpeChbLXgsIC0geSwgMF0pLFxuICAgICAgICAgICAgc2NhbGVNYXRyaXggPSBtYXRyaXhVdGlscy5zY2FsZU1hdHJpeChbMS9oYWxmLngsIC0xL2hhbGYueSwgMV0pO1xuXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG1hdHJpeFV0aWxzLm1hdHJpeE11bHRpcGx5KHRyYW5zZm9ybU1hdHJpeCwgdHJhbnNsYXRpb25NYXRyaXgpO1xuICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBtYXRyaXhVdGlscy5tYXRyaXhNdWx0aXBseSh0cmFuc2Zvcm1NYXRyaXgsIHNjYWxlTWF0cml4KTtcblxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1hdHJpeExvY2F0aW9uLCBmYWxzZSwgdHJhbnNmb3JtTWF0cml4KTtcbiAgICB9LFxuXG4gICAgX3Byb2plY3Q6IGZ1bmN0aW9uIChsYXRsbmcpIHtcbiAgICAgICAgdmFyIFIgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMucHJvamVjdGlvbi5SLFxuICAgICAgICAgICAgZCA9IE1hdGguUEkgLyAxODAsXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihsYXRsbmcubGF0ICogZCk7XG5cblx0XHRyZXR1cm4gTC5wb2ludChcblx0XHRcdFIgKiBsYXRsbmcubG5nICogZCxcblx0XHRcdFIgKiBNYXRoLmxvZygoMSArIHNpbikgLyAoMSAtIHNpbikpIC8gMik7XG4gICAgfSxcblxuICAgIF9yZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9wTGVmdCA9IHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF5ZXJQb2ludChbMCwgMF0pO1xuICAgICAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fY2FudmFzLCB0b3BMZWZ0KTtcblxuICAgICAgICB0aGlzLl9yZWRyYXcoKTtcbiAgICB9LFxuXG4gICAgX3Jlc2l6ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHNpemUgPSBlLm5ld1NpemU7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoICA9IHNpemUueDtcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHNpemUueTtcblxuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgIH0sXG5cbiAgICBfcmVkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX2dsLFxuICAgICAgICAgICAgcG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpLFxuICAgICAgICAgICAgcHJvamVjdExhdExuZyA9IHRoaXMuX3Byb2plY3RMYXRMbmcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGJ1ZkFycmF5ID0gW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLl9sYXRsbmdzKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxsKSB7cmV0dXJuIHByb2plY3RMYXRMbmcobGwpfSlcbiAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICAgIGJ5dGVzUGVyVmVydGV4ID0gOCxcbiAgICAgICAgICAgIGJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgICAgIHZhciByZXNvbHV0aW9uTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBcInVfcmVzb2x1dGlvblwiKTtcbiAgICAgICAgZ2wudW5pZm9ybTJmdihyZXNvbHV0aW9uTG9jYXRpb24sIFt0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHRdKTtcblxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoYnVmQXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgICAgdGhpcy5fYmluZEF0dHJpYihwb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIGJ5dGVzUGVyVmVydGV4LCAwKTtcblxuICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICAvLyBTbWFsbCB1dGlsaXR5IGZ1bmN0aW9uXG4gICAgX2JpbmRBdHRyaWI6IGZ1bmN0aW9uIChhdHRyaWJJbmRleCwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGF0dHJpYkluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJJbmRleCk7XG4gICAgICAgIHRoaXMuX2dsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmliSW5kZXgsIHNpemUsIHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICB9LFxuXG4gICAgX3Byb2plY3RMYXRMbmc6IGZ1bmN0aW9uIChsYXRMbmcpIHtcbiAgICAgICAgdmFyIGNyc1BvaW50ID0gdGhpcy5fbWFwLm9wdGlvbnMuY3JzLnByb2plY3QobGF0TG5nKTtcblxuICAgICAgICByZXR1cm4gW2Nyc1BvaW50LngsIGNyc1BvaW50LnldO1xuICAgIH0sXG5cbiAgICBfYW5pbWF0ZVpvb206IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IHRoaXMuX21hcC5nZXRab29tU2NhbGUoZS56b29tKSxcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcbiAgICAgICAgaWYgKEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID0gTC5Eb21VdGlsLmdldFRyYW5zbGF0ZVN0cmluZyhvZmZzZXQpICsgJyBzY2FsZSgnICsgc2NhbGUgKyAnKSc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIHJhaW4gPSBmdW5jdGlvbihsYXRsbmdzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBMLlJhaW4obGF0bG5ncywgb3B0aW9ucyk7XG59O1xuXG5MLlJhaW4gPSBSYWluO1xuTC5yYWluID0gcmFpbjtcblxuZXhwb3J0IHtcbiAgICBSYWluLFxuICAgIHJhaW5cbn1cbiIsImNvbnN0IG1hdHJpeFV0aWxzID0ge1xuICAgIG1hdHJpeE11bHRpcGx5OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYTAwID0gYVswKjQrMF07XG4gICAgICAgIHZhciBhMDEgPSBhWzAqNCsxXTtcbiAgICAgICAgdmFyIGEwMiA9IGFbMCo0KzJdO1xuICAgICAgICB2YXIgYTAzID0gYVswKjQrM107XG4gICAgICAgIHZhciBhMTAgPSBhWzEqNCswXTtcbiAgICAgICAgdmFyIGExMSA9IGFbMSo0KzFdO1xuICAgICAgICB2YXIgYTEyID0gYVsxKjQrMl07XG4gICAgICAgIHZhciBhMTMgPSBhWzEqNCszXTtcbiAgICAgICAgdmFyIGEyMCA9IGFbMio0KzBdO1xuICAgICAgICB2YXIgYTIxID0gYVsyKjQrMV07XG4gICAgICAgIHZhciBhMjIgPSBhWzIqNCsyXTtcbiAgICAgICAgdmFyIGEyMyA9IGFbMio0KzNdO1xuICAgICAgICB2YXIgYTMwID0gYVszKjQrMF07XG4gICAgICAgIHZhciBhMzEgPSBhWzMqNCsxXTtcbiAgICAgICAgdmFyIGEzMiA9IGFbMyo0KzJdO1xuICAgICAgICB2YXIgYTMzID0gYVszKjQrM107XG4gICAgICAgIHZhciBiMDAgPSBiWzAqNCswXTtcbiAgICAgICAgdmFyIGIwMSA9IGJbMCo0KzFdO1xuICAgICAgICB2YXIgYjAyID0gYlswKjQrMl07XG4gICAgICAgIHZhciBiMDMgPSBiWzAqNCszXTtcbiAgICAgICAgdmFyIGIxMCA9IGJbMSo0KzBdO1xuICAgICAgICB2YXIgYjExID0gYlsxKjQrMV07XG4gICAgICAgIHZhciBiMTIgPSBiWzEqNCsyXTtcbiAgICAgICAgdmFyIGIxMyA9IGJbMSo0KzNdO1xuICAgICAgICB2YXIgYjIwID0gYlsyKjQrMF07XG4gICAgICAgIHZhciBiMjEgPSBiWzIqNCsxXTtcbiAgICAgICAgdmFyIGIyMiA9IGJbMio0KzJdO1xuICAgICAgICB2YXIgYjIzID0gYlsyKjQrM107XG4gICAgICAgIHZhciBiMzAgPSBiWzMqNCswXTtcbiAgICAgICAgdmFyIGIzMSA9IGJbMyo0KzFdO1xuICAgICAgICB2YXIgYjMyID0gYlszKjQrMl07XG4gICAgICAgIHZhciBiMzMgPSBiWzMqNCszXTtcbiAgICAgICAgcmV0dXJuIFthMDAgKiBiMDAgKyBhMDEgKiBiMTAgKyBhMDIgKiBiMjAgKyBhMDMgKiBiMzAsXG4gICAgICAgICAgICBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjEgKyBhMDMgKiBiMzEsXG4gICAgICAgICAgICBhMDAgKiBiMDIgKyBhMDEgKiBiMTIgKyBhMDIgKiBiMjIgKyBhMDMgKiBiMzIsXG4gICAgICAgICAgICBhMDAgKiBiMDMgKyBhMDEgKiBiMTMgKyBhMDIgKiBiMjMgKyBhMDMgKiBiMzMsXG4gICAgICAgICAgICBhMTAgKiBiMDAgKyBhMTEgKiBiMTAgKyBhMTIgKiBiMjAgKyBhMTMgKiBiMzAsXG4gICAgICAgICAgICBhMTAgKiBiMDEgKyBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzEsXG4gICAgICAgICAgICBhMTAgKiBiMDIgKyBhMTEgKiBiMTIgKyBhMTIgKiBiMjIgKyBhMTMgKiBiMzIsXG4gICAgICAgICAgICBhMTAgKiBiMDMgKyBhMTEgKiBiMTMgKyBhMTIgKiBiMjMgKyBhMTMgKiBiMzMsXG4gICAgICAgICAgICBhMjAgKiBiMDAgKyBhMjEgKiBiMTAgKyBhMjIgKiBiMjAgKyBhMjMgKiBiMzAsXG4gICAgICAgICAgICBhMjAgKiBiMDEgKyBhMjEgKiBiMTEgKyBhMjIgKiBiMjEgKyBhMjMgKiBiMzEsXG4gICAgICAgICAgICBhMjAgKiBiMDIgKyBhMjEgKiBiMTIgKyBhMjIgKiBiMjIgKyBhMjMgKiBiMzIsXG4gICAgICAgICAgICBhMjAgKiBiMDMgKyBhMjEgKiBiMTMgKyBhMjIgKiBiMjMgKyBhMjMgKiBiMzMsXG4gICAgICAgICAgICBhMzAgKiBiMDAgKyBhMzEgKiBiMTAgKyBhMzIgKiBiMjAgKyBhMzMgKiBiMzAsXG4gICAgICAgICAgICBhMzAgKiBiMDEgKyBhMzEgKiBiMTEgKyBhMzIgKiBiMjEgKyBhMzMgKiBiMzEsXG4gICAgICAgICAgICBhMzAgKiBiMDIgKyBhMzEgKiBiMTIgKyBhMzIgKiBiMjIgKyBhMzMgKiBiMzIsXG4gICAgICAgICAgICBhMzAgKiBiMDMgKyBhMzEgKiBiMTMgKyBhMzIgKiBiMjMgKyBhMzMgKiBiMzNdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gICAgICAgIGlkZW50aXR5TWF0cml4OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIDEsICAwLCAgMCwgIDAsXG4gICAgICAgICAgICAgICAgMCwgIDEsICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgMCwgIDEsICAwLFxuICAgICAgICAgICAgICAgIDAsICAwLCAgMCwgIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBSZXR1cm5zIGEgdHJhbnNsYXRpb24gbWF0cml4XG4gICAgICAgIC8vIE9mZnNldCBpcyBhIDMtZWxlbWVudCBhcnJheVxuICAgICAgICB0cmFuc2xhdGlvbk1hdHJpeDogZnVuY3Rpb24gKHQpIHtcblxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAxLCAgICAwLCAgICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgICAxLCAgICAwLCAgMCxcbiAgICAgICAgICAgICAgICAwLCAgICAwLCAgICAxLCAgMCxcbiAgICAgICAgICAgICAgICB0WzBdLCB0WzFdLCB0WzJdLCAgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBSZXR1cm5zIGEgc2NhbGUgbWF0cml4XG4gICAgICAgIC8vIFNjYWxlIGlzIGEgMy1lbGVtZW50IGFycmF5XG4gICAgICAgIHNjYWxlTWF0cml4OiBmdW5jdGlvbiAocykge1xuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHNbMF0sICAgIDAsICAgIDAsICAwLFxuICAgICAgICAgICAgICAgIDAsIHNbMV0sICAgIDAsICAwLFxuICAgICAgICAgICAgICAgIDAsICAgIDAsIHNbMl0sICAwLFxuICAgICAgICAgICAgICAgIDAsICAgIDAsICAgIDAsICAxXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdHJpeFV0aWxzO1xuIl19
