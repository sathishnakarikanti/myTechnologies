import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
class Crudoperation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mbl: '',
            address: '',
            data: [],
            data1: [],
            edit: false,
            editRow: []
        }
    }

    handlechange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.editRow, 'editRow')

        console.log(this.state.data, 'this.state.data')

        if (this.state.edit) {
            let editObj = {
                "name": this.state.name,
                "mbl": this.state.mbl,
                "address": this.state.address,
                "email": this.state.emial
            }
            let filterObj = this.state.data.filter((obj) => obj.mbl != this.state.editRow.mbl)
            filterObj.push(editObj);
            await this.setState({ data: filterObj });
            await this.setState({ name: '', mbl: '', email: '', address: '' });

        }

        else {
            let data1 = this.state.data;
            data1.push({
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                mbl: this.state.mbl
            });
            await this.setState({ data: data1, name: '', email: '', address: '', mbl: '' })
        }
    }
    handleEdit = async (obj) => {
        await this.setState({
            name: obj.name,
            address: obj.address,
            email: obj.email,
            mbl: obj.mbl,
            edit: true,
            editRow: obj
        });
    }
    handleDelete = (record) => {
        confirmAlert({
            title: '',
            message: 'Are you sure want to delete',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let delrecord = this.state.data.filter((obj) => obj.mbl != record.mbl);
                        this.setState({ data: delrecord })
                    }
                },
                {
                    label: 'NO',
                    onClick: () => { this.handleUpdate}
                }
            ]
        })
    }

    handleUpdate = async (obj) => {
        // await this.setState({
        //     name: this.state.name,
        //     mbl: this.state.mbl,
        //     email: this.state.email,
        //     address: this.state.address
        // })
    }
    render() {

        return (
            <div>
                <div>
                    <form style={{ marginLeft: "100px", marginTop: "100px" }} onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} onChange={this.handlechange} placeholder="enter your Name" name="name" autoComplete="off" /><br /><br />
                        <input type="mbl" value={this.state.mbl} onChange={this.handlechange} placeholder="enter your mobile No." name="mbl" autoComplete="off" /><br /><br />
                        <input type="email" value={this.state.email} onChange={this.handlechange} placeholder="enter your Email" name="email" autoComplete="off" /><br /><br />
                        <input type="address" value={this.state.address} onChange={this.handlechange} placeholder="enter your Address" name="address" autoComplete="off" /><br /><br />
                        <input type="submit" value="submit" />

                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Mobile No.</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.length > 0 ?
                                //  alert('hello')

                                this.state.data.map((obj, index) =>

                                    <tr>

                                        <td>{obj.name}</td>
                                        <td>{obj.mbl}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.address}</td>
                                        <td>
                                            <input type="button" value="edit" onClick={() => this.handleEdit(obj)} />
                                        </td>
                                        <td>
                                            <input type="button" value="delate" onClick={() => this.handleDelete(obj)} />
                                        </td>


                                    </tr>
                                )
                                : ""}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
export default Crudoperation;