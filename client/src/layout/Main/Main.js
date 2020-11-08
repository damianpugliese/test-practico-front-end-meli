import React from 'react';
import styles from '../Main/Main.scss';

const Main = ({ children }) => {

    return (
        <main className={styles.mainContainer}>
            {children}
        </main>
    )
}

export default Main;