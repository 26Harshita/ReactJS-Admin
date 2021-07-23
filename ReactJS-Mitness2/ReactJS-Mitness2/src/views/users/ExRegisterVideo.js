import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ExRegisterVideo extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangephonenumber = this.onChangephonenumber.bind(this);
    this.onChangerole = this.onChangerole.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangeposttype = this.onChangeposttype.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangeweight = this.onChangeweight.bind(this);
    this.onChangeheight = this.onChangeheight.bind(this);
    this.onChangecareer = this.onChangecareer.bind(this);
    this.onChangeintroduction = this.onChangeintroduction.bind(this);
    this.onChangebriefhistory = this.onChangebriefhistory.bind(this);
    this.onChangespecializedin = this.onChangespecializedin.bind(this);
    this.onChangenumberofapplicants =
      this.onChangenumberofapplicants.bind(this);
    this.onChangenumberofattendees = this.onChangenumberofattendees.bind(this);
    this.onChangenumberofsubscribers =
      this.onChangenumberofsubscribers.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      phonenumber: "",
      status: "",
      posttype: "",
      gender: "",
      age: "",
      weight: "",
      height: "",
      career: "",
      introduction: "",
      briefhistory: "",
      specializedin: "",
      numberofapplicants: "",
      numberofattendees: "",
      numberofsubscribers: "",
      trainer: [],
    };
  }

  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangelastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangegender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangerole(e) {
    this.setState({
      role: e.target.value,
    });
  }
  onChangephonenumber(e) {
    this.setState({
      phonenumber: e.target.value,
    });
  }
  onChangestatus(e) {
    this.setState({
      status: e.target.value,
    });
  }
  onChangeposttype(e) {
    this.setState({
      posttype: e.target.value,
    });
  }

  onChangeage(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeweight(e) {
    this.setState({
      weight: e.target.value,
    });
  }
  onChangeheight(e) {
    this.setState({
      height: e.target.value,
    });
  }
  onChangecareer(e) {
    this.setState({
      career: e.target.value,
    });
  }
  onChangeintroduction(e) {
    this.setState({
      introduction: e.target.value,
    });
  }
  onChangebriefhistory(e) {
    this.setState({
      briefhistory: e.target.value,
    });
  }
  onChangespecializedin(e) {
    this.setState({
      specializedin: e.target.value,
    });
  }
  onChangenumberofapplicants(e) {
    this.setState({
      numberofapplicants: e.target.value,
    });
  }
  onChangenumberofattendees(e) {
    this.setState({
      numberofattendees: e.target.value,
    });
  }
  onChangenumberofsubscribers(e) {
    this.setState({
      numberofsubscribers: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const trainer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      phonenumber: this.state.phonenumber,
      status: this.state.status,
      posttype: this.state.posttype,
      gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      career: this.state.career,
      introduction: this.state.introduction,
      briefhistory: this.state.briefhistory,
      specializedin: this.state.specializedin,
      numberofapplicants: this.state.numberofapplicants,
      numberofattendees: this.state.numberofattendees,
      numberofsubscribers: this.state.numberofsubscribers,
    };

    console.log(trainer);

    axios
      .post("https://mitnessnew.herokuapp.com/instructors/signup", trainer)
      .then(function (response) {
        if (
          response.data.message ===
          "Successful Online Account Creation Informing That The Admin Will Review Your Profile And Will Get Back To You Within 48 Hours."
        ) {
          window.location = "/userrs";
        }
      });
  }

  render() {
    return (
      <div>
        <h3>Register Video</h3>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Category</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Instructor</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Upload Video</label>
            <input
              type="file"
              id="myFile"
              name="filename"
              style={{ width: "450px", backgroundColor: "white" }}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Upload Thumbnail Image</label>
            <input
              type="file"
              id="myFile"
              name="filename"
              style={{ width: "450px", backgroundColor: "white" }}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Difficulty </label>
            <div>
              <input
                type="checkbox"
                id="Beginner"
                name="Beginner"
                value="Beginner"
              />
              <label for="vehicle1"> Beginner</label>
              <input
                type="checkbox"
                id="Intermediate"
                name="Intermediate"
                value="Intermediate"
                style={{ marginLeft: "30px" }}
              />
              <label for="vehicle2"> Intermediate</label>
              <input
                type="checkbox"
                id="Advanced"
                name="Advanced"
                value="Advanced"
                style={{ marginLeft: "30px" }}
              />
              <label for="vehicle2"> Advanced</label>
            </div>
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Main Area Of Workout </label>
            <input
              type="text"
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeweight}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Equipment </label>
            <input
              type="text"
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
            />
          </div>
          <div className="form-group" style={{ width: "450px" }}>
            <label>Price </label>
            <div>
              <input type="checkbox" id="Free" name="Free" value="Free" />
              <label for="vehicle1"> Free</label>
              <input
                type="checkbox"
                id="Paid"
                name="Paid"
                value="Paid"
                style={{ marginLeft: "30px" }}
              />
              <label for="vehicle2"> Paid</label>
            </div>
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Related Video </label>
            <input
              type="text"
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
            />
          </div>
          {/* <div className="form-group">
          <label>Role </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.role}
              onChange={this.onChangerole}
              />
        </div> */}
          <div className="form-group" style={{ width: "450px" }}>
            <label>Upload File </label>
            <input
              type="file"
              id="myFile"
              name="filename"
              style={{ width: "450px", backgroundColor: "white" }}
            />
          </div>
          {/* <div className="form-group">
          <label>Status </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.status}
              onChange={this.onChangestatus}
              />
        </div>
        <div className="form-group">
          <label>Posttype </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.posttype}
              onChange={this.onChangeposttype}
              />
        </div>
        <div className="form-group">
          <label>Age </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeage}
              />
        </div>
        <div className="form-group">
          <label>Weight </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeweight}
              />
        </div>
        <div className="form-group">
          <label>Height </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeheight}
              />
        </div>
        <div className="form-group">
          <label>Career </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.career}
              onChange={this.onChangecareer}
              />
        </div>
        <div className="form-group">
          <label>Introduction </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.introduction}
              onChange={this.onChangeintroduction}
              />
        </div>
        <div className="form-group">
          <label>Briefhistory </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.briefhistory}
              onChange={this.onChangebriefhistory}
              />
        </div>
        <div className="form-group">
          <label>Specializedin </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Applicants </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.numberofapplicants}
              onChange={this.onChangenumberofapplicants}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Attendees </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.numberofattendees}
              onChange={this.onChangenumberofattendees}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Subscribers </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.numnerofsubscribers}
              onChange={this.onChangenumberofsubscribers}
              />
        </div> */}
          {/* <div className="form-group" style={{ width: "450px" }}>
            <label>Upload Profile Image </label>
            <input
              type="file"
              id="myFile"
              name="filename"
              style={{ width: "450px", backgroundColor: "white" }}
            />
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Brief Description </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
            />
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Career </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
            />
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Certification </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
            />
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Lesson Description </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
            />
          </div>

          <div className="form-group" style={{ width: "450px" }}>
            <label>Upload Image Showing Expertise </label>
            <input
              type="file"
              id="myFile"
              name="filename"
              style={{ width: "450px", backgroundColor: "white" }}
            />
          </div> */}

          <div className="form-group">
            <input
              type="submit"
              value="Register Video"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
