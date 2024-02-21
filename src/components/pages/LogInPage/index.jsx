import { useState } from 'react';
import styles from './index.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export const LogInPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    // Form validation
    if (email.endsWith("@pucp.edu.pe") === false){
      setErrorMessage("Debes usar un correo institucional PUCP")
      return
    }

    setErrorMessage("")

    // Communication with backend
    const success = true;
    if (!success) {
      setErrorMessage("Error durante el login")
      return
    }
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h3 className={styles.main_title}>Iniciar Sesion</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="text" name="email" placeholder="ejemplo@email.com" className={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Link to="/auth/forgottenPassword" className={styles.link}>
              Olvidaste tu contrasena?
            </Link>
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Contrasena</label>
            <input type="password" name="password" placeholder="**********" className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className={styles.main_button}>Ingresar</button>
          {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        </form>
        <div className={styles.google_login_container}>
          O ingresa usando tu cuenta de Google
          <button className={styles.google_login}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo"/>
          </button>
        </div>
        <div className={styles.register_container}>
          <p>No tienes cuenta?</p>
          <Link to="/auth/signup" className={styles.link}>
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
