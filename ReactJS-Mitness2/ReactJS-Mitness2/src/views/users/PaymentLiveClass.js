import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import Search from "@material-ui/icons/SearchRounded";
import DeleteIcon from "@material-ui/icons/Delete";

const Customer = (props) => (
  <tr>
    <td style={{ border: "1px double grey", textAlign: "center" }}>
      <input type="checkbox" />
    </td>
    <td
      style={{
        border: "1px double grey",
        textAlign: "center",
      }}
    >
      {props.customer.cname}
    </td>
    <td
      style={{
        border: "1px double grey",
        textAlign: "center",
      }}
    >
      {props.customer.email}
    </td>
    <td
      style={{
        border: "1px double grey",
        textAlign: "center",
      }}
    >
      {props.customer.purchaseliveclassname}
    </td>
    <td
      style={{
        border: "1px double grey",
        textAlign: "center",
      }}
    >
      {props.customer.price}
    </td>
    <td
      style={{
        border: "1px double grey",
        textAlign: "center",
      }}
    >
      {props.customer.purchasedate}
    </td>
  </tr>
);

export default class PaymentLiveClass extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this);

    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.onChangepaymentid = this.onChangepaymentid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      paymentid: "",
      customers: [],
    };
  }

  componentDidMount() {
    axios
      .post("https://mitnessnew.herokuapp.com/payments/")
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangepaymentid(e) {
    this.setState({
      paymentid: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      paymentid: this.state.paymentid,
    };
    axios
      .post("https://mitnessnew.herokuapp.com/payments/search", customer)
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCustomer(id) {
    axios
      .delete("https://mitnessnew.herokuapp.com/payments/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      customers: this.state.customers.filter((el) => el._id !== id),
    });
  }

  customerList() {
    this.state.customers.sort(function (a, b) {
      if (a.paymentid.toLowerCase() < b.paymentid.toLowerCase()) return -1;
      if (a.paymentid.toLowerCase() > b.paymentid.toLowerCase()) return 1;
      return 0;
    });
    return this.state.customers.map((currentcustomer) => {
      return (
        <Customer
          customer={currentcustomer}
          deleteCustomer={this.deleteCustomer}
          key={currentcustomer._id}
        />
      );
    });
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
                    <b>Live Class Status</b>
                  </h4>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.paymentid}
                        onChange={this.onChangepaymentid}
                      />
                      <div className="input-group-apppend">
                        <button className="btn btn-secondary" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{ width: "22%" }}>
                  <button
                    style={{
                      height: "25",
                      marginTop: "4px",
                      marginLeft: "30px",
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
              <div style={{ overflowX: "scroll" }}>
                <table className="table" style={{ border: "1px double grey" }}>
                  <thead className="thead-light">
                    <tr>
                      <th
                        style={{
                          border: "1px double white",
                          width: "70px",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      ></th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        E-mail
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Purchase Live Class Name
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Purchased Price
                      </th>
                      <th
                        style={{
                          border: "1px double white",
                          backgroundColor: "#3d84b8",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Purchased Date
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
