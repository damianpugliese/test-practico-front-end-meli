import React, { useEffect } from 'react';
import styles from '../../styles/main.scss';
import image from '../../assets/images/image.jpg';
import axios from 'axios';

const App = () => {

    useEffect(() => {
        axios('http://localhost:5000/api/items?q=Apple Iphone')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.msg))

        axios('http://localhost:5000/api/items/MLA879223622')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.msg))
    })

    return (
        <div className={styles.container}>
            <h1>My React App!</h1>
            <img src={image} className={styles.image} />
        </div>
    )
}

export default App;
