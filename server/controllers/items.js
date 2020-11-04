const axios = require('axios');
const { author, apiUrlBase, apiRegion } = require('../utils/utils');
const { getCategoriesFromFilters, getCurrencies, itemBuilder } = require('../helpers/helpers');

const searchItems = async (req, res) => {
    const { q } = req.query;

    if (!q) return res.status(404).json({ msg: 'Ingrese un criterio de búsqueda' });

    try {

        const searchResponse = await axios(`${apiUrlBase}/${apiRegion}/search?q=${q}&limit=4`);

        if (searchResponse.status !== 200) return res.status(searchResponse.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        const { results, filters } = searchResponse.data;

        const currencies = await getCurrencies();

        const items = results.map(item => itemBuilder(item, currencies));

        const categories = getCategoriesFromFilters(filters);

        const data = {
            author,
            categories,
            items
        }

        res.status(200).send(data);

    } catch (err) {
        res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
    }
}

const getItemDetail = async (req, res) => {
    const { id } = req.params;

    try {

        const responseItem = await axios(`${apiUrlBase}/items/${id}`);

        if (responseItem.status !== 200) return res.status(responseItem.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        const responseItemDescription = await axios(`${apiUrlBase}/items/${id}/description`);

        if (responseItemDescription.status !== 200) return res.status(responseItemDescription.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        const currenciesResponse = await axios(`${apiUrlBase}/currencies`);

        if (currenciesResponse.status !== 200) return res.status(currenciesResponse.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        const itemData = responseItem.data;
        
        const itemDescription = responseItemDescription.data;
        
        const currencies = currenciesResponse.data;

        const item = itemBuilder(itemData, currencies);

        item.sold_quantity = itemData.sold_quantity;
        item.description = itemDescription.plain_text;

        const categoriesResponse = await axios(`${apiUrlBase}/categories/${itemData.category_id}`);

        const categories = categoriesResponse.data.path_from_root;

        const data = {
            author,
            item,
            categories
        }

        res.status(200).send(data);

    } catch (err) {
        res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
    }
}

module.exports = {
    searchItems,
    getItemDetail
}
