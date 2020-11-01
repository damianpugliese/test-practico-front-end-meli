const axios = require('axios');
const { author, apiUrlBase, apiRegion } = require('../utils/utils');
const { itemsBuilder, getCategories, itemBuilder } = require('../helpers/helpers');

const searchItems = async (req, res) => {
    const { q } = req.query;

    if (!q) return res.status(404).json({ msg: 'Ingrese un criterio de búsqueda' });

    try {

        const response = await axios(`${apiUrlBase}/${apiRegion}/search?q=${q}&limit=4`);

        if (response.status !== 200) return res.status(response.status).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

        const { results, filters } = response.data;

        const items = itemsBuilder(results);

        const categories = getCategories(filters);

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

        const itemData = responseItem.data;

        const itemDescription = responseItemDescription.data;

        const item = itemBuilder(itemData, itemDescription);

        const data = {
            author,
            item
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
