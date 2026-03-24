// Function declaration
function calculateArea(width, height) {
	let area = width * height;
	return area;
}

// Function expression
const areaRectangle = function (width, height) {
	return width * height;
};

// Arrow function expression
const areaRectangle2 = (width, height) => width * height;

console.log(calculateArea(5, 10));
console.log(areaRectangle(7, 12));
console.log(areaRectangle2(4, 8));
