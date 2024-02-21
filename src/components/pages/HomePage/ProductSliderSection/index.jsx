import { useState, useEffect } from 'react';

import { useCollection } from 'hooks/useCollection';

import { ProductSlider } from 'components/common';

import styles from './index.module.scss';

const ProductSliderSection = ({ titleTop, titleBottom, sortBy }) => {
  const { getCollection } = useCollection();

  const [slides, setSlides] = useState([
  ]);

  useEffect(() => {
    (async () => {
      const fetchedVariants = await getCollection({
        sortBy,
      });

      setSlides(
        fetchedVariants.sort((a, b) =>
          a.color.toUpperCase() > b.color.toUpperCase() ? 1 : -1
        )
      );
    })();
  }, []);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        {titleTop && <p className={styles.section_title_top}>{titleTop}</p>}
        {titleBottom && (
          <h1 className={styles.section_title_bottom}>{titleBottom}</h1>
        )}
        <div className={styles.carousel_container}>
          <ProductSlider
            slides={slides}
            slidesPerView="auto"
            spaceBetween={20}
            pagination={false}
            sliderClassName={styles.slider}
            slideClassName={styles.slide}
            fillClassName={styles.fill}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSliderSection;
