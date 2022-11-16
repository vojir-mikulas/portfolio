import React from 'react';
import styles from './Grain.module.scss'
import noise from '../../public/noise.png'

const Grain = () => {
    return (
        <div style={{backgroundImage: `url(${noise.src})`}} className={styles.noise} />
    );
};

export default Grain;