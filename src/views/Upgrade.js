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
// reactstrap components
import {
  Button,
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
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import data from "../data";

function Upgrade() {
  const feedLoad = () => {
    let dataSource = askMode ? data.myQuestions : data.othersQuestions;
    let questions = [];
    for (let question of dataSource) {
      questions.push(
          <Row style={{marginBottom: "24px", borderRadius: "50px", borderBottom: "#f4f3ef 1px solid"}}>
            <Col md="2" xs="2">
              <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
                <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={
                      require("assets/img/faces/" + question.photo)
                          .default
                    }
                />
              </div>
            </Col>
            <Col md="7" xs="7">
              <strong>{question.title}</strong> <br />
              <span className="text-muted">
                          <small>{question.time + " . by " + question.lastName}</small>
                        </span> <br/>
              <span>{question.text}</span>
              <br />
              <span className="text-muted">
                          <small>23 likes & 5 promotions</small>
                        </span>
            </Col>
            <Col className="text-right" md="3" xs="3">
              <Button
                  className="btn-round btn-icon"
                  color="success"
                  outline
                  size="sm"
              >
                <i className="fa fa-ellipsis-v" />
              </Button>
            </Col>
          </Row>);
    }
    return questions;
  };
  const [askMode, setAskMode] = React.useState(true);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
      <>
        <div className="content">
          <Row>
            {/*<Col lg={{size: 2, offset: 1}} md={{size: 2, offset: 1}} sm={3}>*/}
            {/*  <div className="button-container" style={{marginTop: "50px"}}>*/}
            {/*    <Button color="default" block className="btn-round" style={{display: "flex", justifyContent: "space-between"}}*/}
            {/*    onClick={() => setAskMode(true)}>*/}
            {/*      <i className="fas fa-question"/>*/}
            {/*      Ask*/}
            {/*      <Badge pill>3</Badge>*/}
            {/*    </Button>*/}
            {/*    <Button color="secondary" block className="btn-round btn btn-outline-secondary" outline style={{display: "flex", justifyContent: "space-between"}}*/}
            {/*            onClick={() => setAskMode(false)}>*/}
            {/*      <i className="nc-icon nc-bulb-63"/>*/}
            {/*      Answer*/}
            {/*      <Badge pill>1</Badge>*/}
            {/*      </Button>*/}
            {/*  </div>*/}
            {/*</Col>*/}
            <Col lg={12} md={12} sm={12}>
              <Row >
                {askMode ? <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="1" xs="1">
                          <div className="avatar" style={{width: "50px", height: "50px"}}>
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={
                                  require("assets/img/faces/ayo-ogunseinde-2.jpg")
                                      .default
                                }
                            />
                          </div>
                        </Col>
                        <Col md="11" xs="11">
                          <form>
                            <InputGroup>
                              <Input placeholder="Ask a question..." />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <i className="fas fa-pencil-alt" />
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </form>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter style={{direction: "rtl"}}>
                      <div className="stats" style={{display: "inline-block", margin: "20px"}}>
                        Booking a Meeting
                        <i className="fas fa-calendar-plus" />
                      </div>
                      <div className="stats" style={{display: "inline-block", margin: "20px"}}>
                        Attachments
                        <i className="fas fa-paperclip" />
                      </div>
                    </CardFooter>
                  </Card>
                </Col> : null }

                <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">
                  <Card>
                    <CardHeader>
                      <Dropdown
                          isOpen={dropdownOpen}
                          toggle={(e) => dropdownToggle(e)}
                      >
                        <DropdownToggle caret nav>
                          Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Most Relevant</DropdownItem>
                          <DropdownItem tag="a">Oldest</DropdownItem>
                          <DropdownItem tag="a">Popular</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </CardHeader>
                    <CardBody>
                      <ul className="list-unstyled team-members">
                        <li>
                          {feedLoad()}
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </div>
      </>
  );
}

export default Upgrade;
