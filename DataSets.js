class DataSets {

	constructor() {
		console.log("dataSets constructuctor");
		this.num_of_data_set = 0;
		this.data_sets = [];
		this.load();
	}

	create_data_set(csv_string, dataset_name){
		this.data_sets[this.num_of_data_set] = new DataSet;
		this.data_sets[this.num_of_data_set].import_csv(csv_string,dataset_name);
		this.num_of_data_set++;

		this.reset_html();
		this.save();
	}

	delet_data_set(){
		
	}

	load () {
		if (localStorage.getItem('data_sets') != null ){
			let load_obj = localStorage.getItem('data_sets');
			load_obj = JSON.parse(load_obj);

			this.num_of_data_set = load_obj.num_of_data_set;
			this.data_sets = load_obj.data_sets;

			this.reset_html();
		}
	}

	save () {
		localStorage.setItem('data_sets', JSON.stringify(this));
	}

	reset_html () {

		let r = document.getElementById('list_of_data_set');
		r.innerHTML = "";

		for (let i = 0; i < this.num_of_data_set ; i++) { 
			let t = document.createElement("div");
			t.classList.add('form-check');

			let t1 = document.createElement("label");
			t1.classList.add('form-check-label');

			let t2 = document.createElement("input");
			t2.classList.add('form-check-input');
			t2.type =  'radio';
			t2.name = "list_of_data_set_radio";
			t2.id =  "dss_"+i;
			t2.value = i;
			t2.onclick = function() { select_ds(i); };

			let t3 = document.createElement("a");
			t3.innerHTML = this.data_sets[i].name;

			t1.appendChild(t2);
			t1.appendChild(t3);
			t.appendChild(t1);
			r.appendChild(t);
		}
	}
}