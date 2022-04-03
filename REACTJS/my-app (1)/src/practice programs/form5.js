import React from 'react';
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            mbl:'',
            date:'',
            data:[]
        }
        this.onChange = this.onChange.bind(this);
        this.formonSubmit = this.formonSubmit.bind(this);

    }
    onChange = (e) => {
        let name = this.state.name;
        let value = this.state.value;
        this.setState({[name]:value})

    } 

    formonSubmit = (e) => {
        e.preveventDefault();
        let details = this.state.data
        details.push(
            {
                name:this.state.name,
                mbl:this.state.mbl,
                date:this.state.date
            }
        );
        this.setState({data:details})
        
        }

    render(){
        console.log(this.state.data);
    
        return(<>
        <form onSubmit = {this.formonSubmit}>
        <input type='text' placeholder='Enter Your Name' name ='name' value={this.state.name} onChange={this.onChange}/>
        <input type='number' placeholder="ENter your mobile Number" name = 'mbl' value={this.value.mbl} onChange={this.onChange}/>
        <input type='date' value={this.state.date} name = 'date' onChange={this.onChange}/>
        <input type='submit' value='submit'/>
        </form>
        </>);
    }
}
export default Form;