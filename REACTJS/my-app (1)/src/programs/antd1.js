import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Table, Space,Popconfirm } from 'antd'
import { Link } from "react-router-dom";
import { EditOutlined,DeleteOutlined } from '@ant-design/icons'

class Antd1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data11:[],
      active:true,
      visible: false,
      search: "",
      fname: '',
      fullname:"bharath",
      pNo: '',
      email: '',
      id: "",
      edit: false,
      editRow: [],
      columns: [
        {
          title: "Id",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "Name",
          dataIndex: "fname",
          key: "name"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
        },
        {
          title: "Pno",
          dataIndex: "pNo",
          key: "pNo"
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          render: (text, record) => ( 
            <Space size="middle">
              {this.state.active==true?<><EditOutlined   onClick={() => this.handleEdit(record)}/>
              <Popconfirm title="Are you sure？" okText="Yes" onConfirm={() => this.handleDelete(record)} cancelText="No">
              <DeleteOutlined/>
          </Popconfirm></>:""}
              
            {this.state.active==true? <button onClick={() => this.handleInactive(record)}>Inactive</button>:
             <button onClick={() => this.handleActivenew(record)}>Active</button>}
             
            </Space>
          )
        },
      ],
      data: [
        {
          "id": 1,
          "fname": "michael",
          "pNo": "123455",
          "email": "michael@gmail.com",
        },
        {
          "id": 2,
          "fname": "david",
          "pNo": "123455",
          "email": "david@gmail.com",
        },
        {
          "id": 3,
          "fname": "daniel",
          "pNo": "123455",
          "email": "daniel@gmail.com",
        },
        {
          "id": 4, 
          "fname": "dfgf",
          "pNo": "123455",
          "email": "fdf@gmail.com",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // let name = event.target.name;
    // let value = event.target.value;
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.edit) {
      let editObj = {
        "fname": this.state.fname,
        "pNo": this.state.pNo,
        "email": this.state.email,
        "id": this.state.editRow.id
      };
      let filterObj = this.state.data.filter((obj) => obj.id != this.state.editRow.id);
      filterObj.push(editObj);
      this.setState({
        data: filterObj, visible: false, fname: "", pNo: "", email: ""
      })
    }
    else {
      let data = this.state.data
      data.push(
        {
          id: (this.state.data[this.state.data.length - 1].id + 1),
          fname: this.state.fname,
          pNo: this.state.pNo,
          email: this.state.email,
        }
      );
      this.setState({
        data:data.map((obj)=>{
          return obj
        }),visible:false,fname:"",pNo:"",email:""
      })
      
    }
  }
  handleEdit = (obj) => {
    this.setState({
      visible: true,
      fname: obj.fname,
      pNo: obj.pNo,
      email: obj.email,
      edit: true,
      editRow: obj
    });
  }
  handleDelete = (obj) => {
    console.log('obj', obj)
    let delFilter = this.state.data.filter((row) => row.id != obj.id);
    this.setState({ data: delFilter,visible:false })
  }
  handleInactive = (obj) => {
    let inactivefilter = this.state.data.filter((row) => row.id != obj.id)
    // let inactivefilter1 = this.state.data.filter((row) => row.id == obj.id)
    this.state.data11.push(obj)
    this.setState({data11:this.state.data11.map((obj)=>{return obj})})
    console.log(this.state.data11,"see")
    this.setState({ data: inactivefilter})
   console.log(this.state.active,'hello')
  }
  handleActivenew=(obj)=> {
    let activenew = this.state.data11.filter((row) => row.id != obj.id)
    this.state.data.push(obj)
    this.setState({data:this.state.data.map((obj)=>{return obj})})
    this.setState({data11:activenew})
  }
  buttonclick = e => {
    this.setState({ visible: true,active:true })
  }
  handlecancle = e => {
    this.setState({ visible: false ,fname:"",email:"",pNo:""})
  }
  handleinactive = e => {
    if(this.state.active==true){
      this.setState({active:false})
      // alert("false")
    }
    else {
      this.setState({active:true})
      // alert("true")
    }
  }
  handleChange2=e=>{
     this.setState({
      search:e.target.value
   })
   let searfilter = this.state.data11.filter((obj)=>{
     if(obj==""){
       return obj
     }
     else if(obj.fname.toLowerCase().includes(this.state.search.toLowerCase())){
       return obj
     }
   })
   this.setState({
     data11:searfilter})
  }
 handleChange1 = e=>{
   this.setState({
      search:e.target.value
   })
   let searfilter = this.state.data.filter((obj)=>{
     if(obj==""){
       return obj
     }
     else if(obj.fname.toLowerCase().includes(this.state.search.toLowerCase())){
       return obj
     }
   })
   this.setState({
     data:searfilter
   })
  //  this.setState({
  //    data:this.state.data.filter((obj)=>{
  //      if(obj==""){
  //        return obj
  //      }
  //      else if (obj.fname.toLowerCase().includes(this.state.search.toLowerCase())){
  //        return obj 
  //      }
  //    })
  //  })

  //  this.setState({
  //   data11:this.state.data.filter((obj)=>{
  //     if(obj==""){
  //       return obj
  //     }
  //     else if (obj.fname.toLowerCase().includes(this.state.search.toLowerCase())){
  //       return obj 
  //     }
  //   })
  // })
 }
  render() {
    console.log(this.state.data, 'data')
    return (
      <div className="App" >
        <h1>ANTD</h1>
        { this.state.active==false ? <button onClick={this.handleinactive}>ACTIVE</button> :
       <><Button onClick={this.buttonclick}>Add</Button><button onClick={this.handleinactive}>IN-ACTIVE</button></> 
           }
        <Modal
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handlecancle}
        >
          <form onSubmit={this.handleSubmit}><br /><br />
            <label>First Name:</label>
            <input type="text" id="fname" onChange={this.handleChange} name="fname" value={this.state.fname} /><br /><br />
            <label>Pin No:</label>
            <input type="text" id="pNo" name="pNo" value={this.state.pNo} onChange={this.handleChange} /><br /><br />
            <label>Email:</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br /><br />
          </form>
        </Modal>
        <br /><br />
        {this.state.active==true?<input type="text" name="search"  onChange={this.handleChange1} placeholder="search..." />:
        <input type="text" name="search"  onChange={this.handleChange2} placeholder="search...." />}
        
        <br /><br /><br />
        {/* <table> 
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Pno</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      { 
        this.state.data.filter((val)=>{
          if(val==""){
            return val
          }
          else if(val.fname.toLowerCase().includes(this.state.search.toLowerCase())){
            return val
          }
        }).map((obj,index)=>
       <tr> 
      <td>{obj.fname}</td>
      <td>{obj.email}</td>
      <td>{obj.pNo}</td>
    
      <td>
        <input type="button" value="edit" onClick={()=>this.handleEdit(obj)}  />
        </td>
        <td>
        <input type="button" value="delete" onClick={()=>this.handleDelete(obj)}  />
        </td>
      </tr>
        )
    }
  </tbody>
</table><br/><br/><br/><br/> */}
{/* {this.state.data11.map((obj)=>{
  return <h1>{obj.id}{obj.fname}{obj.email}{obj.pNo}</h1>
})} */}
    {this.state.active==false ? <Table columns={this.state.columns} dataSource={this.state.data11} />:
     <Table columns={this.state.columns} dataSource={this.state.data} />}
     
      </div>
    );
  }
 
}
export default Antd1;