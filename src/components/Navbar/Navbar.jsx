import React,{useState} from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar=()=>{
    const[navOpen,setNavOpen]=useState(false);
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.nav}>
            <img src={ 
                navOpen ? getImageUrl("nav/closeIcon.png"): getImageUrl("nav/menuIcon.png")} className={styles.navBtn}
                onClick={()=>setNavOpen(!navOpen)} />
            <ul className={`${styles.navItems} ${navOpen && styles.navOpen}`} 
            onClick={()=>setNavOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>);
}