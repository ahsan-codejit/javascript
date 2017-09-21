const areaCalculator = require('./areaCalculator');
const volumeCalculator = (shapes) => {
	const proto = {
		type: 'volumeCalculator'
	};
	const areaCalculatorProto = Object.getPrototypeOf(areaCalculator());
	const inherit = Object.assign({}, areaCalculatorProto, proto);
	return Object.assign(Object.create(inherit), {shapes});
};

module.exports = volumeCalculator;