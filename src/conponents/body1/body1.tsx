import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { ReactNode } from 'react';

interface TextHeadProps {
  children: ReactNode;
}

const TextHead: React.FC<TextHeadProps> = ({ children }) => (
  <div
    style={{
      fontSize: '30px',
      color: 'white',
    }}
  >
    {children}
  </div>
);

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "7%" }}>
        <Grid container spacing={7} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <img
              src="http://202.28.34.197/react/react-hw1/assets/photo-8695adc0.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={8}>
            <TextHead>Daenerys Targaryen</TextHead>
            {/* <h1 style={{color:'white'}}>Daenerys Targaryen</h1> */}
            {/* <p style={{ color: "white", fontSize: "26px" }}>
              Daenerys Targaryen
            </p> */}
            <hr />
            <TextHead>Character</TextHead>
            <p style={{ color: "white" }}>
              Daenerys Targaryen is the daughter of King Aerys II Targaryen
              (also referred to as "The Mad King") and his sister-wife Queen
              Rhaella, and is one of the last survivors of House Targaryen. She
              serves as the third-person point-of-view character of 31 chapters
              of A Game of Thrones, A Clash of Kings, A Storm of Swords, and A
              Dance with Dragons. This makes her the series' fourth most
              prominent narrative voice after Tyrion Lannister, Jon Snow and
              Arya Stark.
            </p>
          </Grid>

          <Grid xs={5} item>
            <iframe
              width="466"
              height="246"
              src="https://www.youtube.com/embed/Ydi80YrCnPY"
              title="Game of Thrones | Official Daenerys Targaryen Trailer (HBO)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xs={7}>
            <TextHead>Personality</TextHead>
            {/* <p style={{fontSize:'30px'}}>Personality</p> */}
            <p style={{ color: "white" }}>
              Daenerys is most often described as uncommonly beautiful, with
              long, pale silver-gold hair and purple eyes. She is slender and
              pale, although taller than some of her female ancestors. Tales of
              Daenerys's beauty are numerous, and throughout the novels she
              encounters countless suitors who seek her hand in marriage,
              sometimes to gain control of her three dragons. She is fluent in
              the Common Tongue of Westeros, Dothraki, High Valyrian and bastard
              Valyrian, which she speaks with a Tyroshi accent. Over the course
              of the first three novels she becomes fluent in the Dothraki
              language and Ghiscari, spoken in the slave cities in Essos.
            </p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
