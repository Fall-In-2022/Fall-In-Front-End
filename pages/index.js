import Head from 'next/head';
import Image from 'next/image';
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Map />
      <About />
      <Contact />
    </div>
  );
}
