import React from 'react'

 class DynamicForm extends React.Component {
    state = {
        numberOfTerms: '0',
        addTerms: false
    }

    addTerms = (event) => {
        event.preventDefault();
        this.setState({addTerms: true});
        var test = [];
        for(var i = 0; i < this.state.numberOfTerms; i++) {
            test.push(i);
        }
        this.setState({numberOfTerms: test});
        console.log(this.state.numberOfTerms,'sathish');
    }

    
    onChange = (event) => this.setState({ [event.target.name]: event.target.value});

    


render() { 
    
    if(this.state.addTerms === false) {
    return(
        <div className="App">
        <h2>Choose how many terms you wish to add:</h2>
        <input type="number" name="numberOfTerms" min="1" max="10" value={this.state.numberOfTerms} onChange={this.onChange} required></input>
        <input type="button" onClick={this.addTerms} value="submit"></input>
        </div>
    )
    } 
    
    else if(this.state.addTerms === true) {
        return (
        this.state.numberOfTerms.map((i) => (
            <div key={i} className="App">
                <input type="text" placeholder='Enter your Name'></input> <input type="text" placeholder="Enter Your Mobile No."></input>
            </div>
        )))
    } 
    
    
}
}

export default DynamicForm;