import React from 'react';


class RestrictedForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            fname:'',
           
            mNo:'',
            
            date:'',
            
           

            fields:{},
            
            errors:{},

            data:[]
            

        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      
    }

    lettersOnly = e => {
        let regex = /[^a-zA-Y]/ig;
        e.target.value = e.target.value.replace(regex,''); 
       

    
    }

    numbersOnly = e => {
        let regex = /[^0-9]/ig;
        
        e.target.value = e.target.value.replace(regex,''); 


        

    
    }

    

    handleChange(event) {
    

      let name = event.target.name;
        let value = event.target.value;
        this.setState ({ [name]:value})
    }
    

    handleSubmit(event){
      event.preventDefault();
      let details= this.state.data

      details.push(
          {
        fname:this.state.fname,
       
        mNo:this.state.mNo,
        
        date:this.state.date,


    }
    );
    this.setState({data:details})
    this.setState({fname:"",mNo:"",date:""})
    }

   render() {
       console.log(this.state.data,'data')
       return (
           <div className="App" >
           
            <form onSubmit={this.handleSubmit}><br /><br />
              <label> Name:</label>
              <input type="text" id="fname" onChange={this.handleChange} name="fname" value={this.state.fname}  onKeyUp={this.lettersOnly} required/>   <br /><br /> 
             
              <label>Mobile No:</label>
              <input type="number" id="mNo" name="mNo" value={this.state.mNo} onChange={this.handleChange} onKeyUp={this.numbersOnly} required/>   <br /><br />
           

              <label>Date:</label>
              <input type="datetime-local" id="date" name="date" value={this.state.date} onChange={this.handleChange} required/>    <br /><br />
             
              <input type="submit" value="submit" />

            </form>
            <table> 
  <thead>
    <tr>
      <th>fname</th>
     
      <th>mNo</th>
      
      <th>date</th>
      
    </tr>
  </thead>
  <tbody>
      { this.state.data.length > 0?
        this.state.data.map((obj,index)=>
       <tr> 
      <td>{obj.fname}</td>
      <td>{obj.mNo}</td>
      <td>{obj.date}</td>
      
      </tr>
        )
    :""}
  </tbody>

</table>
           </div>
       );
   }
        

        
    
}


export default RestrictedForm;