import styles from "./Skills.module.css"

const Skills = () => {
    return <section id="skills">
        <h2>Tecnologias</h2>
        <div className={styles.divSkills}>
            <table>
                <thead>
                    <tr>
                        <th colspan="1">Lenguajes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JavaScript <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="1">Frontend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML5 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>CSS3 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>React.js <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>Redux.js <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="1">Backend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Node.js <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>Express <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>Sequelize <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" alt="sequelize" width="40" height="40"/></td>
                    </tr>
                    <tr>
                        <td>PostgreSQL <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
}

export default Skills