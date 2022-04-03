import React from 'react';
import { confirmAlert } from "react-confirm-alert";


class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:'', 
            pNo:'',
             date:'',
            edit:false,
            editRow:[],
            data:[]   
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
          "date":this.state.date,
          "id":this.state.editRow.id
        };
        let filterObj = this.state.data.filter((obj) => obj.pNo != this.state.editRow.pNo );
        filterObj.push(editObj);
        this.setState({
          data:filterObj
        })
        this.setState({fname:"",pNo:"",date:""}) 

      }
      
      
      else{   
        let details= this.state.data 
        details.push(
            {
            // id:(this.state.data[this.state.data.length - 1].id + 1), 
          fname:this.state.fname,
          pNo:this.state.pNo,
          date:this.state.date,
      }
      );
      this.setState({data:details})  
      this.setState({fname:"",pNo:"",date:""}) 
      }
    }
     
    
    handleEdit =(row) =>{
      this.setState({   
        fname:row.fname,
        pNo:row.pNo,
        date:row.date,
        edit:true,
        editRow:row
      });
    }



    handleUpdate =(obj) =>{    
      this.setState({
      fname:this.state.fname,
        pNo:this.state.pNo,
        date:this.state.date
      });
    }



    handleDelete = (obj) => {
      confirmAlert({
        title: "",
        
        message: "Are you sure you want to remove this data from your list ?",
        buttons: [{
        label: "Yes",
        onClick: () => { let delFilter = this.state.data.filter((row) => row.pNo != obj.pNo ); 
          this.setState({data:delFilter})}
        },
        
        {
        label: "No",
        onClick: () => {this.handleUpdate}
        }
        ]
      
    }
      )
  }

 
   render() {
       console.log(this.state.data,'data')
       return (
           <div className="App" >
            <form onSubmit={this.handleSubmit} ><br /><br />
              <label>First Name:</label>
              <input type="text" id="fname" onChange={this.handleChange} name="fname" value={this.state.fname} /><br /><br /> 
              <label>Phn No:</label>
              <input type="number" id="pNo" name="pNo" value={this.state.pNo} onChange={this.handleChange} /><br /><br />
              <label>Date:</label>
              <input type="datetime-local" id="date" name="date" value={this.state.date} onChange={this.handleChange} /><br /><br />
              <input type="submit" value="submit" />
            </form>
            <table> 
  <thead>
    <tr>
      <th>fname</th>
      <th>date</th>
      <th>pNo</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
      { this.state.data.length > 0?
        this.state.data.map((obj,index)=>
       <tr> 
      <td>{obj.fname}</td>
      <td>{obj.date}</td>
      <td>{obj.pNo}</td>
      <td>
        <input type="button" value="edit" onClick={()=>this.handleEdit(obj)}  />
        </td>
        <td>
        <input type="button" value="delate" onClick={()=>this.handleDelete(obj)}  />
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
export default Crud