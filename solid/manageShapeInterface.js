const manageShapeInterface = (fn) => ({
	type: 'manageShapeInterface',
	calculate: () => fn()
});
module.exports = manageShapeInterface;