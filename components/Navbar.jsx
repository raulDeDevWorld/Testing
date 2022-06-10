import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Navbar.module.css'

export default function Navbar () {
  const [menu, setMenu] = useState(false)
  const { pathname } = useRouter() 
  function handleMenu(){
    setMenu(!menu)
  }
  return (
    <header className={style.header}>
    <div className={style.navbar}>
        <img src="/main-logo-white.svg" className={style.logo} alt="logo" />
         <div className={style.menu} onClick={handleMenu}>
            <span className={style.span}></span>
            <span className={style.span}></span>
            <span className={style.span}></span>
        </div>   
    </div>
    <nav className={`${style.nav} ${menu === true ? style.visible : ''}`}>
      <Link href="/Home">
        <a className={`${style.link} ${pathname == "/Home" ? style.active : ''}`}>Inicio</a>
      </Link>
      <Link href="/Config">
        <a className={`${style.link} ${pathname == "/Config"? style.active : ''}`}>Productos</a>
      </Link>
      <Link href="/About">
        <a className={`${style.link} ${pathname == "/About"? style.active : ''}`}>Servicios</a>
      </Link> 
      <Link href="/Home">
        <a className={`${style.link} ${pathname == "/Home" ? style.active : ''}`}>Cursos</a>
      </Link>
      <Link href="/Config">
        <a className={`${style.link} ${pathname == "/Config"? style.active : ''}`}>Nosotros</a>
      </Link>
      <Link href="/About">
        <a className={`${style.link} ${pathname == "/About"? style.active : ''}`}>Contacto</a>
      </Link> 
    </nav>
  </header>
  )}