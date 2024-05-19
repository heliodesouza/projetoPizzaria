import { useContext, FormEvent, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import logoImg from '../../public/logo.svg';
import styles from '../../styles/home.module.scss'
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/Button'; 
import { AuthContext } from '../contexts/AuthContext';

import Link from 'next/link';

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);


  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email,
      password
    }
    await signIn(data)

  }

  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Pizzaria" />
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input 
            placeholder='Digite email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder='Digite  senha'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            loading={false}
          
          >

            Acessar
            
          </Button>

        </form>
        <Link legacyBehavior href="/signup">
          <a className={styles.text}>Nao possui uma conta? cadastre-se</a>
        </Link>  

      </div>
      
    </div>
    </>
  )
   
}
