import React from 'react';
class DigitNum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ram: []
        }
    }
    componentDidMount() {
        // alert();
        // let ram = [];
        // for (let i = 1; i <= 10; i++) {
        //     ram.push(i);
        // }
        // this.setState({ ram: ram })

        const array = [...Array(10).keys()]
        console.log(array)
    }


    render() {
        // console.log(this.state.ram, 'ram2')

        return (
            <div>
                <h1>digits</h1>
            </div>
        )
    }
}
export default DigitNum;