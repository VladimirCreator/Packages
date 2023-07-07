#version 460 core

layout (location = 0) in vec3 vertex_placement;

void main() {
    gl_Position = vec4(vertex_placement, 1.0f);
}
