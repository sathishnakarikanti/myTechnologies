import React, { Component } from 'react';
import Select from 'react-select';
class Multi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playGame:[],
            displayvalue:[],
            getvalue:[],
        
           
            
        }
        this.ddlonChange=this.ddlonChange.bind(this);

    }

componentDidMount(){
        this.setState({
            playGame : [
            {
                value:1,
                label:'Kabaddi'
            },
            {
                value:2,
                label:'Cricket'
            },
            {
                value:3,
                label:'carrams'
            },
            {
                value:4,
                label:'chess'
            }
        ]
        });
    }
    ddlonChange = (e) => {
         // ddlonChange = (e) => {
    //     let name = e.target.name;
    // }
    // ddlonsubmit = (e) => {
    //     e.preventDefault();
    //     let details = this.state.displayvalue
    //     details.push({
    //         fdata:this.state.name
    //     });
    //     this.setState({displayvalue:details})

    // }
        

    
    
    }
    

    
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                <Select isMulti id='name'  options={this.state.playGame} onChange={this.ddlonChange}></Select>
           <br/>       <button>click</button>
                 <center><h1>Select the Games:{this.displayvalue}</h1></center>
                 </form>
                </div>

        );

    }
}
export default Multi;