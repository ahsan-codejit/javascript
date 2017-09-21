const shapeInterface = require('./shapeInterface');
const solidShapeInterface = require('./solidShapeInterface');
const manageShapeInterface = require('./manageShapeInterface');
const cubo = (length) => {
	const proto = {
		length,
		type: 'Cubo',
		area: (args) => Math.pow(args.length, 2),
		volume: (args) => Math.pow(args.length, 3)
	};

	const shapeInterfaceObj = shapeInterface(proto);
	const solidShapeInterfaceObj = solidShapeInterface(proto);
	const abstraction = manageShapeInterface(()=>shapeInterfaceObj.area()+solidShapeInterfaceObj.volume());
	const compositeObj = Object.assign({}, shapeInterfaceObj, solidShapeInterfaceObj, abstraction);
	return Object.assign(Object.create(compositeObj), {length});
};
module.exports = cubo;