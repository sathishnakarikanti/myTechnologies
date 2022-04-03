import React from 'react';
import _ from 'lodash';

class DependentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            things: '',
            // col: '',
            // pri: '',
            data: []
        }
    }
    handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let thingslist = this.state.things
        let _this = this.state
        let data1 = []
        for (let i = 0; i < Number(thingslist); i++) {
            let col = 'color' + (i + 1)
            let pri = 'price' + (i + 1)
            console.log(col, 'color')
            data1.push({
                pri: _this[pri] != undefined ? _this[pri] : '',
                col: _this[col] != undefined ? _this[col] : '',

            })
            console.log(data1, 'data1')
        }
        let data = {
            things: this.state.things,
            data: data1,

        }

        this.setState({
            thingsarra: data
        })
    }

    render() {
        // console.log(this.state.things, 'things')
        console.log(this.state.col, 'col');
        console.log(this.state.pri, 'pri');
        console.log(this.state.data, 'data')
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='things' id="things" value={this.state.things} onChange={this.handlechange} /> <br /><br />
                    {
                        this.state.things > 0 &&
                        <div>
                            {[...Array(Number(this.state.things)).keys()].map((row, index) => {
                                console.log(row, 'row')
                                let col = "color" + row + 1;
                                let pri = "price" + row + 1;
                                let _this = this.state
                                return (
                                    <div key={index}>
                                        <label> color</label>
                                        <input type="text" name='col' value={_this[col]} id={col} onChange={this.handlechange} />
                                        <label> Price</label>
                                        <input type="text" name='pri' value={_this[pri]} id={pri} onChange={this.handlechange} />
                                    </div>
                                )
                            })
                            }
                        </div>
                    }
                    <input type="submit" value="submit" />
                </form>

            </div>
        )
    }
}
export default DependentInput;