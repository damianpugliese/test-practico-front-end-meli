import React from 'react';
import styles from './Error.scss';

const Error = ({ msg }) => {
    return (
        <div className={styles.errorContainer}>
            <h3 className={styles.errorMessage}>
                {msg}
            </h3>
        </div>
    )
}

export default Error;
