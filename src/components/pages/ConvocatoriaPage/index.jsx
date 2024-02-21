import styles from './index.module.scss';

export const ConvocatoriaPage = ({
  children
}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ConvocatoriaPage;
