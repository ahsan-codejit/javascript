const shapeInterface = require('./shapeInterface');
const square = (length) => {
	const proto = {
		length,
		type: 'Square',
		area(args){
			return Math.pow(args.length,2);
		}
	};
	const interfaceObj = shapeInterface(proto);
	const compositeObj = Object.assign({}, interfaceObj);
	return Object.assign(Object.create(compositeObj), {length});
};
module.exports = square;