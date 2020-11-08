import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductDetail.scss';
import { useParams, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import NotFound from '../../components/NotFound/NotFound';
import Error from '../../components/Error/Error';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { API_URL } from '../../config/config';

const ProductDetail = () => {

    const { id } = useParams();
    const location = useLocation();

    const categories = location.state && location.state.categories;

    const [loading, setLoading] = useState(null);
    const [results, setResults] = useState({
        item: {},
        categories: [],
        error: null
    });

    useEffect(() => {
        setLoading(true);
        axios(`${API_URL}/api/items/${id}`)
            .then(searchResponse => {
                const { item } = searchResponse.data;
                setResults(prevState => ({
                    ...prevState,
                    item,
                    error: null
                }));
                if (!categories || categories && categories.length === 0) {
                    const categoryId = item.category_id;
                    axios(`${API_URL}/api/categories/${categoryId}`)
                        .then(categoriesResponse => {
                            const { categories } = categoriesResponse.data;
                            setResults(prevState => ({
                                ...prevState,
                                categories,
                                error: null
                            }));
                            setLoading(false);
                        })
                        .catch(error => {
                            setResults(prevState => ({
                                ...prevState,
                                error: error.response.data
                            }));
                            setLoading(false);
                        });
                } else {
                    setResults(prevState => ({
                        ...prevState,
                        categories,
                        error: null
                    }));
                }
                setLoading(false);
            })
            .catch(error => {
                setResults(prevState => ({
                    ...prevState,
                    error: error.response.data
                }));
                setLoading(false);
            });
    }, []);

    return (
        <section className={styles.productDetailContainer}>
            <BreadCrumb categories={results.categories} />
            {results.error && Object.entries(results.error).length > 0 ?
                <Error msg={results.error.msg} />
                :
                <Card className={styles.productDetailCard}>
                    {loading ?
                        <Spinner />
                        :
                        results.item.length === 0 ?
                            <NotFound />
                            :
                            results.item && Object.entries(results.item).length > 0 && <ItemDetail item={results.item} />
                    }
                </Card>
            }
        </section>
    )
}

export default ProductDetail;
