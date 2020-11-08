import React from 'react';
import Card from '../../components/Card/Card';
import styles from './SearchBox.scss';

const SearchBox = () => {
    return (
        <section className={styles.searchBoxContainer}>
            <Card className={styles.searchBoxCard}>
                <h1 className={styles.searchBoxTitle}>Ingresá tu búsqueda</h1>
            </Card>
        </section>
    )
}

export default SearchBox;
