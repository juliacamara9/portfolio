import styles from './Sobre.module.css'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import avatar from './images/avatar.png'

function Sobre() {
    return (
        <>
        <div className= {styles.sobre}>

            <div className={styles.bio}>
            <img src={avatar} alt="Avatar" srcset="" />
            
            <div className={styles.textos}>
            <h2>Sobre</h2>

            <p>Sou <span>Júlia Câmara</span> <br />
            <strong>Estudante técnica do Colégio Cotemig</strong> </p>

            <p>Fui ingressada no Colégio Técnico em 2023.</p>

            <p>Sou apaixonada por aprender ideias em realidade digital.</p>

            <p>Fico muito orgulhosa em testemunhar a minha própria evolução tanto pessoal quanto profissional.</p>   
            </div>
            </div>

            <div className={styles.techs}>
            <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>
        </div>

        </>
    )
}

export default Sobre