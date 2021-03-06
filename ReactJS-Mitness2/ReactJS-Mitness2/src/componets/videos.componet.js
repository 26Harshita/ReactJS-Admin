import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.firstname}</td>
    <td style={{border:"3px double green"}}>{props.customer.lastname}</td>
    <td style={{border:"3px double green"}}>{props.customer.email}</td>
    <td style={{border:"3px double green"}}>{props.customer.gender}</td>
    <td style={{border:"3px double green"}}>{props.customer.status}</td>
    <td style={{border:"3px double green"}}>{props.customer.phonenumber}</td>
    <td style={{border:"3px double green"}}>{props.customer.posttype}</td>
    <td style={{border:"3px double green"}}>{props.customer.role}</td>
    <td style={{border:"3px double green"}}>{props.customer.age}</td>
    <td  style={{border:"3px double green"}}>{props.customer.weight}</td>
    <td style={{border:"3px double green"}}>{props.customer.height}</td>
    <td style={{border:"3px double green"}}>{props.customer.career}</td>
    <td style={{border:"3px double green"}}>{props.customer.introduction}</td>
    <td style={{border:"3px double green"}}>{props.customer.briefhistory}</td>
    <td style={{border:"3px double green"}}>{props.customer.specializedin}</td>
    <td style={{border:"3px double green"}}>{props.customer.numberofapplicants}</td>
    <td style={{border:"3px double green"}}>{props.customer.numberofattendees}</td>
    <td style={{border:"3px double green"}}>{props.customer.numberofsubscribers}</td>
    
    

    
    <td>
      <Link to={"/edit/"+props.customer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
    </td>
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.state = {customers: []};
  }

  componentDidMount() {
    axios.get('https://instructor9513.herokuapp.com/customers/search')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomer(id) {
    axios.delete('https://instructor9513.herokuapp.com/instructors/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    return this.state.customers.map(currentcustomer => {
      return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
    })
  }

  render() {
    return (
      <div>
         <div class="container">

<div class="row">
  <div class="col-md">
         <div style={{display:"flex"}}>
    <div style={{width:"84%"}}>Trainers</div>
    <div style={{width:"6%"}}><Link to="" className="nav-link"><button ><Search/></button></Link></div>
    <div  style={{width:"6%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    <div style={{width:"22%"}}><Link to="/trainer" className="nav-link"><button type="submit" value="AddNewTrainer">AddNewTrainer+</button></Link></div>
</div>            
        <div style={{overflowX:"scroll"}}>
       
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>First Name</th>
              <th style={{border:"3px double green"}}>Last Name</th>
              <th style={{border:"3px double green"}}>Email</th>
              <th style={{border:"3px double green"}}>Gender</th>
              <th style={{border:"3px double green"}}>Status</th>
              <th style={{border:"3px double green"}}>Phone Number</th>
              <th style={{border:"3px double green"}}>Post Type</th>
              <th style={{border:"3px double green"}}>Role</th>
              <th style={{border:"3px double green"}}>Age</th>
              <th style={{border:"3px double green"}}>Weight</th>
              <th style={{border:"3px double green"}}>Height</th>
              <th style={{border:"3px double green"}}>Career</th>
              <th style={{border:"3px double green"}}>Introduction</th>
              <th style={{border:"3px double green"}}>Brief History</th>
              <th style={{border:"3px double green"}}>Specialized In</th>
              <th style={{border:"3px double green"}}>No.of.applicants</th>
              <th style={{border:"3px double green"}}>No.of.attendees</th>
              <th style={{border:"3px double green"}}>No.of.subscribers</th>
              <th style={{border:"3px double green"}}>Actions</th>
             
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