const axios = require('axios');
const { cache } = require('../cache/cacheConfig');
const { API_MELI_URL_BASE } = require('../config/config');

const getCategoriesFromFilters = filters => {
    
    if (filters.length) { 
        return filters
            .filter(filter => filter.id === 'category')[0].values[0].path_from_root
            .map(value => value.name);
    } else {
        return [];
    }
    
}

const getCurrencies = async () => {

    let currencies;

    const currenciesCache = cache.get('currencies');

    if (!currenciesCache) {

        const currenciesResponse = await axios(`${API_MELI_URL_BASE}/currencies`);

        if (currenciesResponse.status !== 200) return res.status(currenciesResponse.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        currencies = currenciesResponse.data;

        cache.set('currencies', currencies);

    } else {

        currencies = currenciesCache;

    }

    return currencies;

}

module.exports = {
    getCategoriesFromFilters,
    getCurrencies
}