import Image from 'next/image'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Card from '../components/Card'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={style.section} id="inicio">
        <span className={style.logo}>
          <Image src="/main-logo-dark.svg" alt="logo" width={456} height={156} />
        </span>
        <span className={style.portada}>
          <Image src="/portada.svg" alt="logo" width={456} height={156} />
        </span>
        <div className={style.paragraphBox}>
          <p>BIENVENIDO A SWOOU.COM</p>
          <p>Desarrolla tus proyectos con nosotros</p>
        </div>
        
        <div className={style.buttonsBox}>
          <Button style={'buttonPrimary'}>Productos</Button>
          <Button style={'buttonSecondary'}>Servicios</Button>
        </div>
      </section>

      <section className={style.section} id="productos">
        <h2>Prueba Los Productos SWOOU</h2>
        <div className={style.cardBox}>
          <Card img='/mathLogo.svg'>
            <p>Aplicación web instalable con
            funcionalidad offline que automatiza
            el proceso de enseñanza-aprendizaje
            de matemáticas, dirigida a profesores
            y psicopedagogos que trabajan con
            estudiantes de primaria.</p>
          </Card>
          <Card img='/preuniversityLogo.svg'>
          <p>Aplicación web instalable con
            funcionalidad offline que automatiza
            el proceso de enseñanza-aprendizaje
            de matemáticas, dirigida a profesores
            y psicopedagogos que trabajan con
            estudiantes de primaria.</p>
          </Card>
          <Card img='/qrLogo.svg'>
          <p>Aplicación web instalable con
            funcionalidad offline que automatiza
            el proceso de enseñanza-aprendizaje
            de matemáticas, dirigida a profesores
            y psicopedagogos que trabajan con
            estudiantes de primaria.</p>
          </Card>
        </div>
      </section>

      <section className={style.section} id="servicios">
        <h2>SWOOU servicios</h2>
        <div className={style.cardBox}>
          <Card img='/web.svg'>
            <h4>DISEÑO Y DESARROLLO WEB</h4>
            <p className={style.paragraphLeft}>
              <b>Detalles</b><br />
              Responsive y SPA<br />
              Optimizacion SEO<br />
              Arquitectura escalable<br />
              <b>Tecnologias</b><br />
              Figma <i>(Disaeño UI)</i> <br />
              React, Vue, Angular, Next, Nuxt <i>(Frontend)</i> <br />
              Node, Express <i>(Backend)</i><br />
              Firebase, Amplify <i>(Backend as a service)</i> <br />
              MongoDB <i>(Base de datos)</i>
            </p>
          </Card>
          <Card img='/host.svg'>
            <h4>DOMINIOS Y HOSTINGS</h4>
            <p className={style.paragraphLeft}>
              <b>Dominios</b><br />
              NameCheep<br />
              Google Domain<br />
              GoDaddy<br />
              <b>Hostings</b><br />
              AWS<br />
              Firebase<br />
              Heroku<br />
              Vercel<br />
              Netlify<br />
              Hostinger<br />
              Github<br />
            </p>
          </Card>
          <Card img='/search.svg'>
            <h4>POSICIONAMIENTO SEO</h4>
            <p className={style.paragraphLeft}>
              <b>Navegadores</b><br />
              Google<br />
              Bing<br />
              Yahoo<br />
              <b>Soporte</b><br />
              Indexacion<br />
              Metadatos<br />
              Palabras clave<br />
              Google search console<br />
              Web master tools<br />
              Blogs<br />
              Paginas web<br />
            </p>
          </Card>
        </div>
      </section>

      <section className={style.section} id="productos">
        <h2>NOSOTROS</h2>
        <div className={style.paragraphBox}>
          <p>Swoou es una compañia de desarrollo
            y distribucion de aplicaciones web y mobil</p>
        </div>

        <div className={style.cardBox}>
          <Card img='/mathLogo.svg'>
            <p>Project Manager y Desarrollador Web
              especializado en el MERN stack.</p>
          </Card>
          <Card img='/preuniversityLogo.svg'>
            <p>Swoou cuenta con una comunidad de mas de 100
              teachers especializados en educación y
              estimulacion a temprana edad en las areas
              linguistica, matematica y logica de programación.

              Contacta con un teacher cerca de tu zona ya..</p>
          </Card>
          <Card img='/qrLogo.svg'>
            <p>Project Manager y Desarrollador Web
              especializado en el MERN stack.</p>
          </Card>
        </div>
      </section>
      <footer className={style.footer}>

      </footer>












      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
