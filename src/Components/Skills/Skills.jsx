import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const Skills = () => {
  const skillsDetails = [
    {
      img: "https://img.icons8.com/officel/50/000000/react.png",
      name: "React js",
    },
    {
      img: "https://img.icons8.com/color/50/000000/javascript--v1.png",
      name: "Javascript",
    },
    {
      img: "https://img.icons8.com/color/50/000000/css3.png",
      name: "CSS3",
    },
    {
      img: "https://img.icons8.com/color/50/000000/html-5.png",
      name: "HTML5",
    },

    {
      img: "https://img.icons8.com/color/48/000000/npm.png",
      name: "NPM",
    },
    {
      img: "https://img.icons8.com/color/50/000000/material-ui.png",
      name: "Material UI",
    },
    {
      img: "https://img.icons8.com/color/48/null/nodejs.png",
      name: "Node js",
    },
    {
      img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
      name: "MongoDB",
    },
    {
      img: "https://img.icons8.com/ios/50/null/express-js.png",
      name: "Express",
    },
    {
      img: "https://img.icons8.com/color/48/null/redux.png",
      name: "Redux",
    },

    {
      img: "https://img.icons8.com/ios-filled/50/null/github.png",
      name: "Github",
    },
  ];

  return (
    <>
      <div className='skills'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={1}
            direction='column'
            justifyContent='center'
            alignItem='center'
          >
            <h1
              style={{
                fontWeight: "bolder",
                textAlign: "center",
              }}
              className='skills-and-abilities'
            >
              💻 Skills and Abilites
            </h1>
            <Grid
              item
              xs={3}
              md={5}
              order={{ xs: 1, md: 1 }}
              data-aos='fade-right'
              data-aos-delay='0'
              data-aos-easing='ease'
              data-aos-duration='2000'
              justifyContent='center'
              alignItem='center'
              container
            >
              <div id='myInfo'>
                {/* <p>⚡ Crazy Front end Developer who always ready to explore every tech</p>
                <p>⚡ Develope highly interactive user interface for your web applications</p>
                <p>⚡ Develope </p>
                <p>⚡ List of Skills that i have explored</p> */}
                <div className='skills-icons projectCard'>
                  {skillsDetails.map((item, index) => (
                    <>
                      <div className='skillBox' key={index}>
                        <img
                          src={item.img}
                          alt=''
                          id={`id${index}`}
                          className='skillsIcon'
                        />
                        <p>{item.name}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Skills;
