import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { buyLaptop, 
    buyMobile, 
    fetchUsers ,
    thunk_action_insertHandleSubmit} from '../redux/actions';
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lap: '',
            mobile: '',
            data2:[],
            data:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }
    async handleSubmit(e){
        e.preventDefault();
        // let data=this.state.data2;
        let data = {
            firstname:this.state.firstname,
            lap:this.state.lap,
            mobile:this.state.mobile
        }
    await this.props.dispatch( thunk_action_insertHandleSubmit(data))
        await this.setState({data2:data});
    }




    render() {
        console.log(this.props.numberOfLaptops)
        console.log(this.props.numberOfMobiles)
        console.log(this.props.users.length)
        console.log(this.state.firstname,"firstname")
        console.log(this.state.lap,"lap")
        console.log(this.state.mobile,"mobile")
        console.log(this.state.data2,'data2')
        console.log(this.props.dispatch,'user');




        return (
            <div>
                <h1 className="title">Welcome TO VShop</h1>
                <div className="items">
                    <div className="item">
                        <p>Dell Inspiron Laptop</p>
                        <p>Available: {this.props.numberOfLaptops}</p>
                        <button onClick={this.props.buyLaptop}>BUY lap</button>
                    </div>
                    <div className="item">
                        <p>ONE +</p>
                        <p>Available: {this.props.numberOfMobiles}</p>
                        <button onClick={this.props.buyMobile}>BUY lap</button>
                    </div>
                    <div className="item">
                        <p>Get Users Data</p>
                        <p>Count: {this.props.users.length}</p>
                        <button onClick={this.props.fetchUsers}>Get API</button>
                    </div>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                        <input type="number" name="lap" value={this.state.lap} onChange={this.handleChange} />
                        <input type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                        <input type="submit" value="submit" />

                    </form>
                </div>



            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        numberOfLaptops: state.laptops.numberOfLaptops,
        numberOfMobiles: state.mobiles.numberOfMobiles,
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyLaptop: () => dispatch(buyLaptop()),
        buyMobile: () => dispatch(buyMobile()),
        fetchUsers: () => dispatch(fetchUsers()),
        handleSubmit: () => dispatch(handleSubmit(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);