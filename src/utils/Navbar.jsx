import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  // MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Fab } from "@mui/material";

export default function Navbar() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBCollapse
        show={showShow}
        tag="nav"
        className={`d-lg-block sidebar bg-white ${showShow ? 'collapse':''}`}
      >
        <div className="position-sticky">
          <MDBListGroup flush className="mx-2 mt-3 side_navbar">
            <div rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 side_navbar_top_item d-flex mb-3"
              >
                <img src="https://static.heygen.ai/heygen/space/guestSpace.png" />
                <div style={{ marginLeft: "10px", height: "36px" }}>
                  <div className="name" style={{ fontSize: "14px" }}>
                    Praveen <i class="fas fa-regular fa-angle-down"></i>
                  </div>
                  <div style={{ fontSize: "12px", marginTop: "2px" }}>
                    <i class=" fas fa-regular fa-user"></i> 1 <span>Free</span>
                  </div>
                </div>
              </MDBListGroupItem>
            </div>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" active action className="border-0">
              <i class="fas fa-solid fa-house"></i> &nbsp;
                Home
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 "
                
                aria-current="true"
              >
                <MDBIcon fas icon="chart-area me-2" />
                Template
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0 ">
              <i class="fa-solid fa-user-astronaut"></i> &nbsp;
                Avatar
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0 ">
              <i class="fas fa-solid fa-voicemail"></i> &nbsp;
                Voice
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0 ">
              <i class="fas fa-solid fa-video"></i> &nbsp;
                Video
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0 ">
                <MDBIcon far icon="chart-bar me-2" />
                Asset
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span" className="video_translate" style={{marginTop:'30%'}}>
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0"
                style={{ fontSize: "13px" }}
              >
                <i style={{color:'purple'}} class="fas fa-solid fa-globe"></i> &nbsp;
                Video Translate
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span" className="live_session">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0"
                style={{ fontSize: "13px" }}
              >
                <i style={{color:'red'}} class="fas fa-solid fa-circle-dot"></i> &nbsp;
                <b>Webinar</b> Live session
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0">
                <i class="fas fa-regular fa-diamond"></i> &nbsp;Pricing
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0">
                <i class="fas fa-thin fa-flask"></i> &nbsp;

                Labs
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0">
              <i class="fa fa-thin fa-book-open-reader"></i> &nbsp;
                Tutorail
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem tag="a" href="#" action className="border-0">
              <i class="fas fa-solid fa-newspaper"></i> &nbsp;
                News
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleShow}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
              <img
                className="image_logo"
                src="https://app.heygen.com/icons/heygen/logo_hori_text_light_bg.svg"
                height="30"
                alt=""
                loading="lazy"
              />
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <MDBBtn className="mx-2 credits" size="" color="secondary">
                    <i class="fas fa-regular fa-diamond"></i> &nbsp;{" "}
                    <i class="fas fa-regular fa-gift"></i> &nbsp; 1 Credits
                  </MDBBtn>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    {/* <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Something else here</MDBDropdownLink> */}
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBBtn className="mx-2 create_video">
                  <i class="fa fa-thin fa-play"></i> &nbsp;Create Video
                </MDBBtn>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3 me-lg-0 bell_icon">
              <MDBNavbarLink href="#">
                <i class="fa-regular fa-bell"></i>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                {/* <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link user_login_logo"> */}
                <Fab color="" className="user_login_logo" aria-label="add">
                  P
                </Fab>
                {/* </MDBDropdownToggle> */}

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    {/* <MDBDropdownLink href="#">My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Logout</MDBDropdownLink> */}
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
