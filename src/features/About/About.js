import React from 'react';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import { blue } from '@mui/material/colors';
import { black } from '@mui/material/colors';
import Card from '@mui/material/Card';

const About = () => {
  return (
    <Container style={{ minHeight: 350 }} maxWidth="lg">
      <Card
        maxwidth="lg"
        sx={{
          background: blue[500],
          borderRadius: 10,
          border: 3,
          boxShadow: 3,
          marginBottom: 2,
        }}
      >
        <h1>ANSWERS TO FREQUENTLY ASKED QUESTIONS</h1>
        <div>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#1d1d1b',
                  bgcolor: black,
                }}
              >
                1. What is the purpose of this website?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is a portal for those looking to find latest tweets from
                Ukraine based on location. This website was developed by a group
                of coworkers for Fall In's 2022 Hackathon.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{ fontSize: 28, fontWeight: 700, color: '#1d1d1b' }}
              >
                2. What tech stack did you use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>We used PHP, Laravel and Next.js.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{ fontSize: 28, fontWeight: 700, color: '#1d1d1b' }}
              >
                3. How can I help?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Ukrainian government says you can help in one of three ways:
                <br />
                <br />
                <Link href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi%C2%A0">
                  Support humanitarian aid
                </Link>
                <br />
                <br />
                <Link href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi">
                  Donate to support Ukraine's Army
                </Link>
                <br />
                <br />
                <Link href="https://donate.thedigital.gov.ua/">
                  Crypto-wallets for donations to support Ukraine's army
                </Link>
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Card>
    </Container>
  );
};

export default About;
