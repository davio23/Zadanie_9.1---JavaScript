var a= 10;
var h= 6;
function getTriangleArea(a, h) {
if (a > 0 && h > 0) {
return a*h/2;
}
else {
console.log("Nieprawidłowe dane");
}
}
var triangleArea = getTriangleArea(10,6);
var triangle1Area = getTriangleArea(10,12);
var triangle2Area = getTriangleArea(4,6);
var triangle3Area = getTriangleArea(7,9);
console.log(triangleArea);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
