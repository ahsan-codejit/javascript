const calculatorOutPutter = (area) => {
	const proto = {
		JSON(){
			return JSON.stringify({
				area: this.area
			});
		},
		HAML(){
			return area;
		},
		HTML(){
			return `<h1>
					Sum of the areas of provided shapes: ${this.area}
				</h1>`;
		},
		JADE(){
			return area;
		}
	};
	return Object.assign(Object.create(proto), {area});
};
module.exports = calculatorOutPutter;