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
import { animateScroll as scroll , Element} from 'react-scroll'


const Header = () => {
  const scrollToContact = ()=>{
    scroll.scrollTo(4000)
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <h1>aksjfhoqwi</h1> */}
      <header>
        <Box sx={{ flexGrow: 1 }} class="flex" className="intro"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-easing="ease-in-out-quart"
                data-aos-duration="1000">
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
                <h1 id="name">Hi i'm Sameer <img id="hand" src="../../Images/hand.gif" alt="" /></h1>
                  I am a Blockchain developer from Pakistan
                  <img src="../../Images/flag.png" alt="" id="flag" /> 
                   completed my graduation in Information technology & having expertise in various Blockchain technologies such as Ethereum , solidity , Ethers.js and build Dapps with them. I also work with JavaScript / Reactjs / Material UI and some other cool libraries and frameworks🚀
                  <div className="Icons">
                    <a href="https://github.com/Sameer-472"><GitHubIcon id="github" className="social-media-icons" /></a>
                    <a href="https://www.instagram.com/skywalker_sameer/"> <InstagramIcon id="instagram" className="social-media-icons" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009529212122"><FacebookIcon id="facebook" className="social-media-icons" /></a>
                    <a href="https://twitter.com/Sameerkhan_45"><TwitterIcon id="twitter" className="social-media-icons" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-sameer-27ba2a172/"><LinkedInIcon id="linkedin" className="social-media-icons" /></a>
                  </div>
                  <div className="btn">
                    <button className="mybtn" onClick={scrollToContact} duration={50} smooth={false}>Contact Me</button>
                   <a href=" https://drive.google.com/file/d/1yj1J4yM8BLitJeugQFaPVaEAQ5cNq4_c/view?usp=sharing" target='_blank'><button className="mybtn">My Resume</button></a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={5} md={5} >
              <div>
                <img id="img" src="../../Images/example-scene-2.svg" alt="" className="coverPic"/>
              </div>
            </Grid>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Header;
