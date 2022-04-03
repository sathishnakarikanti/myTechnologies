import React from 'react'

class DynamicFormEdit1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regid: '',
            Pets: '',


        }
        this.handleChange = this.handleChange.bind(this)
    }
    allowNums = e => {
        let regex = /[^0-9]/ig;
        e.target.value = e.target.value.replace(regex, '');

    }

    allowChar = e => {
        let regex = /[^a-z]/ig;
        e.target.value = e.target.value.replace(regex, '');
    }
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [event.target.name]: event.target.value })
    }
    submitpet = (e) => {

        let petslist = this.state.Pets
        let newarr = []
        var _this = this.state
        for (let i = 0; i < Number(petslist); i++) {
            let weight = 'petweight' + (i + 1)
            let breed = 'petbreed' + (i + 1)
            newarr.push({ weight: _this[weight] != undefined ? _this[weight] : '', breed: _this[breed] != undefined ? _this[breed] : '' })
        }

        let object = {
            regid: this.state.regid,
            petsno: this.state.Pets,
            petslist: newarr
        }
        console.log(object, 'objects')

    }

    inputHandler = async (inputName, event) => {
        event.persist();
        let inputVal = event.target.value;
        let inputObject = {};
        inputObject[inputName] = inputVal;
        await this.setState(inputObject);
        event.persist();
    }


    render() {

        return (
            <div>
                <h2>Choose how many terms you wish to add:</h2>
                <form method="post" onSubmit={e => { e.preventDefault(); }}>
                    <div className="App">
                        <input type="number" name="regid" value={this.state.regid} onKeyUp={this.allowNums} onChange={this.handleChange} />
                        <input type="number" name="Pets" maxLength={2} value={this.state.Pets} onChange={this.handleChange} onKeyUp={this.allowNums} required></input><br /><br />




                        {this.state.Pets > 0 &&
                            <div >
                                {[...Array(Number(this.state.Pets)).keys()]
                                    .map((row, i) => {
                                        console.log(row, 'row')
                                        console.log(i, "i")
                                        let wei = 'petweight' + (row + 1)
                                        let breed = 'petbreed' + (row + 1)
                                        let hei = 'petheigth' + (row + 1)
                                        let _this = this.state
                                        console.log(wei, 'wei')
                                        console.log(breed, 'breed')
                                        return (
                                            <div key={i} className="address-row petList left-align" >
                                                <div className="mr-3">
                                                    {"pets #" + (row + 1)}
                                                </div>
                                                <div className="form-group">
                                                    {"Breed"}
                                                    <input type="text" className="inputText" onChange={this.inputHandler}
                                                        value={_this[breed]} id={breed} autoComplete="off" />
                                                </div>
                                                <div className="form-group">
                                                    {"Weight(lbs.)"}
                                                    <input type="text" className="inputText" onChange={this.inputHandler}
                                                        value={_this[wei]} id={wei} autoComplete="off" />
                                                </div>
                                                <div className="form-group">
                                                    {"height(mts.)"}
                                                    <input type="text" className="inputText" onChange={this.inputHandler}
                                                        value={_this[hei]} id={wei} autoComplete="off" />
                                                </div>

                                            </div>
                                        )
                                    })}
                            </div>
                        }   <br />



                        <button type="submit" className="btn btn-main mr-3" id="splsubmit" onClick={() => this.submitpet("true")}>{"Submit"}</button>
                    </div>
                </form>

            </div>
        )


    }
}



export default DynamicFormEdit1;