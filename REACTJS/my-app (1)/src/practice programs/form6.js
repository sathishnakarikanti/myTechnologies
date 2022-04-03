import React from 'react';


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {}, //for text fields
            errors: {}, //for error text
            display: {}
        }


        this.handleChange = this.handleChange.bind(this); //binding the data
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };
    lettersOnly = (e) =>{
        let regex = /[^a-z]/gi;
        e.value = e.value.replace(regex,'');
    
    }

    handleChange(e) { //updating the state
        let errors = {};

        if (e.target.name == 'username') {
            let val = e.target.value
            if (!val.match(/^[a-zA-Z ]*$/)) {
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }



       

        if (e.target.name == 'mobileno') {
            let val = e.target.value
            if (!val.match(/^[0-9,()]{10}$/)) {
                errors["mobileno"] = "*Please enter numbers only.";
            }
        }

       
       

        this.setState({
            errors: errors
        });
        let fields = this.state.fields;

        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });



    }

    submituserRegistrationForm(e) { //sumited functionality
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["mobileno"] = "";
            fields["dob"] = "";
            this.setState({ fields: fields }); // success alert message
            alert("Form submitted");
        }

    }





    validateForm() { //validations starts from here

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        //username validations
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }


        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
        }


       

        //mobile number validation
        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (!fields["mobileno"].match(/^[0-9,()]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
        }


        

        // dob validation
        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "*please enter you DOB.";
        }

        if (!fields["dob"].match(/^[0-9/-]{10}$/)) {
            formIsValid = false;
            errors["dob"] = "*Please enter valid dob.";

        }





        this.setState({
            errors: errors
        });
        return formIsValid;



     }



    render() {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <h3>Registration page</h3>
                    <form method="post" onSubmit={this.submituserRegistrationForm} >

                        <label>Name</label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} onKeyUp={this.lettersOnly(this)}/> <br /><br />
                        <div >{this.state.errors.username}</div>

                        
                        <label>Mobile No:</label>
                        <input type="number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} /> <br /><br />
                        <div >{this.state.errors.mobileno}</div>

                        

                        <label>DOb</label>
                        <input type="date" name="dob" value={this.state.fields.dob} onChange={this.handleChange} /> <br /><br />
                        <div>{this.state.errors.dob}</div>

                    

                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>

        );
    }


}


export default Register;