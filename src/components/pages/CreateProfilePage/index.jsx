import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

export const CreateProfilePage = () => {
  const navigate = useNavigate()

  const [nickname, setNickname] = useState('')
  const [profilePicturePath, setProfilePicturePath] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    // Form validation
    if (nickname.length < 3){
      setErrorMessage("El nickname debe tener al menos 3 caracteres")
      return
    }
    if (profilePicturePath === ''){
      setErrorMessage("Debes subir una foto de perfil")
      return
    }

    // Communication with backend
    const success = true;
    if (!success) {
      setErrorMessage("Error durante la creacion del perfil")
      return
    }

    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h3 className={styles.main_title}>Crea tu perfil</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="nickname" className={styles.label}>Nickname</label>
            <input type="text" name="nickname" placeholder="PepitoGrillo87" className={styles.input} value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
          </div>
          <div className={styles.field}>
            <label htmlFor="profile-picture" className={styles.label}>Foto de perfil</label>
            <input type="file" name="profile-picture"  className={styles.input} value={profilePicturePath} onChange={(e)=>setProfilePicturePath(e.target.value)}/>
          </div>
          <button className={styles.main_button}>Crear perfil</button>
          {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default CreateProfilePage;
