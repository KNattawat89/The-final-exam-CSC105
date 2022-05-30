import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Collapse } from "reactstrap";

const HeaderComponent = () => {
    return(
        <div>
        <Navbar color="light">
        <div className="container d-flex justify-content-between">
          <NavbarBrand href="/">For me</NavbarBrand>
          {/* <Collapse navbar> */}
          <Nav>
              <NavItem>
                  <NavLink href="#">
                      Home
                  </NavLink>
              </NavItem>
              <NavItem>
                 <NavLink href="#">
                     aboutme
                 </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#">
                      PhotoGallery
                  </NavLink>
              </NavItem>
          </Nav>
          {/* </Collapse> */}

        </div>
      </Navbar>
      <div className="jumbotron">
          <div className="container">
              <div className="row row-header">
              <div className="col-12 col-sm-6">
                            <h1 class="display-5 fw-bold">For me</h1>
                            <p class="col-md-8 fs-4">This website created for doing the final exam. And the content of this website are the history and private information. 
                            And the lastone, I want to pass this class,please!</p>
                        </div>

              </div>
          </div>
      </div>
      </div>
    );
}
export default HeaderComponent;