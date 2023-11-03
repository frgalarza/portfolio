import foto from './img/foto-perfil.png'
import styles from './Banner.module.css'

const Banner = ()=> {
    return <header className={styles.header} id="banner">
        <div className={`${styles.divHeader} ${styles.headerItem}`}>
            <h1 className={`${styles.title} ${styles.headerItem}`}>Hola, soy Franco</h1>
            <h2 className={`${styles.h2} ${styles.headerItem}`}>Desarrollador Full Stack</h2>
            <p className={styles.headerItem}>Destaco por mi capacidad resolutiva, de forma creativa y eficaz</p>
            <div className={`${styles.headerItem} ${styles.links}`}>
                <a href="https://github.com/frgalarza" target='_blank' rel="noreferrer" className={styles.a}><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="franco-galarza-917923268" height="30" width="40" /></a>
                <a href="https://www.linkedin.com/in/franco-galarza-917923268/" target='_blank' rel="noreferrer" className={styles.a}><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="franco-galarza-917923268" height="30" width="40" /></a>
                <a href="https://drive.google.com/uc?export=download&id=1Xsjo9ezLGw1HCCm3t2iOJAe5ZO4lgd0M" className={styles.a}>CV</a>
            </div>
        </div>
        <figure>
            <img src={foto} alt="foto de perfil" className={styles.img}/>
        </figure>
    </header>
}

export default Banner