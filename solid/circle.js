const shapeInterface = require('./shapeInterface');
const manageShapeInterface = require('./manageShapeInterface');
const circle = (radius) => {
	const proto = {
		radius,
		type: 'Circle',
		area(args){
			return Math.PI*Math.pow(args.radius, 2);
		}
	};
	const interfaceObj = shapeInterface(proto);
	const abstraction = manageShapeInterface(()=>interfaceObj.area());
	const compositeObj = Object.assign({}, interfaceObj, abstraction);
	return Object.assign(Object.create(compositeObj), {radius});
};

module.exports = circle;