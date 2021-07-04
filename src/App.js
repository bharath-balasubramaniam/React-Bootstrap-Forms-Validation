import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import states from "./StateList";
import { Skills } from "./Skills";
import { Table, Form, Row, Col, InputGroup } from "react-bootstrap";
const validateEmail = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "Tamil Nadu",
      zip: "",
      email: "",
      gender: "",
      applyfor: "front-end",
      html: "",
      css: "",
      bootstrap: "",
      react: "",
      dom: "",
      mysql: "",
      mongodb: "",
      node: "",
      python: "",
      experience: 0,
      comment: "",
      errors: {
        fname: "",
        lname: "",
        addr1: "",
        addr2: "",
        city: "",
        zip: "",
        email: "",
        gender: "",
        html: "",
        css: "",
        bootstrap: "",
        react: "",
        dom: "",
        mysql: "",
        mongodb: "",
        node: "",
        python: "",
      },
    };
  }
  handleChange = ({ target: { name, value } }) => {
    const errors = { ...this.state.errors };
    switch (name) {
      case "fname": {
        if (!value) {
          errors.fname = "Name is Required";
        } else {
          errors.fname = "";
        }
        break;
      }
      case "lname": {
        if (!value) {
          errors.lname = "Name is Required";
        } else {
          errors.lname = "";
        }
        break;
      }
      case "addr1": {
        if (!value) {
          errors.addr1 = "Address is Required";
        } else {
          errors.addr1 = "";
        }
        break;
      }
      case "addr2": {
        if (!value) {
          errors.addr2 = "Address is Required";
        } else {
          errors.addr2 = "";
        }
        break;
      }
      case "city": {
        if (!value) {
          errors.city = "city is Required";
        } else {
          errors.city = "";
        }
        break;
      }
      case "zip": {
        if (!value) {
          errors.zip = "zip is Required";
        } else {
          errors.zip = "";
        }
        break;
      }
      case "email": {
        if (!value) {
          errors.email = "Email is Required";
        } else if (!validateEmail.test(value)) {
          errors.email = "Email is Invalid";
        } else {
          errors.email = "";
        }
        break;
      }
      default: {
        console.log();
      }
    }
    this.setState({ errors, [name]: value });
  };
  handleSkills = ({ target: { name, value, checked } }) => {
    if ({ [name]: "MERN" || "MEAN" || "Designing" }) {
      value = checked;
      this.setState({ [name]: value });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = { ...this.state.errors };
    const {
      target: { name, value },
    } = event;
    if (this.state.gender === "") {
      errors.gender = "Fill the Gender";
      alert("Fill the Gender");
    }

    // eslint-disable-next-line array-callback-return
    Skills.filter((obj) => {
      if (this.state[obj] === "") {
        alert(`please fill the ${obj} column in skills`);
        return (errors[obj] = (
          <>
            <span className="hide">hii</span>{" "}
            <i className="fas fa-exclamation-triangle"></i>
          </>
        ));
      }
    });
    this.setState({ errors, [name]: value });
    if (this.validation()) {
      alert("Check the submitted value in console");
      console.log(this.state);
    }
  };

  validation = () => {
    const {
      fname,
      lname,
      addr1,
      addr2,
      city,
      state,
      zip,
      email,
      gender,
      applyfor,
      html,
      css,
      bootstrap,
      react,
      dom,
      mysql,
      node,
      mongodb,
      python,
      experience,
      comment,
    } = this.state;
    if (
      fname !== "" &&
      lname !== "" &&
      addr1 !== "" &&
      addr2 !== "" &&
      email !== "" &&
      city !== "" &&
      node !== "" &&
      state !== "" &&
      zip !== "" &&
      gender !== "" &&
      applyfor !== "" &&
      html !== "" &&
      css !== "" &&
      bootstrap !== "" &&
      react !== "" &&
      dom !== "" &&
      mysql !== "" &&
      mongodb !== "" &&
      python !== "" &&
      experience !== "" &&
      comment !== ""
    ) {
      if (validateEmail.test(this.state.email)) {
        return true;
      }
    }
  };
  handlerRating = (event) => {
    const a = +event.target.id;
    for (let i = 1; i <= a; i++) {
      document.getElementById(i).classList.add("starbg");
    }
    for (let j = a + 1; j <= 5; j++) {
      const a = document.getElementById(j);
      if (a.classList.contains("starbg")) {
        a.classList.remove("starbg");
      } else {
        continue;
      }
    }
  };
  handleReset = () => {
    this.setState({
      fname: "",
      lname: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "Tamil Nadu",
      zip: "",
      email: "",
      gender: "",
      applyfor: "front-end",
      html: "",
      css: "",
      bootstrap: "",
      react: "",
      dom: "",
      mysql: "",
      mongodb: "",
      node: "",
      python: "",
      experience: 0,
      comment: "",
      errors: {
        fname: "",
        lname: "",
        addr1: "",
        addr2: "",
        city: "",
        zip: "",
        email: "",
        gender: "",
        html: "",
        css: "",
        bootstrap: "",
        react: "",
        dom: "",
        mysql: "",
        mongodb: "",
        node: "",
        python: "",
      },
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Form.Group as={Col} controlId="inputfname4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.handleChange}
                    required
                  />
                  {this.state.errors.fname ? (
                    <p>{this.state.errors.fname}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="inputlname4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.lname}
                    onChange={this.handleChange}
                    required
                    name="lname"
                  />
                  {this.state.errors.lname ? (
                    <p>{this.state.errors.lname}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="inputAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 Main St"
                    value={this.state.addr1}
                    onChange={this.handleChange}
                    required
                    name="addr1"
                  />
                  {this.state.errors.addr1 ? (
                    <p>{this.state.errors.addr1}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="inputAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Apartment or Studio"
                    value={this.state.addr2}
                    onChange={this.handleChange}
                    name="addr2"
                  />
                  {this.state.errors.addr2 ? (
                    <p>{this.state.errors.addr2}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="inputcity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={this.state.city}
                    onChange={this.handleChange}
                    name="city"
                  />
                  {this.state.errors.city ? (
                    <p>{this.state.errors.city}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="inputstate">
                  <Form.Label>State</Form.Label>
                  <select
                    className="form-control"
                    id="inputstate"
                    required
                    value={this.state.state}
                    onChange={this.handleChange}
                    city="state"
                    name="state"
                  >
                    {states.map((obj, index) => {
                      return <option key={index}>{obj.name}</option>;
                    })}
                  </select>
                </Form.Group>
                <Form.Group as={Col} controlId="inputZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={this.state.zip}
                    onChange={this.handleChange}
                    name="zip"
                  />
                  {this.state.errors.zip ? <p>{this.state.errors.zip}</p> : ""}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="inputemail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.email ? (
                    <p>{this.state.errors.email}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="inputgender">
                  <Form.Label>Gender</Form.Label>
                  <InputGroup>
                    <Form.Check
                      type="radio"
                      value="male"
                      name="gender"
                      onChange={this.handleChange}
                    />
                    Male
                    <span className="hide">hi</span>
                    <Form.Check
                      type="radio"
                      value="female"
                      name="gender"
                      onChange={this.handleChange}
                    />
                    Female<span className="hide">hi</span>
                    <Form.Check
                      type="radio"
                      value="other"
                      name="gender"
                      onChange={this.handleChange}
                    />{" "}
                    Other
                    <span className="hide">hi</span>
                  </InputGroup>
                  {this.state.errors.gender ? (
                    <p>{this.state.errors.gender}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} controlId="inputskills">
                  <Form.Label>Skills</Form.Label>
                  <InputGroup>
                    <Form.Check
                      type="checkbox"
                      name="Designing"
                      value={this.state.skills}
                      onChange={this.handleSkills}
                    />
                    Designing<span className="hide">hi</span>
                    <Form.Check
                      type="checkbox"
                      name="MEAN"
                      value={this.state.skills}
                      onChange={this.handleSkills}
                    />
                    MEAN<span className="hide">hi</span>
                    <Form.Check
                      type="checkbox"
                      name="MERN"
                      value={this.state.skills}
                      onChange={this.handleSkills}
                    />
                    MERN<span className="hide">hi</span>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="inputapplied">
                  <Form.Label>Applying for:</Form.Label>
                  <select
                    className="form-control"
                    id="inputapplied"
                    required
                    name="applyfor"
                    onChange={this.handleChange}
                    value={this.state.applyfor}
                  >
                    <option value="front-end">Front End</option>
                    <option value="back-end">Back End</option>
                    <option value="full-stack">Full Stack</option>
                  </select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Label>How Familiar are you with ?</Form.Label>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Skills</th>
                      <th>Excellent</th>
                      <th>Good</th>
                      <th>Fair</th>
                      <th>Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Skills.map((obj, ind) => {
                      return (
                        <tr key={ind}>
                          <td>
                            {obj}
                            {this.state.errors[obj] ? (
                              <span>{this.state.errors[obj]}</span>
                            ) : null}
                          </td>
                          <td>
                            <Form.Check
                              type="radio"
                              value="excellent"
                              name={obj}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <Form.Check
                              type="radio"
                              value="good"
                              name={obj}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <Form.Check
                              type="radio"
                              value="fair"
                              name={obj}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <Form.Check
                              type="radio"
                              value="poor"
                              name={obj}
                              onChange={this.handleChange}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
              <Row>
                <h3>Your Experience</h3>

                <div>
                  <span>
                    <i
                      className="far fa-star fa-3x"
                      onClick={this.handlerRating}
                      id="1"
                    ></i>
                  </span>
                  <span>
                    <i
                      id="2"
                      className="far fa-star fa-3x"
                      onClick={this.handlerRating}
                    ></i>
                  </span>
                  <span>
                    <i
                      id="3"
                      className="far fa-star fa-3x"
                      onClick={this.handlerRating}
                    ></i>
                  </span>
                  <span>
                    <i
                      id="4"
                      className="far fa-star fa-3x"
                      onClick={this.handlerRating}
                    ></i>
                  </span>
                  <span>
                    <i
                      id="5"
                      className="far fa-star fa-3x"
                      onClick={this.handlerRating}
                    ></i>
                  </span>
                </div>

                <p>
                  (If you're fresher or having experience witin 1 year press 1
                  star, more than 1 year select 2 stars, more than 5 years
                  select 5 stars)
                </p>
              </Row>
              <Row>
                <Form.Group controlId="inputcomment">
                  <Form.Label>Add Comment if you wish!</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    placeholder="Leave a comment here"
                    onChange={this.handleChange}
                    style={{ height: "100px", width: "50%" }}
                    name="comment"
                    value={this.state.comment}
                  />
                </Form.Group>
              </Row>

              <br />
              <Row>
                <Form.Group as={Col}>
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </Form.Group>
                <Form.Group as={Col}>
                  <button
                    type="reset"
                    onClick={this.handleReset}
                    className="btn btn-danger"
                  >
                    Reset
                  </button>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
