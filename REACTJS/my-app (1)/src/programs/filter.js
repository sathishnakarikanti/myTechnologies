import React from 'react'

const employes = [
    {empid:1,empsalary:10000,empname:'bharath'},
    {empid:2,empsalary:15000,empname:'sathish'},
    {empid:3,empsalary:20000,empname:'naveen'}
]
class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            empid:'',empsalary:'',empname:''
        }
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange = (e) => {
        this.setState({
            empid:e.target.value
        })
    } 
    render(){
        return(
            <div>
                <input type="text" name="empid" value={this.state.empid} onChange={this.handlechange} />
                {employes.filter(emp => emp.empid > this.state.empid).map(employes => (
          <li >
            {employes.empname} {' '}
            {employes.empid} {' '}
            {employes.empsalary}
          </li>
        ))}
            </div>
        )
    }
}
export default Filter