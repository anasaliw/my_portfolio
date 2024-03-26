import React, { useEffect } from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { animateScroll as scroll, Element } from "react-scroll";

const Header = () => {
  const scrollToContact = () => {
    scroll.scrollTo(4000);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <h1>aksjfhoqwi</h1> */}
      <header>
        <Box
          sx={{ flexGrow: 1 }}
          class="flex"
          className="intro"
          data-aos="fade-up"
          data-aos-delay="0"
          // data-aos-easing='ease-in-out-quart'
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent="center"
            alignItem="center"
          >
            <Grid item xs={10} md={5}>
              <div>
                <div id="myInfo">
                  <h1 id="name">
                    Hi I am Anas{" "}
                    <img id="hand" src="../../Images/hand.gif" alt="" />
                  </h1>
                  I am a ReactJs / MERN developer from Pakistan &nbsp;&nbsp;
                  <img
                    src="../../Images/flag.png"
                    alt=""
                    id="flag"
                    // style={{ margin: "0 10px" }}
                  />
                  &nbsp;&nbsp;
                  {""}I have completed my graduation in Information technology &
                  having expertise in various Website Development technologies
                  such as HTML, CSS, Javascript , ReactJs , NodeJs , ExpressJS
                  and MongoDB with them. I also work with MaterialUI , Redux ,
                  Github and some other cool libraries and frameworks🚀
                  <div className="Icons">
                    <a href="https://github.com/anasaliw">
                      <GitHubIcon
                        id="github"
                        sx={{
                          transition: ".5s",
                          "&:hover": {
                            color: "#eb6612",
                          },
                        }}
                      />
                    </a>
                    <a href="https://www.instagram.com/iam_introvert_bro/">
                      {" "}
                      <InstagramIcon
                        id="instagram"
                        sx={{
                          transition: ".5s",
                          "&:hover": {
                            color: "#eb6612",
                          },
                        }}
                      />
                    </a>
                    <a href="https://www.facebook.com/anasali.wassan">
                      <FacebookIcon
                        id="facebook"
                        sx={{
                          transition: ".5s",
                          "&:hover": {
                            color: "#eb6612",
                          },
                        }}
                      />
                    </a>
                    {/* <a href="https://twitter.com/Sameerkhan_45"><TwitterIcon id="twitter" className="social-media-icons" /></a> */}
                    <a href="https://www.linkedin.com/in/anas-ali-wassan-059b651bb/">
                      <LinkedInIcon
                        sx={{
                          transition: ".5s",
                          "&:hover": {
                            color: "#eb6612",
                          },
                        }}
                        id="linkedin"
                      />
                    </a>
                  </div>
                  <div className="btn">
                    <button
                      className="mybtn"
                      onClick={scrollToContact}
                      duration={50}
                      smooth={false}
                    >
                      Contact Me
                    </button>
                    <a
                      href="https://drive.google.com/file/d/1up0U-IGRmXh_gQOJ5j5qoD-0gT7trgf2/view?usp=drive_link"
                      target="_blank"
                    >
                      <button className="mybtn">My Resume</button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={5} md={5}>
              <div>
                <img
                  id="img"
                  src="../../Images/example-scene-2.svg"
                  alt=""
                  className="coverPic"
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Header;
