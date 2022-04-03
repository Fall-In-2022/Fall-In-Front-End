import Head from 'next/head';
import styles from '../styles/Home.module.scss';

// components
import NavBar from '../src/features/NavBar/NavBar';
import Map from '../src/features/Map/Map';
import About from '../src/features/About/About';
import Contact from '../src/features/Contact/Contact';

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
      <About />
      <Contact />
    </div>
  );
}
