import matrixUtils from './matrixUtils';
var glsl = require('glslify');
var vertexShader = glsl('./shaders/vertex.glsl');
var fragmentShader = glsl('./shaders/fragment.glsl');

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

    onAdd: function (map) {
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
            gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
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

    onRemove: function (map) {
        if (this.options.pane) {
            this.getPane().removeChild(this._canvas);
        }else{
            map.getPanes().overlayPane.removeChild(this._canvas);
        }

        map.off('moveend', this._reset, this);

        if (map.options.zoomAnimation) {
            map.off('zoomanim', this._animateZoom, this);
        }
    },

    addTo: function (map) {
        map.addLayer(this);
        return this;
    },

    drawScene: function () {
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

    render: function () {
        var gl = this._gl,
            time = L.Util.requestAnimFrame(this.render.bind(this)),
            timeLocation = gl.getUniformLocation(this.shaderProgram, "u_time"),
            deltaTime = time - this._time;

            // console.log(deltaTime);

        gl.uniform1f(timeLocation, deltaTime);
        // gl.uniform1f(timeLocation, time);
        this.drawScene();

        // this._time = time;
    },

    setAngle: function (angle) {
        var gl = this._gl,
            angleLocation = gl.getUniformLocation(this.shaderProgram, "u_angle"),
            rad = angle * Math.PI / 180 - Math.PI / 2.0;

        this.options.angle = angle;
        gl.uniform1f(angleLocation, rad);
        this._redraw();
    },

    setWidth: function (width) {
        var gl = this._gl,
            widthLocation = gl.getUniformLocation(this.shaderProgram, "u_width");

        this.options.width = width;
        gl.uniform1f(widthLocation, width);
        this._redraw();
    },

    setSpacing: function (spacing) {
        var gl = this._gl,
            spacingLocation = gl.getUniformLocation(this.shaderProgram, "u_spacing");

        this.options.spacing = spacing;
        gl.uniform1f(spacingLocation, spacing);
        this._redraw();
    },

    setLength: function (length) {
        var gl = this._gl,
            lengthLocation = gl.getUniformLocation(this.shaderProgram, "u_length");

        this.options.length = length;
        gl.uniform1f(lengthLocation, length);
        this._redraw();
    },

    setInterval: function (interval) {
        var gl = this._gl,
            intervalLocation = gl.getUniformLocation(this.shaderProgram, "u_interval");

        this.options.interval = interval;
        gl.uniform1f(intervalLocation, interval);
        this._redraw();
    },

    setSpeed: function (speed) {
        var gl = this._gl,
            speedLocation = gl.getUniformLocation(this.shaderProgram, "u_speed");

        this.options.speed = speed;
        gl.uniform1f(speedLocation, speed);
        this._redraw();
    },

    _initCanvas: function () {
        var canvas = L.DomUtil.create('canvas', 'webgl-canvas leaflet-layer');

        var originProp = L.DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
        canvas.style[originProp] = '50% 50%';

        var size = this._map.getSize();
        canvas.width  = size.x;
        canvas.height = size.y;
        canvas.style.position = 'absolute';

        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
        L.DomUtil.addClass(canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

        return canvas;
    },

    _initShaders: function (gl) {
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
            speedLocation = gl.getUniformLocation(this.shaderProgram, "u_speed");

        // угол дождя
        gl.uniform1f(angleLocation, this.options.angle * Math.PI / 180 - Math.PI / 2.0);
        gl.uniform1f(widthLocation, this.options.width);
        gl.uniform1f(spacingLocation, this.options.spacing);
        gl.uniform1f(lengthLocation, this.options.length);
        gl.uniform1f(intervalLocation, this.options.interval);
        gl.uniform1f(speedLocation, this.options.speed);

        this.render();
    },

    _initWebGl: function (canvas) {
        var gl = null;

        try {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        }
        catch(e) {}

        if (!gl) {
            console.warn("Unable to initialize WebGL. Your browser may not support it.");
            gl = null;
        }

        return gl;
    },

    // временная функция - шейдеры надо будет записать в скоупе
    _getShader: function (type, source) {
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

    _updateMatrix: function (gl) {
        var matrixLocation = gl.getUniformLocation(this.shaderProgram, "u_matrix"),
            crs = this._map.options.crs,
            center = this._map.getCenter(),
            outsideBounds = Math.abs(center.lat) > crs.projection.MAX_LATITUDE,
            projectFunc = outsideBounds ? this._project.bind(this) : crs.project.bind(crs),
            zoom = this._map.getZoom(),
            CRSCenter = projectFunc(center),
            x = CRSCenter.x,
            y = CRSCenter.y,
            pxSize = crs.transformation.untransform(L.point([1,1]), 1),
            mapSize = this._map.getSize(),
            CRSUnitsPerPx = mapSize.divideBy( crs.scale(zoom) ),
            half = pxSize.scaleBy(CRSUnitsPerPx),
            transformMatrix = matrixUtils.identityMatrix(),
            translationMatrix = matrixUtils.translationMatrix([-x, - y, 0]),
            scaleMatrix = matrixUtils.scaleMatrix([1/half.x, -1/half.y, 1]);

        transformMatrix = matrixUtils.matrixMultiply(transformMatrix, translationMatrix);
        transformMatrix = matrixUtils.matrixMultiply(transformMatrix, scaleMatrix);

        gl.uniformMatrix4fv(matrixLocation, false, transformMatrix);
    },

    _project: function (latlng) {
        var R = this._map.options.crs.projection.R,
            d = Math.PI / 180,
            sin = Math.sin(latlng.lat * d);

		return L.point(
			R * latlng.lng * d,
			R * Math.log((1 + sin) / (1 - sin)) / 2);
    },

    _reset: function () {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);

        this._redraw();
    },

    _resize: function (e) {
        var size = e.newSize;

        this._canvas.width  = size.x;
        this._canvas.height = size.y;

        this._reset();
    },

    _redraw: function () {
        var gl = this._gl,
            positionLocation = gl.getAttribLocation(this.shaderProgram, "a_position"),
            projectLatLng = this._projectLatLng.bind(this),
            bufArray = [].concat.apply([], this._latlngs)
                .map(function (ll) {return projectLatLng(ll)})
                .reduce(function (previousValue, currentValue) {
                return previousValue.concat(currentValue);
            }, []),
            bytesPerVertex = 8,
            buf = gl.createBuffer();

        var resolutionLocation = gl.getUniformLocation(this.shaderProgram, "u_resolution");
        gl.uniform2fv(resolutionLocation, [this._canvas.width, this._canvas.height]);

        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufArray), gl.STATIC_DRAW);

        this._bindAttrib(positionLocation, 2, gl.FLOAT, false, bytesPerVertex, 0);

        // this.render();
    },

    // Small utility function
    _bindAttrib: function (attribIndex, size, type, normalized, stride, offset) {
        if (attribIndex === -1) return;
        this._gl.enableVertexAttribArray(attribIndex);
        this._gl.vertexAttribPointer(attribIndex, size, type, normalized, stride, offset);
    },

    _projectLatLng: function (latLng) {
        var crsPoint = this._map.options.crs.project(latLng);

        return [crsPoint.x, crsPoint.y];
    },

    _animateZoom: function (e) {
        var scale = this._map.getZoomScale(e.zoom),
            offset = this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());
        if (L.DomUtil.setTransform) {
            L.DomUtil.setTransform(this._canvas, offset, scale);

        } else {
            this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ')';
        }
    }
});

var rain = function(latlngs, options) {
    return new L.Rain(latlngs, options);
};

L.Rain = Rain;
L.rain = rain;

export {
    Rain,
    rain
}
