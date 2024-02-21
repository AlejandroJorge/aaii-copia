import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';

import {
  FaExclamationTriangle,
  FaUserCircle,
  FaShippingFast,
  FaQuestionCircle,
  FaSyncAlt,
  FaInfoCircle,
  FaInstagram,
  FaTwitterSquare,
  FaMapMarkerAlt,
  FaTag,
  FaBriefcase,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';


import { Slider } from 'components/common';

import { SLIDES as slides } from './data';

import styles from './index.module.scss';
import { contenidoHeader } from '../../../../../data/configTienda';

const NavDrawerContent = ({ toggleSideNav }) => {

  return (
    <div className={styles.container}>
      <div className={styles.links_container}>
        <ul className={styles.links_list}>
          <h2>Menú</h2>
          {
            contenidoHeader.navbarItems.map((item) => {
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={toggleSideNav}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })
          }

        </ul>
        {
          /**
           * <ul className={styles.links_list}>
          <h2>Drops</h2>
          <li>
            <Link
              to="/collections/products"
              onClick={toggleSideNav}
              className={styles.link}
            >
              #001
            </Link>
          </li>
        </ul>
           * 
           * 
           */
        }

      </div>
      {
        /**
         * <div className={styles.products_container}>
        <Slider
          slides={slides}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          sliderClassName={styles.slider}
          imageFillClassName={styles.image_fill}
          imageClassName={styles.image}
        />
      </div>
         * 
         * 
         */
      }

      <div className={styles.info_container}>
        <ul className={styles.links_list}>

          {
            contenidoHeader.informacionImportante.map((item, index) => (<li key={index}>
              <Link
                to={item.to}
                onClick={toggleSideNav}
                className={styles.link}
              >
                {
                  /*
                <i>
                  <FaUserCircle />
                </i>
                */
                }
                {item.label}
              </Link>
            </li>))
          }

          {
            /*
          
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaQuestionCircle />
              </i>
              Help Center
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaShippingFast />
              </i>
              Shipping Info
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaMapMarkerAlt />
              </i>
              Track Your Order
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaTag />
              </i>
              Discounts
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaBriefcase />
              </i>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaSyncAlt />
              </i>
              Returns and Exchange
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaInfoCircle />
              </i>
              About Us
            </Link>
          </li>
          
          */
          }

        </ul>
      </div>
      <div className={styles.socials_container}>
        <a href="https://www.instagram.com/aaii.pucp" target="_blank" rel="noreferrer">
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
  );
};

export default NavDrawerContent;
