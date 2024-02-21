import CollectionCard from './CollectionCard';

import { COLLECTIONS as collections } from './data';

import styles from './index.module.scss';

const CollectionsSection = () => {
  return (
    <section id="section_eventos" className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <h2 className={styles.title}>PATANS!</h2>
        <div className={styles.grid_container}>
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              image={collection.image}
              title={collection.title}
              text={collection.text}
              url={collection.url}
              urltext= {collection.urltext}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
