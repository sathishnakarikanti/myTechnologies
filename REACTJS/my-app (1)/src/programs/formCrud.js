import React from 'react';
class FormCrud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', //requirement objects
            age: '',
            dob: '',
            data1: [],
            data: [
                {
                    'id': '', //for storing the data(setstate)
                    'name': '',
                    'age': '',
                    'dob': ''
                }],
            edit: false, //by default flase beacuse (we not edit data in bigining)
            editRow: [] //stores the edited data

        }
        this.handleChange = this.handleChange.bind(this); //bind the data
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    allowChar = e => {  //restriction of data using regular expression
        let regex = /[^a-yA-Y]/ig;//alphabets only
        e.target.value = e.target.value.replace(regex, '');
    }

    allowNum = e => {
        let regex = /[^0-9]/ig;//numbers only
        e.target.value = e.target.value.replace(regex, '');54
    }

    handleChange(e) { //takes entered data
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.edit) {
            let editObj = { //fields data edit here
                'name': this.state.name,
                'age': this.state.age,
                'dob': this.state.dob,
                "id": this.state.editRow.id
            };

            let filterObj = this.state.data.filter((obj) => obj.id != this.state.editRow.id);//filters the edited id
            filterObj.push(editObj);//takes the filtered data
            this.setState({ data: filterObj });//set update
            this.setState({ name: '', age: '', dob: '' });

        }

        else { //not edit common procedure
            let details = this.state.data
            details.push({
                id: (this.state.data[this.state.data.length - 1].id + 1),
                name: this.state.name,
                age: this.state.age,
                dob: this.state.dob
            });
            this.setState({ data: details });
            this.setState({ data1: details })
            this.setState({ name: '', age: '', dob: '' });
            console.log(this.state.data);

        }
    }
    handleEdit = (row) => { //selected data displays in fields
        this.setState({
            name: row.name,
            age: row.age,
            dob: row.dob,
            edit: true,
            editRow: row
        });
    }
    handleUpdate = (obj) => {
        this.setState({
            name: this.state.name,
            age: this.state.age,
            dob: this.state.dob
        });
    }




    render() {

        return (
            <div className='App'>
                <div style={{ marginLeft: "50px" }}>
                    <form onSubmit={this.handleSubmit} ><br /><br />
                        <label> Name:</label><br />
                        <input type="text" id="name" onChange={this.handleChange} name="name" value={this.state.name} onKeyUp={this.allowChar} required />   <br /><br />

                        <label>Mobile No:</label><br />
                        <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChange} onKeyUp={this.allowNum} required />   <br /><br />


                        <label>Date:</label><br />
                        <input type="date" id="dob" name="dob" value={this.state.dob} onChange={this.handleChange} required />    <br /><br />

                        <input type="submit" value="submit" />

                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th> <th>Age</th>  <th>DOB</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.length > 0 ?
                                this.state.data.map((obj, index) =>
                                    <tr>
                                        <td key={index}>{obj.name}</td>
                                        <td key={index}>{obj.age}</td>
                                        <td key={index}>{obj.dob}</td>
                                        {this.state.data1.length > 0 ? <td key={index}><input type='button' value='EDIT' onClick={() => this.handleEdit(obj)} /></td> : ''}


                                    </tr>
                                ) : ''}
                        </tbody>
                    </table>


                </div>



            </div>);
    }

}
export default FormCrud;