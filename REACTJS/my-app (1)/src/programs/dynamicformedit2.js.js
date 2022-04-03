import React from 'react'
class DynamicFormEdit2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // count:"",
            // items:[{firstname:"",lastname:""}]
        }
    }
//    handlechange=(index,event)=>{
//        const values = [...this.state.items]
//        values[index][event.target.name] = event.target.value
    

//        this.setState(values)
//     }
//     handlesubmit=e=>{
//         e.preventDefault();

//         console.log(this.state.items,"hello world")
//     }
//     handleadd=(e,i)=>{
//         let count = []
//         for (let i=0;i<this.state.count;i++){
//             count.push({firstname:"",lastname:""})
//             console.log(count)
//         }
//         this.setState({items:count})
//     }
//     handleforchange=e=>{
//         this.setState({[e.target.name]:e.target.value})
//         console.log(this.state.count)
//     }

componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    new Notification('Hey')
  }


    render(){
        return(
            <div>
                {/* <form onSubmit={this.handlesubmit}>
                    <input type="text" name="count" value={this.state.count} onChange={this.handleforchange} />
                    {this.state.items.map((items,index)=>{
                      return ( 
                      <div key={index}>
                            <input type="text" name="firstname" onChange={event => this.handlechange(index,event)} placeholder="First Name" value={this.state.items[index].firstname} />
                            <input type="text" name="lastname" onChange={event => this.handlechange(index,event)} placeholder="Last Name" value={this.state.items[index].lastname} />
                           
                        </div>
                        )
                    })}
                     <button type="button" onClick={this.handleadd} >ADD</button> 
                    <input type="submit" value="submit"/>
                </form> */}



<button onClick={this.showNotification}>
          Click to show notification
        </button>




            </div>
        )
    }
}
export default DynamicFormEdit2;