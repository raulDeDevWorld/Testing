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
      <Link href="#inicio">
        <a className={`${style.link} ${pathname == "#inicio" ? style.active : ''}`}>Inicio</a>
      </Link>
      <Link href="#productos">
        <a className={`${style.link} ${pathname == "#productos"? style.active : ''}`}>Productos</a>
      </Link>
      <Link href="#servicios">
        <a className={`${style.link} ${pathname == "#servicios"? style.active : ''}`}>Servicios</a>
      </Link> 
      <Link href="#cursos">
        <a className={`${style.link} ${pathname == "#cursos" ? style.active : ''}`}>Cursos</a>
      </Link>
      <Link href="#nosotros">
        <a className={`${style.link} ${pathname == "#nosotros"? style.active : ''}`}>Nosotros</a>
      </Link>
      <Link href="#about">
        <a className={`${style.link} ${pathname == "#about"? style.active : ''}`}>Contacto</a>
      </Link> 
    </nav>
  </header>
  )}