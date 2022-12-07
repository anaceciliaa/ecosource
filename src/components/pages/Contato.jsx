import styles from './Contato.module.css'

function Contato() {
    return (
    <section className={styles.section_box}>
        <h1>Entre em contato</h1>
        <p>Você tem algo que gostaria de nos informar? Se você tem um comentário ou uma ideia para compartilhar, estamos ansiosos para ouvir de você! <strong>ecosource@gmail.com</strong> 
        <br/>
        <br/>
        Se preferir nos ligar ou nos enviar uma carta, você pode entrar em contato conosco em <strong>Fortaleza, Ceará | 55 85 99688-3295</strong> 
        <br/>
        <br/>
        Você também pode interagir conosco em nossas redes sociais:
        </p>
        <ul>
            <li>Twitter: <a href='#'>@ecosource</a></li>
            <li>Facebook: <a href='#'>@ecosource</a></li>
            <li>Instagram: <a href='#'>@ecosource</a></li>
            <li>Linkendin: <a href='#'>EcoSource</a></li>
        </ul>

    </section>
    )
}

export default Contato