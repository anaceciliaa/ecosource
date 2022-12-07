import styles from './Sobre.module.css'

function Sobre() {
    return (
    <section className={styles.section_about}>
        <div className={styles.section_about_text}>
        <h1>Sobre a <span>EcoSource</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
        </div>
    </section>

    )
}

export default Sobre