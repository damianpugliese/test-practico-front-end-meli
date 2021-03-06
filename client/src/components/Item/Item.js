import React from 'react';
import styles from './Item.scss';
import { Link } from 'react-router-dom';
import freeShippingImage from '../../assets/images/ic_shipping@2x.png.png'
import freeShippingImageMobile from '../../assets/images/ic_shipping.png'

const Item = ({ item, last, categories }) => {
    return (
        <li className={`${styles.itemList} ${!last ? styles.borderBottom : ''}`}>
            <div className={styles.itemImageContainer}>
                <Link to={{
                    pathname: `/items/${item.id}`,
                    state: {
                        categories
                    }
                }}>
                    <img src={item.picture} alt='imagen-del-producto' className={styles.itemImage} />
                </Link>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.priceAndTitleContainer}>
                    <div className={styles.priceContainer}>
                        <span className={styles.priceCurrency}>
                            {item.price.currency}
                        </span>
                        <span className={styles.priceAmount}>
                            {Math.ceil(item.price.amount).toLocaleString()}
                        </span>
                        <div>
                            {item.free_shipping &&
                                <picture className={styles.freeShippingImageContainer}>
                                    <source media="(max-width: 768px)" srcset={freeShippingImageMobile} className={styles.freeShippingImageMobile} />
                                    <source media="(min-width: 769px)" srcset={freeShippingImage} className={styles.freeShippingImage} />
                                    <img src={freeShippingImage} size='max' alt='envio-gratis' className={styles.freeShippingImage} />
                                </picture>
                            }
                        </div>
                    </div>
                    <div className={styles.titleContainer}>
                        <p className={styles.itemTitle}>
                            {item.title}
                        </p>
                    </div>
                </div>
                <div className={styles.addressContainer}>
                    <span className={styles.itemAddress}>
                        {item.address}
                    </span>
                </div>
            </div>
        </li>
    )
}

export default Item;
