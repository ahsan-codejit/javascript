const areaCalculator = (shapes) => {
	const proto = {
		sum(){
			console.log(`sum`);
			const area = [];
			for(let shape of this.shapes){
				if(Object.getPrototypeOf(shape).type==='shapeInterface'){
					area.push(shape.area());
				} else {
					throw new Error(`${shape.type} is not a shapeInterface object`);
				}
			}
			return area.reduce((v, c)=>c+=v);
		}
	};
	return Object.assign(Object.create(proto), {shapes});
};

module.exports = areaCalculator;