import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from '../../axios/index'

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {
        try {
          e.preventDefault();
          await axios.post('/register', {
            email: email,
            senha: senha,
          });
        } catch (error) {
          throw new Error(`${error}`);
        }
      }

    return (

    <form onSubmit={handleLogin}>
        <div className={styles.login_container}>
            <h1>Login</h1>
            <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            <input className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' type="password"/>
            <div>
                <button className={styles.login_button}>Login</button>
               <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
            </div>
        </div>
    </form>

    )
}

export default Login
