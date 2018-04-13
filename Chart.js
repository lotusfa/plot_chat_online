class Chart{
	constructor(name,d1,d2,type) {
		this.name = name;
		this.d1 = d1;
		this.d2 = d2;
		this.type = type;
	}

	plot(){
		if (this.type == 'pie') 
			this.plot_pie();
		else if (this.type == 'scatter') 
			this.plot_line();
	}

	plot_line(){
		var trace1 = {
		  x: this.d1,
		  y: this.d2,
		  type: 'scatter'
		};

		let layout = {
		  height: 400,
		  width: 500,
		  title: this.name
		};

		var data = [trace1];

		console.log(data);
		Plotly.newPlot('chart', data, layout);
	}

	plot_pie(){
		let data = [{
		  labels: this.d1,
		  values: this.d2,
		  type: this.type
		}];

		let layout = {
		  height: 400,
		  width: 500,
		  title: this.name
		};

		console.log(data);
		Plotly.newPlot('chart', data, layout);
	}
}