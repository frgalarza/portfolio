import styles from './Navbar.module.css'
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
    
        links.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              const navbar = document.querySelector('nav');
              const navbarHeight = navbar.offsetHeight;
              const targetOffset = targetElement.offsetTop - navbarHeight;
    
              window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
              });
            }
          });
        });
    
      }, []);

    return <nav className={styles.navbar}>
        <ul className={styles.navigation}>
            <li><a href="#banner" className={styles.a}>Inicio</a></li>
            <li><a href="#about" className={styles.a}>Sobre mi</a></li>
            <li><a href="#projects" className={styles.a}>Proyectos</a></li>
            <li><a href="#contact" className={styles.a}>Contacto</a></li>
        </ul>  
    </nav>
}

export default Navbar