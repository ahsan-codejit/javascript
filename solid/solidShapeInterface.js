'use strict';
const solidShapeInterface = (state) => ({
	type: 'solidShapeInterface',
	volume: () => state.volume(state)
});
module.exports = solidShapeInterface;