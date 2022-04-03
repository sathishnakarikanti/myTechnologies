import React from 'react';

class Dropdownl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries : [],
			states : [],
			cities : [],
			selectedCountry : '--Select Country--',
			selectedState : '--Select State--'
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			countries : [
				{ name: 'USA', states: [ {name: 'Texas', cities: ['Texas1', 'Texas2', 'Texas3']},{name: 'Washington Dc', cities: ['Washington1', 'Washington2', 'Washington3']},{name: 'Newyork', cities: ['Newyork1', 'Newyork2', 'Newyork3']} ] },
				{ name: 'Pakistan', states: [ {name: 'Punjab', cities: ['Punjab1','Punjab2','Punjab3']},{name: 'Islamabad', cities: ['Islamabad1','Islamabad2','Islamabad3']},{name: 'sindhu', cities: ['sindhu1','sindhu2','sindhu3']} ] },
				{ name: 'India', states: [ {name: 'Telengana', cities: ['Nalgonda', 'warangal', 'hyderabad', 'rangareaddy']},{name: 'Andhrapradesh', cities: ['guntur', 'kurnool', 'kadapa']},{name: 'Tamilinadu', cities: ['chennai1','chennai2', 'chennai3']} ] },
			]
		});
	}
  
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	}
	
	render() {
		return (
			<div id="container">
				
	
				<div>
					<label>Country:</label>
					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>--Choose Country--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State:</label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
					<label>City:</label>
					<select placeholder="City">
						<option>--Choose City--</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default Dropdownl;