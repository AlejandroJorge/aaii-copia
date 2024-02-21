import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';


import { RiMenuLine } from 'react-icons/ri';
//import { CgSearch } from 'react-icons/cg';


import { Button } from 'components/common';

import LogoNav from 'assets/images/logo-nav.png';

import styles from './index.module.scss';
import { contenidoHeader } from '../../../../../data/configTienda';

const Navbar = ({ toggleSideNav }) => {
  //const { pathname } = useLocation();

  //const { isVerified, isAdmin } = useAuthContext();

  const [hasScrolled, setHasSrolled] = useState(false);

  const resizeHeaderOnScroll = () => {
    setHasSrolled((hasScrolled) => {
      if (
        !hasScrolled &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        return true;
      }

      if (
        hasScrolled &&
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        return false;
      }

      return hasScrolled;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', resizeHeaderOnScroll);

    return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
  }, []);

  /*const handleOpenCartModal = () => {
    if (pathname !== '/cart') {
      openCartModal();
    }
  };*/

  const navStyles = hasScrolled
    ? `${styles.nav} ${styles.hasScrolled}`
    : styles.nav;

  return (
    <nav className={navStyles}>

      <div className={styles.container_top}>
        <Button className={`${styles.link} ${styles.info_link}`} type="button">
          Información importante
        </Button>
        <ul className={styles.info_list}>
          {
            contenidoHeader.informacionImportante.map(item => (<a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noreferrer"
              className={styles.anchor}
            >
              {item.label}
            </a>))
          }
        </ul>

        {

          /*
      
      

        {!isVerified && (
          <Link
            to="/account/login"
            className={`${styles.link} ${styles.login_link}`}
          >
            Login
          </Link>
        )}
        {isVerified && (
          <Link to="/account" className={`${styles.link} ${styles.login_link}`}>
            My Account
          </Link>
        )}
        {isAdmin && (
          <Link to="/admin" className={`${styles.link} ${styles.login_link}`}>
            Admin
          </Link>
        )}
      */
        }


      </div>
      <div className={styles.container_bottom}>
        <Link to="/">
          <img className={styles.logo} src={LogoNav} alt="Logo Nav" />
        </Link>
        <ul className={styles.links}>
          {
            contenidoHeader.navbarItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={styles.link} to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <ul className={styles.icons_menu}>
          {

            /*
          
          <li className={`${styles.search_icon} disabled-link`}>
            <CgSearch />
          </li>
          <li className={styles.cart_icon} onClick={handleOpenCartModal}>
            <CartIcon />
          </li>
          
          
          **/
          }

          <li className={styles.mobile_icon}>
            <RiMenuLine onClick={toggleSideNav} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
