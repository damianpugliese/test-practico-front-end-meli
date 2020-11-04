const axios = require('axios');
const { cache } = require('../cache/cacheConfig');
const { apiUrlBase } = require('../utils/utils');

const getCategoriesFromFilters = filters => {

    if (filters.length) return filters
        .filter(filter => filter.id === 'category')[0].values[0].path_from_root
        .map(value => value.name);

}

const getCurrencies = async () => {

    let currencies;

    const currenciesCache = cache.get('currencies');

    if (!currenciesCache) {

        const currenciesResponse = await axios(`${apiUrlBase}/currencies`);

        if (currenciesResponse.status !== 200) return res.status(currenciesResponse.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        currencies = currenciesResponse.data;

        cache.set('currencies', currencies);

    } else {

        currencies = currenciesCache;

    }

    return currencies;

}

const getPicture = item => item.pictures && item.pictures.length
    ? item.pictures[0].secure_url
    : item.picture || item.thumbnail

const itemBuilder = (item, currencies) => {

    const currency = currencies.filter(curr => curr.id === item.currency_id)[0];

    const buildedItem = {
        id: item.id,
        title: item.title,
        price: {
            currency: currency.symbol,
            amount: item.price,
            decimals: currency.decimal_places
        },
        picture: getPicture(item),
        condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: item.shipping.free_shipping,
    }

    if (item.address) buildedItem.address = item.address.state_name;

    return buildedItem;

};

module.exports = {
    itemBuilder,
    getCategoriesFromFilters,
    getCurrencies,
    getPicture
}