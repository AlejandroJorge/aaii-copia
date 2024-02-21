
import styles from './index.module.scss';

import React from 'react';




const ReelsSection = () => {
    return (
        <section id="section_eventos" className={styles.section}>
            <div className={`${styles.container} main-container`}>
                <h2 className={styles.title}>NUESTROS VIDEOS 💚</h2>
                <div className={styles.grid_container}>
                    <iframe width="100%" height="1200" src="https://www.youtube.com/embed/Iz_zTlNa884" title="Hoy en la AAII 💚acompáñanos a descubrir la verdad detrás de tanto Pingüi jugador 🐧 #humor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div>
                        <iframe width="100%" height="1200" src="https://www.youtube.com/embed/DGgkv3IaQ5c" title="Un breve resumen de nuestra inauguración y deportes de estos días." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReelsSection;
