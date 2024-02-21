import styles from './index.module.scss';
import image_organigrama from '../../../assets/images/organigrama.jpg';


export const ConocenosPage = () => {
  return (
    <div className={styles.container}>
      <img src={image_organigrama}></img>
    </div>
  );
};

export default ConocenosPage;
