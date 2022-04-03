import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

// components
import NavBar from '../src/features/NavBar/NavBar';
import Map from '../src/features/Map/Map';
import About from '../src/features/About/About';
import Contact from '../src/features/Contact/Contact';
import TweetNews from '../src/features/TweetNews/TweetNews';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scrappy Dev</title>
        <meta name="description" content="A Ukranian Web Scrapper." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Map />
      <TweetNews />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Item>
              <About />
            </Item>
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>
              <Contact />
            </Item>
          </Grid>
        </Grid>
      </Box>
      );
    </div>
  );
}
