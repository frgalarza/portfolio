import styles from "./Contact.module.css"

const Contact = () => {
    return <section id="contact">
        <h2>Contacto</h2>
        <form className={styles.form}>
            <label className={styles.label}>
                Nombre completo<input type="text" placeholder="Ingrese su nombre completo" className={styles.input}/>
            </label>
            <label className={styles.label}>
                Email<input type="email" placeholder="Ingrese su Email" className={styles.input}/>
            </label>
            <label className={styles.label}>
                Mensaje
                <textarea name="message" id="message" cols="30" rows="10" className={styles.input}></textarea>
            </label>
            <button className={styles.button}>Enviar</button>
        </form>
    </section>
}

export default Contact