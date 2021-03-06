import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

export default class ProgramList extends Component {
  constructor(props) {
    super(props);

    // this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      classname: "",
      customers: [],
    };
  }

  componentDidMount() {
    axios
      .post("https://mitnessnew.herokuapp.com/liveclasses/")
      .then((response) => {
        this.setState({ customers: response.data });
        let result = response.data;
        this.setState({
          customers: result.map((e) => {
            return {
              select: false,
              id: e._id,
              classname: e.classname,
              image: e.image,
              description: e.description,
              category: e.category,
              duration: e.duration,
              caloriesburnt: e.caloriesburnt,
              name: e.instructor.name,
              img: e.instructor.iimg,
              instructorprofile: e.instructorprofile,
              sdateandtime: e.sdateandtime,
              snameandcount: e.snameandcount,
            };
          }),
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteCustomerByIds = () => {
    let arrayids = [];

    this.state.customers.forEach((d) => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    console.log(arrayids);
    axios
      .post("https://mitnessnew.herokuapp.com/liveclasses/delete", {
        arrayids: arrayids,
      })

      .then((response) => {
        if (response.data.message === "Deleted Successfully") {
          window.location.reload(true);
        }
      });
  };
  onChangeclassname(e) {
    this.setState({
      classname: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      classname: this.state.classname,
    };
    axios
      .post("https://mitnessnew.herokuapp.com/liveclasses/search", customer)
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // deleteCustomer(id) {
  //   axios.delete('https://instructor9513.herokuapp.com/programs/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     customers: this.state.customers.filter(el => el._id !== id)
  //   })
  // }

  customerList() {
    this.state.customers.sort(function (a, b) {
      if (a.classname.toLowerCase() < b.classname.toLowerCase()) return -1;
      if (a.classname.toLowerCase() > b.classname.toLowerCase()) return 1;
      return 0;
    });

    return this.state.customers.map((currentcustomer) => (
      <tr>
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          <input
            type="checkbox"
            onChange={(e) => {
              let value = e.target.checked;
              console.log(this.state);
              this.state.customers.find(
                (o) => o.id === currentcustomer.id
              ).select = value;
              this.setState(this.state);
            }}
          />
        </td>
        {/* <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.classname}</td> */}
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.image}
        </td>
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.category}
        </td>

        {/* <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.name}
        </td> */}
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.name}
        </td>
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.time}
        </td>
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.difficulty}
        </td>

        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.price}
        </td>
        {/* <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.point}
        </td> */}
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          {currentcustomer.sdateandtime}
        </td>
        {/* <td style={{border:"1px double grey",textAlign:"center"}}>
    <tr style={{textAlign:"center"}}>name:{currentcustomer.name}</tr>
    <tr style={{textAlign:"center"}}>image:{currentcustomer.img}</tr>
   

    </td> */}
        <td style={{ border: "1px double grey", textAlign: "center" }}>
          <Link to={"#" + currentcustomer.id}>
            <button>Edit</button>
          </Link>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md">
              <div style={{ display: "flex" }}>
                <div style={{ width: "80%" }}>
                  <h4>
                    <b>Program List</b>
                  </h4>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.classname}
                        onChange={this.onChangeclassname}
                      />
                      <div className="input-group-apppend">
                        <button className="btn btn-secondary" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  <div></div>
                </div>

                <div style={{ width: "9%" }}>
                  <Link to="/RegisterProgram" className="nav-link">
                    <button
                      type="submit"
                      value="AddNewTrainer"
                      className="btn btn-success"
                    >
                      <AddIcon />
                    </button>
                  </Link>
                </div>

                <div style={{ width: "22%" }}>
                  <button
                    style={{
                      height: "25",
                      marginTop: "8px",
                    }}
                    className="btn btn-danger "
                    onClick={() => {
                      this.deleteCustomerByIds();
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
              <select name="cars" id="cars" style={{ padding: "10px" }}>
                <option value="volvo">Sort By</option>
              </select>
              <select name="cars" id="cars" style={{ padding: "10px" }}>
                <option value="volvo">View</option>
              </select>
              <div style={{ overflowX: "scroll", overflowY: "scroll" }}>
                <table className="table" style={{ border: "1px double grey" }}>
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
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      ></th>
                      {/* <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Name</th> */}
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Image
                      </th>
                      {/* <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Description</th> */}
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Category
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Program Name
                      </th>
                      {/* <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Instructor Name
                      </th> */}
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Time
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Difficulty
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Price
                      </th>
                      {/* <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Point
                      </th> */}
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Registered Date
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.customerList()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
