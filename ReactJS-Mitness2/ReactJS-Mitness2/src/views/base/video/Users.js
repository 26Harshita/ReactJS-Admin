import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';






export default class CustomersList extends Component {

  constructor(props) {
    super(props);

    // this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangeexercisename = this.onChangeexercisename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      exercisename:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://mitnessnew.herokuapp.com/videos/')
    .then(response => {
      
      this.setState({ customers: response.data})
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            exercisename: e.exercisename,
            vname: e.vname,
            exerciseduration:e.exerciseduration,
            exerciseprice:e.exerciseprice,
            access:e.access,
            status:e.status,
           

          }
        })
        
    })
    console.log(this.state)
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
  deleteCustomerByIds = () => {
  let arrayids = [];
  
    this.state.customers.forEach(d => {
      if(d.select) { 
        arrayids.push(d.id);
      }
    });
    console.log(arrayids)
    axios.post('https://mitnessnew.herokuapp.com/videos/delete',{arrayids:arrayids})
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    
  
    
    
  };
  onChangeexercisename(e) {
    this.setState({
      exercisename: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      exercisename: this.state.exercisename
    }
    axios.post('https://mitnessnew.herokuapp.com/videos/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  // deleteCustomer(id) {
  //   axios.delete('https://instructor9513.herokuapp.com/programs/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     customers: this.state.customers.filter(el => el._id !== id)
  //   })
  // }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.exercisename.toLowerCase() < b.exercisename.toLowerCase()) return -1;
      if(a.exercisename.toLowerCase() > b.exercisename.toLowerCase()) return 1;
      return 0;
     })

    return this.state.customers.map(currentcustomer => (
      <tr>
        <td style={{border:"1px double grey",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td>
    
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.exercisename}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.vname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.exerciseduration}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.exerciseprice}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.access}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.status}</td>
   
    
    </tr>
      
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      <div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"80%"}}><h4><b>Videolisting</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="input-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.exercisename}
              onChange={this.onChangeexercisename}
              />
              <div className="input-group-apppend">
              <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
              </button>
              </div>
        </div>
        </form>
        
        
       
        
        </div>
        <div style={{width:"9%"}}><Link to="/videos" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success"><AddIcon/></button></Link></div>
    <div style={{width:"22%"}}  >
    <button style={{height:"25",marginTop:"8px"}}
        className="btn btn-danger "
        onClick={() => {
          this.deleteCustomerByIds();
        }}
      >
    <DeleteIcon/>
      </button>
    </div>
        
</div>


        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
        
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
            {/* <th>
            
              
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  this.setState(
                    this.state.customers.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th> */}
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Delete</th>
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Video name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Duration</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Price</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Access</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>status</th>
              
              
              
           
            </tr>
            
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
         
        </table>
      
        </div>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}
