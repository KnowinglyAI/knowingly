/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {
  const [inputText, setInputText] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const user = localStorage.getItem('user');
  const userImage =  user === "Mike" ? <img
      alt="..."
      className="avatar border-gray"
      src={require("assets/img/mike.jpg").default}
  /> :  <img
      alt="..."
      className="avatar border-gray"
      src={require("assets/img/faces/eva.png").default}
  /> ;
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const pushToTags = () => {
    tags.push(inputText);
    setInputText('');
  };
  const tagsView = () => {
    let views = [];
    if (tags.length > 0) {

      for (let tag of tags) {
        views.push(<span style={{marginLeft: "8px"}} className="badge badge-info">{tag}</span>);
      }
    }
    return views;
  };
  return (
    <>
      <div className="content">

        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/damir-bosnjak.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                   {userImage}
                    <h5 className="title">{user === "Mike" ? "Mike Arats" : "Sara Leboiu"}</h5>
                  </a>
                  <p className="description">{user === "Mike" ? "@mikello" : "saravski"}</p>
                </div>
                <p className="description text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Answered</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2 <br />
                        <small>Asked</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        2 <br />
                        <small>Refers</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                            disabled
                          defaultValue={user === "Mike" ? "mikello" : "saravski"}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Calendly address for meetings
                        </label>
                        <Input placeholder="https://calendly.com/user/15min" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue={user === "Mike" ? "Mike" : "Sara"}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue={user === "Mike" ? "Arats" : "Leboiu"}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>What I do</label>
                        <Input
                          type="textarea"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <form className="form-inline">
                        <div className="form-group mb-2">
                          <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="I can help in:"/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                          <Input
                              placeholder="Add as tags"
                              type="text"
                              value={inputText}
                              onChange={handleChange}
                          /> </div>
                        <Button
                            className="btn-round btn-icon"
                            color="danger"
                            outline
                            size="sm"
                            onClick={() => pushToTags()}
                        >
                          <i className="fa fa-plus" />
                        </Button>{tagsView()}
                      </form>

                    </Col>

                  </Row>
                  <Row>

                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"

                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
