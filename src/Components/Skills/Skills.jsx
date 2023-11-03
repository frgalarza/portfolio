import styles from "./Skills.module.css";

const Skills = () => {

    return (
        <section id="skills" className={styles.section}>
          <h2 className={styles.title}>Tecnologias</h2>
            <ul className={styles.ul}>
              {/* Lenguajes */}
              <li className={styles.li}>
                JavaScript
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                HTML5
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                CSS3
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                React.js
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                Redux.js
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                Node.js
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                Express
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                Sequelize
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"
                  alt="sequelize"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
              <li className={styles.li}>
                PostgreSQL
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="40"
                  height="40"
                  className={styles.img}
                />
              </li>
            </ul>
        </section>
      );
    };
    
    export default Skills;