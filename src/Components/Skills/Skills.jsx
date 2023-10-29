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
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>C++</td>
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
                        <td>HTML5</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                    </tr>
                    <tr>
                        <td>React.js</td>
                    </tr>
                    <tr>
                        <td>Next.js 13</td>
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
                        <td>Node.js</td>
                    </tr>
                    <tr>
                        <td>Express</td>
                    </tr>
                    <tr>
                        <td>Sequelize</td>
                    </tr>
                    <tr>
                        <td>PostgreSQL</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
}

export default Skills