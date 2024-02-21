import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

import Newsletter from './Newsletter';

import styles from './index.module.scss';
import { contenidoHeader } from '../../../../data/configTienda';

const Footer = () => {
  const location = useLocation();

  const isBigScreen = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isCollectionPage = location.pathname.includes('collections');

  return (
    <footer
      className={`${styles.footer} ${isCollectionPage && isBigScreen
        ? styles.is_collection_page_b
        : styles.is_collection_page_s
        }`}
    >
      {!isBigScreen && <Newsletter />}
      <div className={styles.container}>
        <div className={styles.sitemap}>
          <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>Información importante</h4>
            <ul className={styles.nav}>
              {
                contenidoHeader.informacionImportante.map(item => (<a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>))
              }
            </ul>
          </div>
          {
            /***
             * 
             * <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>More</h4>
            <ul className={styles.nav}>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Carreers</Link>
              </li>
            </ul>
          </div>
             * 
             * 
             */
          }

        </div>
        <div className={styles.socials_wrapper}>
          {isBigScreen && <Newsletter />}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/aaii.pucp"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />

            </a>
            <a href="https://www.linkedin.com/company/aaii-pucp/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/aaiiPUCP/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
