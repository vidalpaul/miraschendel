import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Year from '../components/Year';

export default function Home() {
  const ages = [
    '1919',
    '1920',
    '1930',
    '1940',
    '1950',
    '1960',
    '1970',
    '1980',
    '1988',
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.bgImg}></div>
          <div className={styles.timeNav}>
            <div className={styles.navlink}>
              <a href='#1919'>1919</a>
            </div>
            <div className={styles.navlink}>
              <a href='#20s'>20s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#30s'>30s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#40s'>40s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#50s'>50s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#60s'>60s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#70s'>70s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#80s'>80s</a>
            </div>
            <div className={styles.navlink}>
              <a href='#1988'>1988</a>
            </div>
          </div>
          <h1 className={styles.title}>mira schendel - life and work</h1>
        </div>

        {ages.map((age, i) => {
          return <Year key={i} year={age} />;
        })}
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}> */}
      {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
      {/* </footer> */}
    </div>
  );
}
