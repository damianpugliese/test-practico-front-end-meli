import React from 'react';
import styles from './NotFound.scss';
import Card from '../Card/Card';
import NotFoundIcon from '../NotFoundIcon/NotFoundIcon';

const NotFound = () => {
    return (
        <Card className={styles.notFoundCard}>
            <div className={styles.iconContainer}>
                <NotFoundIcon className={styles.notFoundIcon}/>
            </div>
            <div className={styles.notFoundContent}>
                <h3 className={styles.notFoundTitle}>
                    No hay publicaciones que coincidan con tu búsqueda
                </h3>
            </div>
        </Card>
    )
}

export default NotFound;
