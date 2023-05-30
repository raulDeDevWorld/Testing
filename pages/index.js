import Image from 'next/image'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Card from '../components/Card'
import style from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  function click (link) { 
    router.push(link)
  }
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
          <Button style={'buttonPrimary'} click={()=>router.push('#productos')}>Productos</Button>
          <Button style={'buttonSecondary'} click={()=>router.push('#servicios')}>Servicios</Button>
        </div>
      </section>

      <section className={style.section} id="productos">
        <h2>Prueba Los Productos SWOOU</h2>
        <div className={style.cardBox}>
          <Card img='/mathLogo.svg' 
                prove={()=>click('https://swoou-math.vercel.app/')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Adquirir'}
                textButtonTwo={'Probar'}>
            <p>Aplicación web instalable con
            funcionalidad offline que automatiza
            el proceso de enseñanza-aprendizaje
            de matemáticas, dirigida a profesores
            y psicopedagogos que trabajan con
            estudiantes de primaria.</p>
          </Card>
          <Card img='/preuniversityLogo.svg' 
                prove={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20quisiera%20probar%20Swoou%20Preuniversity...%20')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Adquirir'}
                textButtonTwo={'Probar'}>
          <p>Aplicación web instalable con
            funcionalidad offline que automatiza
            el proceso de enseñanza-aprendizaje
            de matemáticas, dirigida a profesores
            y psicopedagogos que trabajan con
            estudiantes de primaria.</p>
          </Card>
          <Card img='/qrLogo.svg' 
                prove={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20quisiera%20probar%20Swoou%20QR%20para%20mi%20negocio...%20')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Adquirir'}
                textButtonTwo={'Probar'}>
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
          <Card img='/web.svg'
                prove={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Cotizar'}
                textButtonTwo={'Consultar'}>
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
              MongoDB <i>(Base de datos)</i> <br /> <br />
            </p>
          </Card>
          <Card img='/host.svg'
                prove={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Cotizar'}
                textButtonTwo={'Consultar'}>
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
          <Card img='/search.svg'
                prove={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')} 
                acquire={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}
                textButtonOne={'Cotizar'}
                textButtonTwo={'Consultar'}>
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

      <section className={style.section} id="nosotros">
        <h2>NOSOTROS</h2>
        <div className={style.paragraphBox}>
          <p>Swoou es una compañia de desarrollo
            y distribucion de aplicaciones web y mobil.</p>
            <p>Trabaja con nosotros como DEV o afiliado de distribucion de apps.</p>
        </div>

        <div className={style.cardBox}>
        <div className={style.cardProfile}>
            <span className={style.imgRadius}>
              <Image src="/rau.jpg" alt="Raúl Choque Romero" style={{ borderRadius: '200px' }} width="200" height="200" />
            </span>
            <h5>RAÚL CHOQUE ROMERO</h5>
            <p>Project Manager y Desarrollador Web
              especializado en el MERN stack.</p>
              <Button style={'buttonPrimary'} click={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')}>Contactar</Button>
        </div>
        </div>
      </section>
      <span className={style.boxWhats}>
        <img onClick={()=>click('https://api.whatsapp.com/send?phone=+59173447725&text=Hola%20Mundo!!%20')} src="whatsapp.svg" className={style.whatsapp} alt="logo" />
      </span>
      <footer className={style.footer} id="contacto">
      <span className={style.contact}>
          <Image src="/phone.svg" alt="logo" width={30} height={30} />
          <span>+591 73447725</span>
        </span><br />
        <span className={style.contact}>
          <Image src="/email.svg" alt="logo" width={30} height={30} />
          <span>swoou.com@gmail.com</span>
        </span><br />
        <span className={style.contact}>
          <Image src="/location.svg" alt="logo" width={30} height={30} />
          <span>Sucre-Bolivia</span>
        </span>
        <span className={style.paragraphCenter}>© Copyright 2022 <br /> swoou.com</span> 
      </footer>
    </div>
  )
}
