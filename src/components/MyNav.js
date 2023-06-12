import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNav.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect, useRef } from "react";
import { NavDropdown } from "react-bootstrap";

export const MyNav = () => {
  
  const [navOpen, setNavOpen] = useState(false);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [y, setY] = useState(0);

  const handleNavigation = (e) => {

    const window = e.currentTarget;

    if (y > window.scrollY || y < window.scrollY) {

      if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

        document.getElementById("responsive-navbar-nav").classList.remove("show");
        document.getElementById("toggle_btn").classList.remove("open");
        setNavOpen(navOpen => !navOpen);

      }

      else if (window.innerWidth > 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

        document.getElementById("responsive-navbar-nav").classList.remove("show");

      }

    }

    setY(window.y);

  };

  // const handleClickOutside = () => {

  //   if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

  //     document.getElementById("responsive-navbar-nav").classList.remove("show");
  //     document.getElementById("toggle_btn").classList.remove("open")
  //     setNavOpen(navOpen => !navOpen)

  //   }

  //   setY(window.y);

  // };

  

  useEffect(() => {

    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");
      document.getElementById("responsive-navbar-nav").classList.remove("collapse");

    }

  }, []);

  const toggleNav = () => {

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");

      if (!navOpen) {

        document.getElementById("toggle_btn").classList.add("open")
        document.getElementById("responsive-navbar-nav").classList.add("show");

      }
      
      else {

        document.getElementById("toggle_btn").classList.remove("open")
        document.getElementById("responsive-navbar-nav").classList.remove("show");

      }

      setNavOpen(navOpen => !navOpen);

    }

  }

  return (

    <div>
      
        <Navbar collapseOnSelect expand = "lg" variant = "light" className = "myNavbar fixed-top" >

          <Container>
          <Navbar.Brand href = "/cyc-website/"> <img src = {process.env.PUBLIC_URL + "/images/logo.png"} alt = "CYC" className = "Shadowed Col" /> </Navbar.Brand>

            <button className = "navbar-toggler second-button toggleBtn" type = "button" data-toggle = "collapse" data-target = "#responsive-navbar-nav"
              aria-controls = "responsive-navbar-nav" aria-expanded = "false" aria-label = "Toggle navigation" onClick = {toggleNav}>
              <div className = "animated-icon2" id = {"toggle_btn"}><span></span><span></span><span></span><span></span></div>
            </button>
            

            <Navbar.Collapse id = "responsive-navbar-nav" className = "navbar-collapse">

              <Nav className = "me-auto" />

              <Nav className = "links">

                <CustomLink href = {"/cyc-website/"}>Home</CustomLink>
                <CustomLink href = {"/cyc-website/about"}>About</CustomLink>
                <CustomLink href = {"/cyc-website/apps"}>CYC Apps</CustomLink>
                {/* <CustomLink href = {"/cyc-website/team"}>Team</CustomLink> */}
                <NavDropdown title="Team" id="collasible-nav-dropdown" className={"navItem"} to="/cyc-website/team">
                  <NavDropdown.Item href="/cyc-website/team">The CYC Team</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/cyc-website/team#youthBoard">Youth Leadership Board</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/cyc-website/apply">Apply</NavDropdown.Item>
                </NavDropdown>
                <CustomLink href = {"/cyc-website/projects"}>Projects</CustomLink>
                <CustomLink href = {"/cyc-website/donate"}>Donate</CustomLink>


              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>   

    </div>

  )

  function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
        path === href ?
        <Nav.Link href={href} {...props} className={"active navItem"}>{children}</Nav.Link>:
            <Nav.Link href={href} {...props} className={"navItem"}>{children}</Nav.Link>
    )

  }

}
