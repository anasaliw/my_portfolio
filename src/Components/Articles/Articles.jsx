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
import "./Articles.css";

const projectData = {
  projectList: [
    {
      name: "Expense Tracker App with PWA",
      details: "How to upload files on IPFS infura.io using React.",
      link: "https://dev.to/sameer472/how-to-upload-files-on-ipfs-infuraio-using-react-56g"
    },
  ],
};

const { projectList } = projectData;

projectList.map(({ name, details, demo, code, tech }) => {
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

export const Articles = () => {
  return (
    <>
      <div className="Project-container">
        <h1 style={{ textAlign: "center", marginTop: "-100px" }}>
          ✍️ Articles i wrote
        </h1>
        <Box sx={{}}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            item
          >
            {projectList.map(({ name, details, link, code, tech }) => {
              return (
                <>
                  <Grid
                    item
                    xs={10}
                    md={15}
                    data-aos="flip-right"
                    data-aos-delay="0"
                    data-aos-easing="ease"
                    data-aos-duration="2000"
                    // style={{backgroundColor: "green"}}
                  >
                    <div>
                      <Card
                        variant="outlined"
                        className="projectCard articleCard"
                        style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                      >
                        <CardContent>
                          <img
                            src="Images/article1.webp"
                            alt=""
                            className="articlePic"
                            id="webView"
                          />
                          <Typography variant="body1">
                            {details}
                            <br />
                          </Typography>
                        </CardContent>
                        <a href={link}>
                          <button className="read">Read </button>
                        </a>
                      </Card>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <div className="viewMore">
            <a href="https://dev.to/dashboard" target="_blank">
              <h3>Read more ➜</h3>
            </a>
          </div>
        </Box>
      </div>
    </>
  );
};
