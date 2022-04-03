import React from 'react';
class Form1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:'', 
            pNo:'',
            email:'',
            edit:false,
            editRow:[],
            data:[{
              "id":1,
              "fname": "sathish",
              "pNo": "123455",
              "email": "sathishnakarikantig@gmail.com",
          },
          {
            "id":2,
            "fname": "sathishkjklj",
            "pNo": "123455",
            "email": "sathishnakarikantig@gmail.com",
        }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState ({ [name]:value})
    }
    handleSubmit(event){
      event.preventDefault();
      if(this.state.edit){
        let editObj = {
          "fname":this.state.fname,
          "pNo":this.state.pNo,
          "email":this.state.email,
          "id":this.state.editRow.id
        };
        let filterObj = this.state.data.filter((obj) => obj.id != this.state.editRow.id );
        filterObj.push(editObj);
        this.setState({
          data:filterObj
        })
      }else{
        let details= this.state.data
        details.push(
            {
              id:(this.state.data[this.state.data.length - 1].id + 1),
          fname:this.state.fname,
          pNo:this.state.pNo,
          email:this.state.email,
      }
      );
      this.setState({data:details})
      this.setState({fname:"",pNo:"",hNo:"",email:""})
      }
    }
    handleEdit =(row) =>{
      this.setState({
        fname:row.fname,
        pNo:row.pNo,
        email:row.email,
        edit:true,
        editRow:row
      });
    }
    handleUpdate =(obj) =>{
      this.setState({
      fname:this.state.fname,
        pNo:this.state.pNo,
        email:this.state.email
      });
    }
   render() {
       console.log(this.state.data,'data')
       return (
           <div className="App" >
            <form onSubmit={this.handleSubmit}><br /><br />
              <label>First Name:</label>
              <input type="text" id="fname" onChange={this.handleChange} name="fname" value={this.state.fname} /><br /><br /> 
              <label>Pin No:</label>
              <input type="number" id="pNo" name="pNo" value={this.state.pNo} onChange={this.handleChange} /><br /><br />
              <label>Email:</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br /><br />
              <input type="submit" value="submit" />
            </form>
            <table> 
  <thead>
    <tr>
      <th>fname</th>
      <th>emai</th>
      <th>pNo</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
      { this.state.data.length > 0?
        this.state.data.map((obj,index)=>
       <tr> 
      <td>{obj.fname}</td>
      <td>{obj.email}</td>
      <td>{obj.pNo}</td>
      <td>
        <input type="button" value="edit" onClick={()=>this.handleEdit(obj)}  />
        </td>
      </tr>
        )
    :""}
  </tbody>
</table>
           </div>
       );
   }
}
export default Form1;