import React from 'react';
import styles from './ItemDetail.scss';

const ItemDetail = ({ item }) => {
    return (
        <div className={styles.itemDatailContainer}>
            <div className={styles.itemDetailContentLeft}>
                <img src={item.picture} alt='imagen-del-producto' className={styles.productImage} />
                <div className={styles.itemDetailDescription}>
                    <h3 className={styles.itemDetailDescriptionTitle}>
                        Descripción de producto
                    </h3>
                    <p className={styles.itemDetailDescriptionParagraph}>
                        {item.description}
                    </p>
                </div>
            </div>
            <div className={styles.itemDetailContentRight}>
                <div className={styles.itemDetailContentRightWraper}>
                    <p className={styles.conditionParagraph}>
                        <span>
                            {`${item.condition} - `}
                        </span>
                        <span>
                            {`${item.sold_quantity} vendidos`}
                        </span>
                    </p>
                    <h1 className={styles.itemDatailTitle}>
                        {item.title}
                    </h1>
                    <div className={styles.priceContainer}>
                        <span className={styles.priceCurrency}>
                            {item.price.currency}
                        </span>
                        <span className={styles.priceAmount}>
                            {Math.ceil(item.price.amount).toLocaleString()}
                        </span>
                    </div>
                    <button className={styles.buyButton}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
