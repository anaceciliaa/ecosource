import {Link} from 'react-router-dom'
import styles from './Footer.module.css'
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaAt} from 'react-icons/fa'
import logo from '../../components/images/logo2.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer_logo}>
                <Link to='/'><img class={styles.logo} src={logo} alt="EcoSource" /></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.</p>
                <div className={styles.footer_social}>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaLinkedin /></a>
                </div>
                </ul>
            
            <ul className={styles.footer_box_home}>
                <h3>Home</h3>
                <li class={styles.footer_icon}>
                    <Link to='/'>Home</Link>
                </li> 
                <li class={styles.footer_icon}> 
                    <Link to='/sobre'>Sobre</Link>
                </li>
                <li class={styles.footer_icon}>
                    <Link to='/noticias'>Notícias</Link>
                </li>
                <li class={styles.footer_icon}>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
        
            <ul className={styles.footer_box_contact}>
                <h3>Entre em contato</h3>
                <li class={styles.icon}><FaMapMarkerAlt/>   Fortaleza - Ceará</li>
                <li class={styles.icon}><FaAt/>   ecosource@gmail.com</li>
                <li class={styles.icon}><FaPhoneAlt/>   +55 85 99688-3295</li>
            </ul>       
       </footer>
    )
}

export default Footer