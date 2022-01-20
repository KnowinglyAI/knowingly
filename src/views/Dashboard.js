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
// react plugin used to create charts
// reactstrap components
import {
  Button, ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Popover, PopoverBody, PopoverHeader,
  Row,
} from "reactstrap";
import data from "../data_new.json";
import {InlineWidget, PopupButton} from "react-calendly";

function Dashboard() {
  const feedLoad = () => {
    let dataSource = data.othersQuestions;
    if (exploreMore) {
      for (let i of data.myQuestions) {
        dataSource.push(i);
      }
    }
    console.log(dataSource)
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
              <Row style={{justifyContent: "space-evenly"}}>
                <Button
                    className="btn btn-light"
                    style={{backgroundColor: "#f8f9fa", borderColor: "#f8f9fa", color: "#212529"}}
                >  <i className="fa fa-thumbs-up" />
                  Like

                </Button>
                <Button
                    className="btn btn-light"
                    style={{backgroundColor: "#f8f9fa", borderColor: "#f8f9fa", color: "#212529", borderRadius: "50%"}}
                >+1
                </Button>
                <Button
                    className="btn btn-light" id="Popover2"  onClick={() => setReferAnswerPopoverOpen(!referPopoverOpen)}
                    style={{backgroundColor: "#f8f9fa", borderColor: "#f8f9fa", color: "#212529"}}
                > <i className="fa fa-share" />
                Refer

                </Button>
                <Popover placement="bottom" isOpen={referPopoverOpen} target="Popover2">
                  <PopoverHeader>Refer this question to others</PopoverHeader>
                  <PopoverBody>
                    <InputGroup>
                      <Input placeholder="Enter their name or email" />
                    </InputGroup>
                    <Button className="btn btn-secondary">
                      Send
                    </Button>
                  </PopoverBody>
                </Popover>
                <Button id="Popover1" className="btn btn-primary" onClick={() => setAnswerPopoverOpen(!answerPopoverOpen)}>
                  Answer
                </Button>
                <Popover placement="bottom" isOpen={answerPopoverOpen} target="Popover1">
                  <PopoverHeader>How do you want to help?</PopoverHeader>
                  <PopoverBody>
                    <ButtonGroup>
                      <PopupButton className="btn btn-outline-primary" text="Book a Meeting" url="https://calendly.com/kamalimaryam/15min"/>
                      <Button className="btn btn-outline-primary">Reply with Text</Button>
                    </ButtonGroup>
                  </PopoverBody>
                </Popover>
              </Row>

            </CardBody>
          </Card>);
    }
    return questions;
  };
  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const [answerPopoverOpen, setAnswerPopoverOpen] = React.useState(false);
  const [referPopoverOpen, setReferAnswerPopoverOpen] = React.useState(false);
  const [exploreMore, setExploreMore] = React.useState(false);
  const [showBooking, setShowBooking] = React.useState(false);
  // this.toggle = this.toggle.bind(this);
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
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
      <>
        <div className="content">
          {openQuestion?<Row>
            <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">
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
                            className="btn btn-primary"
                        >Submit
                        </Button>
                       </Row>
                      </form>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter style={{direction: "rtl"}}>
                  {/*<div className="stats" style={{display: "inline-block", margin: "20px"}}>*/}
                  {/*  Booking a Meeting*/}
                  {/*  <i className="fas fa-calendar-plus" />*/}
                  {/*</div>*/}

                  <div className="stats" style={{display: "inline-block", margin: "20px"}} onClick={() => setOpenQuestion(false)}>
                    <i className="nc-icon nc-minimal-up" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>:<Row>
            <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="1" xs="1">
                      <div className="avatar" style={{width: "50px", height: "50px"}}>
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
                    <Col md="11" xs="11">
                      <form>
                        <InputGroup onClick={()=> setOpenQuestion(true)}>
                          <Input placeholder="Ask anything here ..." />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="fas fa-pencil-alt" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup></form></Col></Row></CardBody></Card></Col></Row>}
          <Row style={{}}>
            <Col lg={6} md={6} sm={6}>
              <div className="typography-line" style={{fontWeight: "700", fontSize: "larger", marginTop: "16px", paddingLeft: "20%"}}>
                Questions for you
              </div>
            </Col>
            <Col lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}>
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
              </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Row >
                <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="12">


                  {feedLoad(3)}
                </Col>

              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{size: 2, offset:4}} md={{size: 8, offset: 4}}>
            <Button
                className="btn"
                color="primary"
                onClick={() => {setExploreMore(true)}}
            >
              Explore More
            </Button>
            </Col>
          </Row>
        </div>
      </>
  );
}

export default Dashboard;
