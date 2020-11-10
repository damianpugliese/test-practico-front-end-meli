import React from 'react';
import styles from './Error.scss';
import Card from '../Card/Card';

const Error = ({ msg }) => {
    return (
        <section className={styles.errorContainer}>
            <Card className={styles.errorCard}>
                <h1 className={styles.errorTitle}>{msg}</h1>
            </Card>
        </section>
    )
}

export default Error;
