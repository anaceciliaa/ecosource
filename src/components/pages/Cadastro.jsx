import styles from './Cadastro.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from '../../axios/index'

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleRegister(e) {
        try {
          e.preventDefault();
          await axios.post('/register', {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
          });
        } catch (error) {
          throw new Error(`${error}`);
        }
      }

    return (
    
    <form onSubmit={handleRegister}>
        <div className={styles.cadastro_container}>
            <h1>Cadastre-se</h1>
            <input className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome Completo'/>
            <input className={styles.input} value={telefone} onChange={(e) => setTelefone(e.target.value)}placeholder='Telefone'/>
            <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Email'/>
            <input className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' type="password"/>
            <div>
                <button className={styles.cadastro_button}>Cadastre-se</button>
                <p>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
            </div>
        </div>
    </form>
    )
}

export default Cadastro
