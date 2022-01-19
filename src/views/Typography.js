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
  Row,
  Col,
  CardTitle,
  Button,
  CardFooter,
  InputGroup,
  Input,
  InputGroupAddon, InputGroupText
} from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="3">
            {/*<Card>*/}
            {/*  <CardHeader>*/}
            {/*    <CardTitle tag="h4">Chats</CardTitle>*/}
            {/*  </CardHeader>*/}
            {/*</Card>*/}
            <Card>
              <CardBody>
              <form>
                <InputGroup className="no-border">
                  <Input placeholder="Search in chats..." />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </form>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
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
                      <Col md="7" xs="7">
                        Khaled Kaleesi<br />
                        <span className="text-muted">
                          <small>What is the best way to add plugins to navs?</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">

                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={
                                require("assets/img/mike.jpg")
                                    .default
                              }
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Creative Tim <br />
                        <span className="text-muted">
                          <small>How many bytes does a registery have in linux?</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={
                                require("assets/img/faces/clem-onojeghuo-2.jpg")
                                    .default
                              }
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-muted">
                          <small>Why should we enable config files in jenkins local?</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">

                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <CardBody>
                <Row style={{marginBottom: "24px"}}>
                  <Col md="2" xs="2">
                    <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
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
                  <Col md="7" xs="7">
                    <strong>What is the best way to add plugins to navs?</strong> <br />
                    <span className="text-muted">
                          <small>1d . by Khaled Kaleesi</small>
                        </span> <br/>
                    <span>What are the drawbacks of conventional VM over container based microservices. You may mention some bold points for further discussions. On the other hand in production server what kind of container engine mostly used i.e. docker, podman etc. and the host system operating system too.</span>
                    <br />
                    <Row>
                      <span style={{marginLeft: "8px"}} className="badge badge-pill badge-info">VM</span>
                      <span style={{marginLeft: "8px"}} className="badge badge-pill badge-info">microservice</span>
                      <span style={{marginLeft: "8px"}} className="badge badge-pill badge-info">plugin</span>
                    </Row>
                  </Col>

                </Row>

              </CardBody>
            </Card>
            <Row>
              <Col md="1" xs="1">
                <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
                  <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        require("assets/img/mike.jpg")
                            .default
                      }
                  />
                </div>
              </Col>
              <Col >
                <Card>
                  <CardBody>
                    This is my helpppppppp
                  </CardBody>
                  <CardFooter>
                    <small> 12:30 pm</small>

                  </CardFooter>
                </Card>

              </Col>

            </Row>
            <Row>
              <Col md="1" xs="1">
                <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
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
              <Col >
                <Card>
                  <CardBody>
                    Thank yoooooooooy
                  </CardBody>
                  <CardFooter>
                    <small> 12:21 pm</small>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
                <Row>
            <Col md="1" xs="1">
              <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
                <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={
                      require("assets/img/mike.jpg")
                          .default
                    }
                />
              </div>
            </Col>
              <Col>
                <Card>
                  <CardBody>
                    a great one
                  </CardBody>
                  <CardFooter>
                    <small> 12:32 pm</small>

                  </CardFooter>
                </Card>

              </Col>

            </Row>
            <Row>
              <Col md="1" xs="1">
                <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
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
              <Col md={{size: 3}}>
                <Card>
                  <CardBody>
                    I cant believe
                  </CardBody>
                  <CardFooter>
                    <small> 13:21 pm</small>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="1" xs="1">
                <div className="avatar" style={{borderRadius: 0, width: "45px", height: "45px"}}>
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
              <Col md={{size: 3}}>
                <Card>
                  <CardBody>
                    This is crazy
                  </CardBody>
                  <CardFooter>
                    <small> 13:41 pm</small>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
