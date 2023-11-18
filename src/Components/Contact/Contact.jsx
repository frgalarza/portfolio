import styles from "./Contact.module.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w9i4hyj', 'template_4lj788p', form.current, 'gwEJQabAjmUlhwC8o')
        .then((result) => {
            console.log(result.text);
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            console.log(error.text);
        });
    };

    return <section id="contact" className={styles.section}>
        <h2 className={styles.h2}>Contacto</h2>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <label className={styles.label}>
                Nombre completo<input onChange={handleChange} type="text" name="user_name" placeholder="Ingrese su nombre completo" className={styles.input}/>
            </label>
            <label className={styles.label}>
                Email<input onChange={handleChange} type="email" name="user_email" placeholder="Ingrese su Email" className={styles.input}/>
            </label>
            <label className={styles.label}>
                Mensaje
                <textarea onChange={handleChange} name="message" id="message" cols="30" rows="10" className={styles.input} placeholder="Ingrese su mensaje..."></textarea>
            </label>
            <button className={styles.button}>Enviar</button>
        </form>
    </section>
}

export default Contact