import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const projectData = {
  projectList: [
    {
      name: "NFT Marketplace",
      details: "In this marketplace you can create NFT , sell, buy and Resell NFT with BNB",
      demo: "https://63d61ce706bfdf15e7f082ef--ditalversefyp.netlify.app/",
      code: "https://github.com/Sameer-472/DigitalVerse",
      tech: "Blockchain"
    },
    {
      name: "MultiSender Dapp",
      details: "In this Dapp you can transfer BNB and token to multiple address in just one click.",
      demo: "https://63d61ce706bfdf15e7f082ef--ditalversefyp.netlify.app/",
      code: "https://github.com/Sameer-472/DigitalVerse",
      tech: "Blockchain"
    },
    {
      name: "Web3.0 Ethereum transfer app",
      details: "made this Quiz app with React and Solidity",
      demo: "https://etherblockchain.netlify.app/",
      code: "https://github.com/Sameer-472/Web-3.0-blockchain-project",
      tech: "Blockchain"
    },
    {
      name: "Expense Tracker App with PWA",
      details: "In this is web app you can manage and track all your expenses",
      demo: "https://lonely-bedroom.surge.sh/",
      code: "https://github.com/Sameer-472/expense-tracker-rebuild",
      tech: "React"
    }
  ],
};

const { projectList } = projectData;

projectList.map(({ name, details, demo, code , tech }) => {
  console.log(name);
});

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = <React.Fragment></React.Fragment>;

export const Projects = () => {
  return (
    <>
      <div className="Project-container">
        <h1 style={{textAlign: 'center'}}>🚀 Open Source Projects</h1>
        <Box sx={{}}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            item
          >
            {projectList.map(({ name, details, demo, code , tech }) => {
              return (
                <>
                  <Grid
                    item
                    xs={10}
                    md={5}
                    data-aos="flip-right"
                    data-aos-delay="0"
                    data-aos-easing="ease"
                    data-aos-duration="2000"
                    // style={{backgroundColor: "green"}}
                  >
                    <div>
                      <Card variant="outlined" className="projectCard" >
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {name}
                          </Typography>
                          <Typography variant="body2">
                            {details}
                            <br />
                          </Typography>
                          <CardActions>
                            <p>🟡 <b>{tech}</b></p>
                          </CardActions>
                          <a href={demo}>

                            <button className="projectButton">Demo</button>
                          </a>
                          <a href={code}>
                           <button className="projectButton">Code</button>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
            <div className="viewMore">
              <a href="https://github.com/Sameer-472?tab=repositories" target='_blank'><h3>View more ➜</h3></a>
            </div>
        </Box>
      </div>
    </>
  );
};
