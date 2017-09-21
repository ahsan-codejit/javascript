'use strict';
const shapeInterface = (state) => ({
	type: 'shapeInterface',
	area: () => state.area(state)
});

module.exports = shapeInterface;