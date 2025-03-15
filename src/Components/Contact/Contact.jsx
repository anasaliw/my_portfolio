import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => {
  return (
    <div>
      <Box
        className='flex'
        sx={{
          marginTop: "-50px",
          p: {
            lg: "0px 0px",
            md: "0px 20px",
            sm: "0px 30px",
            xs: "0px 20px",
          },
        }}
      >
        <h1 className='reach-out'>🤙 Reach out to Me!</h1>
        <Grid
          container
          spacing={1}
          // direction="column"
          justifyContent='center'
          alignItem='center'
          data-aos='zoom-in-up'
          data-aos-delay='0'
          data-aos-easing='ease'
          data-aos-duration='2000'
          item
        >
          <Grid xs={10} md={8} order={{ xs: 3, md: 1 }} className='contact'>
            <p>WANT TO WORK WITH ME SAY HELLO MY DM ARE OPEN FOR EVERYONE</p>
            <h2 style={{ marginTop: "10px" }}>
              Pakistani || Aspiring Software Engineer || Tech Guy
            </h2>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: {
                  lg: "flex-start",
                  md: "center",
                  sm: "center",
                  xs: "center",
                },
                alignItems: "center",
                // textAlign: "center",
              }}
            >
              <AddLocationAltIcon />
              <p style={{ marginLeft: "10px" }}>Karachi , Pakistan </p>
            </Box>
            <h3 style={{ marginTop: "10px" }}>Open for work: Yes</h3>
            <h3 style={{ marginTop: "10px" }}>+92-334-2591914</h3>
            <Box
              className=''
              sx={{
                mt: "20px",
                "& > a": {
                  mr: 5,
                },
              }}
            >
              <a href='https://github.com/anasaliw'>
                <GitHubIcon
                  id='github'
                  sx={{
                    transition: ".5s",
                    "&:hover": {
                      color: "#eb6612",
                    },
                  }}
                />
              </a>
              <a href='https://www.instagram.com/iam_introvert_bro/'>
                {" "}
                <InstagramIcon
                  id='instagram'
                  sx={{
                    transition: ".5s",
                    "&:hover": {
                      color: "#eb6612",
                    },
                  }}
                />
              </a>
              <a href='https://www.facebook.com/anasali.wassan'>
                <FacebookIcon
                  id='facebook'
                  sx={{
                    transition: ".5s",
                    "&:hover": {
                      color: "#eb6612",
                    },
                  }}
                />
              </a>

              <a href='https://www.linkedin.com/in/anas-ali-wassan-059b651bb/'>
                <LinkedInIcon
                  id='linkedin'
                  sx={{
                    transition: ".5s",
                    "&:hover": {
                      color: "#eb6612",
                    },
                  }}
                />
              </a>
            </Box>
          </Grid>
          <Grid
            xs={10}
            md={2}
            order={{ xs: 1, md: 1 }}
            sx={{
              textAlign: "center",
            }}
          >
            <img src='../../Images/cvpic.jpeg' className='mydp' alt='' />
          </Grid>
        </Grid>
        <div className='footer'>
          <p>Made with my heart 🧡</p>
          <p>Developer Anas</p>
        </div>
      </Box>
    </div>
  );
};
