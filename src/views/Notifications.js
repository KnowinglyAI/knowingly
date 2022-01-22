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
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Notifications() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Notifications</CardTitle>
                <p className="card-category">
                  You can see your notifications here.
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notifications</CardTitle>
                      </CardHeader>
                      <CardBody>
                        {"Sara" === localStorage.getItem('user') ? <div><Alert color="success">
                          <span>Mike sent you a meeting request</span>
                        </Alert>
                          <Alert color="success">
                            <span>Mike sent you a new message</span>
                          </Alert></div> : null}

                        <Alert color="info">
                          <span>Hanna sent you a new message</span>
                        </Alert>
                        <Alert color="info">
                          <span>You have 3 questions waiting for you</span>
                        </Alert>
                        <Alert color="info">
                          <span>Alan made a question</span>
                        </Alert>
                        <Alert color="info">
                          <span>Mary sent you a meeting request</span>
                        </Alert>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
