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
import {NavLink, Route} from "react-router-dom";
import {Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Row} from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import User from "../../views/User";

var ps;

function Sidebar(props) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
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
  const name =  user === "Mike" ? "Mike Arats" : "Sara Leboiu";
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >

      <div className="logo" style={{zIndex: "5"}}>
        <Row>
        <Col md={4}>
          <Dropdown
              style={{listStyle: "none"}}
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
          >
            <DropdownToggle caret nav>
              <div className="header-avatar avatar" style={{width: "40px", height: "40px"}}>
                {userImage}
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action" onClick={() => window.location.href = "/admin/user-page"}>
                  User Profile
                </button>
                <button type="button" className="btn-danger list-group-item list-group-item-action" onClick={() => {
                  localStorage.setItem('user', 'Abbas');
                  window.location.reload();
                }}>Logout
                </button>
              </div>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col md={6} style={{marginTop: "20px"}}>
          <a>Welcome</a><br/>
          <a href="/admin/user-page" >{name}</a>
        </Col>
        </Row>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
