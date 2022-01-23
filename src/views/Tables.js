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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Button,
  CardFooter,
  Popover,
  PopoverHeader,
  PopoverBody,
  ButtonGroup,
} from "reactstrap";
import data from "../data_new";
import {PopupButton} from "react-calendly";

function Tables() {

  const feedLoad = () => {
    let dataSource = data.myAskedQuestions;
    let name = "Sara Leboiu";
    if ("Mike" === localStorage.getItem('user')) {
      name = "Mike Arats"
    }

    let questions = [];
    for (let question of dataSource) {
      const tags = [];
      for (let tag of question.tags) {
        tags.push(<span style={{marginLeft: "8px"}} className="badge badge-pill badge-info">{tag}</span>);
      }
      questions.push(
          <Card>
            <CardBody>
              <Row style={{marginBottom: "24px"}}>
                <Col md="2" xs="2">
                  <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
                    {userImage}
                  </div>
                </Col>
                <Col md="7" xs="7">
                  <strong>{question.title}</strong> <br />
                  <span className="text-muted">
                          <small>{question.time + " . by " + name}</small>
                        </span> <br/>
                  <span>{question.text}</span>
                  <br />
                  <span className="text-muted">
                          <small>23 likes & 5 promotions</small>
                        </span>
                  <Row>
                    {tags}
                  </Row>
                </Col>
                <Col className="text-right" md="3" xs="3">
                  <Button
                      className="btn-round btn-icon"
                      color="primary"
                      outline
                      size="sm"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </Button>
                </Col>
              </Row>


            </CardBody>
          </Card>);
    }
    return questions;
  };
  const [inputText, setInputText] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const user = localStorage.getItem('user');
  const userImage =  user === "Mike" ? <img
      alt="..."
      className="img-circle img-no-padding img-responsive" style={{borderRadius: "50%"}}
      src={
        require("assets/img/mike.jpg")
            .default
      }
  /> :   <img
      alt="..."
      className="img-circle img-no-padding img-responsive" style={{borderRadius: "50%"}}
      src={
        require("assets/img/faces/eva.png")
            .default
      }
  />;
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
          <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="1" xs="1">
                    <div className="avatar" style={{width: "50px", height: "50px"}}>
                      {userImage}
                    </div>
                  </Col>
                  <Col md="11" xs="11">
                    <form>
                      <InputGroup>
                        <Input placeholder="Question Title" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fas fa-pencil-alt" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>

                      <InputGroup>
                        <Input placeholder="Describe Your Question" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>

                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>

                      <form className="form-inline">
                        <div className="form-group">
                          <Input
                              placeholder="Add tags"
                              type="text"
                              value={inputText}
                              onChange={handleChange}
                          /> </div>
                        <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                            onClick={() => pushToTags()}
                        >
                          <i className="fa fa-plus" />
                        </Button>{tagsView()}
                      </form>
                      <div className="stats" style={{display: "inline-block", margin: "20px"}}>
                        Attachments
                        <i className="fas fa-paperclip" />
                      </div>
                      <Row>
                        <Button
                            className="btn btn-primary" onClick={(e) => e.preventDefault()}
                        >Submit
                        </Button>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Row >
              <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">


                {feedLoad()}
              </Col>

            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
