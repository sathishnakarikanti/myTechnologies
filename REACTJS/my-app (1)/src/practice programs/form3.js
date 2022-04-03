import React from 'react';

class Restrict extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                 posts: [],
                 inputtxt:'',
                 number: "",
                 date: "",
            }
        }
        charallow = (e) => {
            this.setState({inputtxt:e.target.value.replace(/[^a-y]/ig,'')});
        }
        charallow1 = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
        }


        handleclick = e => {
            e.preventDefault();
        
                let { posts, number, date, inputtxt } = this.state
                
                let details = this.state.posts;
                details.push( inputtxt,number, date)
               
                this.setState({ posts : details })
               
               
                this.setState({inputtxt:'',number:'',date:''})

                
            }
            
       


        render(){
            
        console.log(this.state.inputtxt);

            return(
            <div> 
            <form>
                <br/><br/>
            <input type = 'text' value={this.state.inputtxt} onChange={this.charallow.bind(this)}/>  <br/><br/>
            <input type = 'number' name='number' value={this.state.number} onChange={this.charallow1.bind(this)}/>  <br/><br/>
            <input type = 'datetime-local' name="date" value={this.state.date} onChange={this.charallow1.bind(this)}/>  <br/><br/>
            <input type='button' onClick={this.handleclick} value='submit'/>

            </form>
        
            <table> 
           <thead>
            <tr>
              <th>name</th>
              <th>mbl.no</th>
              <th>date</th>
            </tr>
            </thead>
            <tbody>
              
                 { this.state.posts.length > 0?
                     this.state.posts.map((obj,key)=>
                    
            <tr> 
                <td>{obj.name} </td>
                <td>{obj.number}</td>
                <td>{obj.date}</td>
      
            </tr>
           
        )
    :""}
    </tbody>
</table>



            </div>
            );
        }
    
}
export default Restrict;