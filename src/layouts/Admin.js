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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import {Route, Switch, useLocation} from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import logo from "logo-new.png";
import {Col, Row} from "reactstrap";


function Dashboard(props) {
    const [backgroundColor] = React.useState("white");
    const [activeColor] = React.useState("info");
    const mainPanel = React.useRef();
    const location = useLocation();
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(mainPanel.current);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.body.classList.toggle("perfect-scrollbar-on");
            }
        };
    });
    React.useEffect(() => {
        mainPanel.current.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [location]);
    const submitClick = (e) => {
        const formData = e.currentTarget.form;
        localStorage.setItem('user',  formData[0].value);
    }


    const loginPage = <div>
        <div className="main-panel" ref={mainPanel} style={{width: "100%", marginTop: "10%", backgroundColor: "white", overflow: "hidden", textAlign: "center"}}>
            <Row>
                <Col lg={{size: 4, offset: 4}} md={{size: 4, offset: 4}} sm="12">
            <form className="form-signin" style={{width:"100%", maxWidth: "330px", padding: "15px", margin: "0 auto"}}>
                <img className="mb-4" src={logo} alt="" width="172"
                     height="172"/>
                    <div className="h3 mb-3 font-weight-normal">Welcome to Knowingly!</div>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" className="form-control" placeholder="Email address"/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/>  Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submitClick}>Sign in</button>
                            <p className="mt-5 mb-3 text-muted">&copy; Knowingly</p>
            </form>
                </Col>
            </Row>
        </div>

    </div>;
    const userLogged = localStorage.getItem('user') && (localStorage.getItem('user') === 'Sara' || localStorage.getItem('user') === 'Mike' ) ;
    const user = userLogged ? localStorage.getItem('user') : null;
    const homePage =   <div>
        <Sidebar
            {...props}
            routes={routes}
            bgColor={backgroundColor}
            activeColor={activeColor}
            user={user}
        />
        <div className="main-panel" ref={mainPanel}>
            <DemoNavbar {...props} user={user} />
            <Switch>
                {routes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                            user={user}
                        />
                    );
                })}
            </Switch>
            <Footer fluid />
        </div>
        {/*<FixedPlugin*/}
        {/*  bgColor={backgroundColor}*/}
        {/*  activeColor={activeColor}*/}
        {/*  handleActiveClick={handleActiveClick}*/}
        {/*  handleBgClick={handleBgClick}*/}
        {/*/>*/}</div>;
    return (
        <div className="wrapper">
            {userLogged?homePage:loginPage}
        </div>
    );
}

var ps;

export default Dashboard;
