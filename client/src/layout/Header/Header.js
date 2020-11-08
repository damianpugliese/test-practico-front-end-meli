import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from '../Header/Header.scss';
import logo from '../../assets/images/Logo_ML@2x.png.png';
import buttonImage from '../../assets/images/ic_Search@2x.png.png';
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
                    <img src={logo} alt='logo' className={styles.logo}/>
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
                        <img src={buttonImage} alt='Buscar' className={styles.buttonImage} />
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Header;
