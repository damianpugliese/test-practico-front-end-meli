import React, { Fragment } from 'react';
import ChevronRightIcon from '../ChevronRightIcon/ChevronRightIcon';
import styles from './BreadCrumb.scss';


const BreadCrumb = ({ categories }) => {

    return (
        <ul className={`${styles.breadCrumList} ${categories && categories.length === 0 ? styles.marginTop : ''}`}>
            {categories && categories.map((category, i, arr) => {
                const currentCategory = i === arr.length - 1;
                return (
                    <Fragment key={category}>
                        <li className={`${styles.breadCrumItem} ${currentCategory ? styles.current : ''}`}>
                            {category}
                        </li>
                        {!currentCategory && <ChevronRightIcon className={styles.chevronRightIcon} />}
                    </Fragment>
                )
            })}
        </ul>
    )
}

export default BreadCrumb;
