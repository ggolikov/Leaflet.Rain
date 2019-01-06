precision mediump float;
uniform vec2 u_resolution;
uniform float u_angle;
uniform float u_width;
uniform float u_spacing;
uniform float u_length;
uniform float u_interval;
uniform float u_speed;
uniform float u_time;

float random (float value) {
    return fract(sin(value) * 1000000.0);
}

float drawCoord(float coord, float fill, float gap) {
    float patternLength = fill + gap;
    float modulo = mod(coord, patternLength);
    return step(modulo, patternLength - gap);
}

void main() {
    float rainStripeWidth = 2.0;
    float spacingInClipCoordinates = u_spacing/u_resolution.x;

    float red = 0.0;
    float green = 0.0;
    float blue = 1.0;

    mat2 rotationMatrix = mat2(
        cos(u_angle), -sin(u_angle),
        sin(u_angle), cos(u_angle)
    );

    vec2 rotatedfragCoord = rotationMatrix * gl_FragCoord.xy;
    float pos = -1.0 / ( gl_FragCoord.y / u_resolution.y);
    float yShift = u_time * u_speed;
    // float yShift = u_time /** u_speed/* + random(u_time)*/;
    float drawX = drawCoord(rotatedfragCoord.x, u_width, u_spacing);
    float drawY = drawCoord(rotatedfragCoord.y + yShift, u_length, u_interval);

    float draw = drawX * drawY;

    if (draw < 0.9) {
        discard;
    }

    vec3 color = vec3(red, green, blue);

	gl_FragColor = vec4(color, 1.0);
}
