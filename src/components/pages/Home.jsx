import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import {FaBicycle, FaRecycle} from 'react-icons/fa'
import { SlEnergy } from "react-icons/sl"

function Home() {
    return (
        <main>
        <section className={styles.section_box}>
            <div className={styles.section_main}>
                <h1>A terra precisa da sua ajuda!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                <button className={styles.start_button}><Link to='#'>Começar Agora</Link></button>
            </div>
        </section>

        <section className={styles.section_cards}>
            <div className={styles.section_text_box}>
                <h1>Onde você pode ajudar</h1>
                <p>Cada um de nós podemos fazer algo para proteger e conservar o nosso planeta.</p>
            </div>

            <div className={styles.cards}>
            <article className={styles.card_box}>
                <li className={styles.icons}><SlEnergy /></li>
                <h4>Economize energia</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            </article>
            <article className={styles.card_box}>
                <li className={styles.icons}><FaBicycle /></li>
                <h4>Use bicicleta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            </article>
            <article className={styles.card_box}>
            <li className={styles.icons}><FaRecycle /></li>
                <h4>Recicle</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            </article>
            </div>

        </section>

        <section className={styles.section_more}>
            <div className={styles.section_more_text}>
                <h1>Proteja nossa terra contra as mudanças climáticas</h1>
                <button className={styles.more_button}><Link to='/#'>Saiba Mais</Link></button>
            </div>
        </section>
        </main>
    )
   
}

export default Home