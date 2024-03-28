Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
arithmetic operators.

ans:

const radius = 12;  // Radius of the circle
//Formula for area of the circle: area = π * radius^2
const pi = Math.PI; // Approximate value of pi
const area = pi * Math.pow(radius, 2);
console.log("Area of the circle:", area);