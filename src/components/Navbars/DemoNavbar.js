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
import {useLocation} from "react-router-dom";
import {
  Button, Col,
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler, NavItem, Row,
} from "reactstrap";

import routes from "routes.js";
import data from "data_new.json";

function Header(props) {
  // let history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const user = props.user;
  const usersData = data.users;
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
  let userData = {};
  for (let u of usersData) {
    if (u.username === user) {
      userData = u;
    }
  }
  console.log(userData);
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  // const handleProfileClick = () => {
  //   history.push('/profile')
  // };

  const getBrand = () => {
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  // const logoutUser = () => {
  //   localStorage.setItem('user', 'Abbas');
  // };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
      <Row style={{padding: "20px"}}>
        <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} sm="11">   <form >
          <InputGroup className="no-border">
            <Input placeholder="Search..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="nc-icon nc-zoom-split" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </form></Col>
        <Col lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}} sm="1"> <Button
            className="btn-round btn-icon"
            color="info"
            outline
            size="sm"
            onClick={() => {
              localStorage.setItem('user', 'Abbas');
              window.location.reload();
            }}
        >
          <i className="nc-icon nc-button-power" />
        </Button></Col>
      </Row>
  );
}

export default Header;
