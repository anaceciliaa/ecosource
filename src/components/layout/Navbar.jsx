import {Link} from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../components/images/logo.png'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img class={styles.logo} src={logo} alt="EcoSource" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to='/'>Home</Link>
                    </li> 
                    <li class={styles.item}> 
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to='/#'>Notícias</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>
               </ul>
               <div className={styles.nav_buttons}>
                <button className={styles.login_button}><Link to='/login'>Login</Link></button>
                <button className={styles.signup_button}><Link to='/cadastro'>Cadastre-se</Link></button>
               </div>

            </Container>
        </nav>
    )
}

export default Navbar