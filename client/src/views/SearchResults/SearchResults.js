import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SearchResults.scss';
import { useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Item from '../../components/Item/Item';
import NotFound from '../../components/NotFound/NotFound';
import Error from '../../components/Error/Error';
import { API_URL } from '../../config/config';

const SearchResults = () => {

    const query = new URLSearchParams(useLocation().search).get('search');

    const [loading, setLoading] = useState(null);
    const [results, setResults] = useState({
        items: [],
        categories: [],
        error: null
    });

    useEffect(() => {
        setLoading(true);
        axios(`${API_URL}/api/items?q=${query}`)
            .then(searchResponse => {
                const { items, categories } = searchResponse.data;
                setResults({
                    items,
                    categories, 
                    error: null
                });
                setLoading(false);
            })
            .catch(error => {
                setResults(prevState => ({
                    ...prevState,
                    error: error.response.data
                }));
                setLoading(false);
            });
    }, [query]);

    return (
        <section className={styles.searchResultsContainer}>
            <BreadCrumb categories={results.categories} />
            {results.error && Object.entries(results.error).length > 0 ?
                <Error msg={results.error.msg}/>
                :
                <Card className={styles.resultsCard}>
                    {loading ?
                        <Spinner />
                        :
                        results.items.length === 0 ?
                            <NotFound />
                            :
                            <ul className={styles.itemList}>
                                {results.items.map((item, i, arr) => {
                                    const last = i === arr.length - 1;
                                    return <Item key={i} item={item} last={last} categories={results.categories}/>
                                })}
                            </ul>

                    }
                </Card>
            }
        </section>
    )
}

export default SearchResults;