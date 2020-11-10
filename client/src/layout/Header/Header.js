import React, { useState, useRef } from 'react';
import styles from '../Header/Header.scss';
import logo from '../../assets/images/Logo_ML@2x.png.png';
import logoMobile from '../../assets/images/Logo_ML.png';
import buttonImage from '../../assets/images/ic_Search@2x.png.png';
import buttonImageMobile from '../../assets/images/ic_Search.png';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    const inputRef = useRef();

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.length > 0) {
            history.push(`/items?search=${inputValue}`);
        } else {
            inputRef.current.focus();
        }
    }

    const handleChange = e => {
        const { value } = e.target;
        setInputValue(value);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/'>
                    <picture className={styles.logoContainer}>
                        <source media="(max-width: 768px)" srcSet={logoMobile} className={styles.logoMobile} />
                        <source media="(min-width: 769px)" srcSet={logo} className={styles.logo} />
                        <img src={logo} size='max' alt='logo' className={styles.logo} />
                    </picture>
                </Link>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type='text'
                        onChange={handleChange}
                        value={inputValue}
                        placeholder='Nunca dejes de buscar'
                        className={styles.input}
                        maxLength={120}
                        autoComplete='off'
                        aria-label='Ingresá lo que quieras encontrar'
                        ref={inputRef}
                    />
                    <button type='submit' className={styles.buttonSubmit} aria-label='Buscar'>
                        <picture className={styles.buttonImageContainer}>
                            <source media="(max-width: 768px)" srcSet={buttonImageMobile} className={styles.buttonImageMobile} />
                            <source media="(min-width: 769px)" srcSet={buttonImage} className={styles.buttonImage} />
                            <img src={buttonImage} size='max' alt='buscar' className={styles.buttonImage} />
                        </picture>
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Header;
