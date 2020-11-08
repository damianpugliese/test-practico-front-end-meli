import React from 'react';
import Main from '../../layout/Main/Main';
import styles from '../../styles/main.scss';
import {
    Switch,
    Route
} from "react-router-dom";
import Header from '../../layout/Header/Header';
import SearchBox from '../../views/SearchBox/SearchBox';
import SearchResults from '../../views/SearchResults/SearchResults';
import ProductDetail from '../../views/ProductDetail/ProductDetail';

const App = () => {

    return (
        <div className={styles.App}>
            <Header />
            <Main>
                <Switch>
                    <Route exact path='/' component={SearchBox} />
                    <Route exact path='/items/:id' component={ProductDetail} />
                    <Route exact path='/items' component={SearchResults} />
                </Switch>
            </Main>
        </div>
    )
}

export default App;
