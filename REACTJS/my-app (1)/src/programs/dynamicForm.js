import React from 'react';


class RestrictedForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            fname:'',
           
            mNo:'',

            data:[]
            

        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      
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
        mNo:this.state.mNo,
        });

    this.setState({data:details})


    for(let emp of this.state.data){
        this.setState({data:emp})

    }

    }

   render() {
    console.log(this.state.data,'saha')

    
       return (
           <div className="App" >
           
            <form onSubmit={this.handleSubmit}><br /><br />
             
              <label>Choose No. of fields No:</label>
              <input type="number" id="mNo" name="mNo" value={this.state.mNo} onChange={this.handleChange} onKeyUp={this.numbersOnly} required/>   <br /><br />
              <input type="submit" value="submit" />

            </form>

            

            <form>
            <input type="text" />   
            <input type="text" />   <br /><br />
            </form>


        
           
           </div>
       );
   }
        

        
    
}


export default RestrictedForm;