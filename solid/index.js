const circle = require('./circle');
const square = require('./square');
const areaCalculator = require('./areaCalculator');
const calculatorOutPutter = require('./calculatorOutPutter');

const shapes = [
	circle(2),
	square(5),
	square(6)
];

const areas = areaCalculator(shapes);
// console.log(areas.output());

const output = calculatorOutPutter(areas.sum());
console.log(output.JSON());