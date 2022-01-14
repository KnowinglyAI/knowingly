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
  Button,
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
  NavbarToggler,
} from "reactstrap";

import routes from "routes.js";


function Header(props) {
  // let history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
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
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "dark"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <form style={{width: "600px"}}>
            <InputGroup className="no-border">
              <Input placeholder="Search..." />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="nc-icon nc-zoom-split" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <Nav navbar>
            {/*<NavItem>*/}
            {/*  <Button*/}
            {/*      className="btn-round"*/}
            {/*      color="success"*/}
            {/*      type="submit"*/}
            {/*      onClick={() => handleAddClick()}*/}
            {/*  >*/}
            {/*    Ask*/}
            {/*  </Button>*/}
            {/*</NavItem>*/}
            {/*<NavItem>*/}
            {/*  <Link to="#pablo" className="nav-link btn-rotate">*/}
            {/*    <div className="header-avatar avatar" style={{width: "40px", height: "40px"}}>*/}
            {/*      <img*/}
            {/*          alt="..."*/}
            {/*          className="img-circle img-no-padding img-responsive" style={{borderRadius: "50%"}}*/}
            {/*          src={*/}
            {/*            require("assets/img/mike.jpg")*/}
            {/*                .default*/}
            {/*          }*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </Link>*/}
            {/*</NavItem>*/}
            {/*<NavItem>*/}
            {/*  <Button*/}
            {/*      className="btn-round btn-icon"*/}
            {/*      color="danger"*/}
            {/*      size="sm"*/}
            {/*      onClick={() => {*/}
            {/*        localStorage.setItem('user', 'Abbas');*/}
            {/*        window.location.reload();*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    <i className="nc-icon nc-button-power" />*/}
            {/*  </Button>*/}
            {/*</NavItem>*/}
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <div className="header-avatar avatar" style={{width: "40px", height: "40px"}}>
                  <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive" style={{borderRadius: "50%"}}
                      src={
                        require("assets/img/mike.jpg")
                            .default
                      }
                  />
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a" href="">User Profile</DropdownItem>
                <DropdownItem tag="a" >
                  <Button
                      className="btn-danger"
                      color="danger"
                      onClick={() => {
                        localStorage.setItem('user', 'Abbas');
                        window.location.reload();
                      }}
                  >
                    <i className="nc-icon nc-button-power" />
Logout
                  </Button>
               </DropdownItem>

              </DropdownMenu>
            </Dropdown>
            {/*<NavItem>*/}
            {/*  <Link to="#pablo" className="nav-link btn-rotate">*/}
            {/*    <i className="nc-icon nc-settings-gear-65" />*/}
            {/*    <p>*/}
            {/*      <span className="d-lg-none d-md-block">Account</span>*/}
            {/*    </p>*/}
            {/*  </Link>*/}
            {/*</NavItem>*/}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
