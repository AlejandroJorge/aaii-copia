import { useState } from 'react';
import styles from './index.module.scss';
import { Link, useNavigate  } from 'react-router-dom';

export const SignUpPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    // Form validation
    if (password !== confirmPassword){
      setErrorMessage("Las contrasenas no coinciden")
      return
    }
    if (password.length < 6){
      setErrorMessage("La contrasena debe tener al menos 6 caracteres")
      return
    }
    if (email.endsWith("@pucp.edu.pe") === false){
      setErrorMessage("Debes usar un correo institucional PUCP")
      return
    }

    setErrorMessage("")

    // Communication with backend
    const success = true;
    if (!success) {
      setErrorMessage("Error durante el registro")
      return
    }
    navigate('/auth/createProfile')
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h3 className={styles.main_title}>Crear cuenta</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="text" name="email" placeholder="ejemplo@pucp.edu.pe" className={styles.input} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Contrasena</label>
            <input type="password" name="password" placeholder="**********" className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div className={styles.field}>
            <label htmlFor="confirm-password" className={styles.label}>Confirma tu contrasena</label>
            <input type="password" name="confirm-password" placeholder="**********" className={styles.input} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          </div>
          <button className={styles.main_button}>Registrarse</button>
          {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        </form>
        <div className={styles.google_login_container}>
          O registrate usando tu cuenta de Google
          <button className={styles.google_login}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo"/>
          </button>
        </div>
        <div className={styles.register_container}>
          <p>Ya tienes cuenta?</p>
          <Link to="/auth/login" className={styles.link}>
            Inicia sesion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
