import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import "./Education.css";
import Aos from "aos";
import { purple } from "@mui/material/colors";

export const Education = () => {
  return (
    <>
      <div className='global-container'>
        <Box sx={{ flexGrow: 1 }} class='flex'>
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent='center'
            alignItem='center'
            data-aos='flip-left'
            data-aos-delay='0'
            data-aos-easing='ease'
            data-aos-duration='2000'
            item
          >
            <Grid xs={10} md={10} className='education'>
              <h1>🎓Education</h1>
              <img className='uniLogo' src='../../Images/sindh.png' alt='' />
              <h2>
                <a
                  href='https://usindh.edu.pk/'
                  className='eduTitle'
                  style={{ color: "#eb6612" }}
                >
                  University of Sindh
                </a>
              </h2>
              <h3>Bachelor of science in Inforamtion technology</h3>
              <p>January 2019 - February 2022</p>
              <div id='divider'></div>
              <img
                className='uniLogo'
                src='../../Images/aps.png'
                alt=''
                style={{ height: "50px", objectFit: "cover" }}
              />
              <h2>
                <a
                  href='http://www.apsachyd.edu.pk/'
                  className='eduTitle'
                  style={{ color: "#eb6612" }}
                >
                  Army Public School and College Systems, Hyderabad
                </a>
              </h2>
              <h3>Intermediate in Pre-Engineering</h3>
              <p>April 2016 - April 2018</p>
              <div id='divider'></div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
