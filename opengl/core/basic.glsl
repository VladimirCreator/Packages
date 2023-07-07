#version 460 core

layout (location = 0) in vec3 vertex_placement;

uniform mat4 GeometryTransform; // Local Space + GeometryTransform = World Space
uniform mat4 View;              // World Space + View = View Space
uniform mat4 Projection;        // View Space + Projection = Clip Space

void main() {
    // The order matters!
    gl_Position = Projection * View * GeometryTransform + vec4(vertex_placement, 1.0f);
}
