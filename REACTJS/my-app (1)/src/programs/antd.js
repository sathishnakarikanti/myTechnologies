import React from 'react';
import 'antd/dist/antd.css';
import {Modal,Space,Table,Popconfirm,Button} from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons'

class AntdForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data11:[],
      active:true,
      visible:false,
      search:'',
      fname:'',
      fullname:'sathish nakarikanti',
      pNo:'',
      email:'',
      id:'',
      edit:false,
      editRow:[],
      columns:[
        {
          title:'id',
          dataIndex:'id',
          key:'id'
        },
        {
          title:'id',
          dataIndex:'id',
          key:'id'
        },
        {
          title:'id',
          dataIndex:'id',
          key:'id'
        },
        {
          title:'id',
          dataIndex:'id',
          key:'id'
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
      data:[
        {    "id":1,
          "fname":"jhon",
            "pNo":"9553587117",
          "email":"sa@ash.com"
         },
         {    "id":2,
          "fname":"jhon",
            "pNo":"9553587117",
          "email":"sa@ash.com"
         },
         {    "id":3,
          "fname":"jhon",
            "pNo":"9553587117",
          "email":"sa@ash.com"
         },
         {    "id":4,
          "fname":"jhon",
            "pNo":"9553587117",
          "email":"sa@ash.com"
         },
         {    "id":5,
          "fname":"jhon",
            "pNo":"9553587117",
          "email":"sa@ash.com"
         },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]:value});
  }
 
   handleSubmit (e){
     e.preventDefault();
     if (this.state.edit){
        let editObj = {
          'fname': this.state.fname,
          'pNo' : this.state.pNo,
          'email' : this.state.email,
          'id' : this.state.editRow.id
        };
        let filterObj = this.state.data.filter((obj) => obj.id != this.state.editRow.id);
        filterObj.filter(editObj)
        this.setState({data:filterObj,visible:false,fname:'',pNo:'',email:''});

     }
     else{
       let details = this.state.data
       details.push({
         id : (this.state.data[this.state.data.length - 1].id+1),
         fname : this.state.fname,
         pNo : this.state.pNo,
         email : this.state.email

       });
       this.setState({data:details.map((obj) => { 
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





  render(){
    return(<div className = "App">
      <h1>ANTD</h1>
      {this.state.active = false ? <button onClick = {this.handleInactive}>ACTIVE</button> :
     <> <Button onClick={this.buttonclick}>ADD</Button>    <button onClick={this.handleInactive} >IN-ACTIVE</button></>
      }
      <Modal 
      visible = {this.state.visiblele}
      onOk = {this.handleSubmit}
      onCancel = {this.handleCancel}
      >
       <form onSubmit={this.handleSubmit}><br /><br />
            <label>First Name:</label>
            <input type="text" id="fname" onChange={this.handleChange} name="fname" value={this.state.fname} /><br /><br />
            <label>Pin No:</label>
            <input type="text" id="pNo" name="pNo" value={this.state.pNo} onChange={this.handleChange} /><br /><br />
            <label>Email:</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br /><br />
          </form>
          {this.state.active == true ? <input type = 'text' name='search' onClick={this.handleChange1} placeholder="search..."/>:
          <input type='text' name="search" onClick={this.handleChange2} placeholder="search...."/>}
    </Modal><br/><br/><br/>
    
    
    {this.state.active == false ? <Table columns={this.state.columns} dataSource = {this.state.data11} /> :
       <Table columns={this.state.columns} dataSource = {this.state.data11} />}
    


    </div>
    
    );


  }
}
export default AntdForm;