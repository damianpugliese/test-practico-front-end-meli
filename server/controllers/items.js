const axios = require('axios');
const { author } = require('../utils/utils');
const { API_MELI_URL_BASE, API_MELI_REGION } = require('../config/config');
const { getCategoriesFromFilters, getCurrencies } = require('../helpers/helpers');
const { itemBuilder } = require('../helpers/itemBuilder');

const searchItems = async (req, res) => {

    const { q } = req.query;

    if (!q) return res.status(404).json({ msg: 'Ingresá un criterio de búsqueda' });

    try {

        const searchResponse = await axios(`${API_MELI_URL_BASE}/${API_MELI_REGION}/search?q=${q}&limit=4`);

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

        if (err.response.status) {
            const { status, statusText } = err.response;
            res.status(status).json({ msg: statusText });
        } else {
            res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
        }

    }

}

const getItemDetail = async (req, res) => {

    const { id } = req.params;

    if (!id) return res.status(404).json({ msg: 'El Id es requerido' });

    try {

        const responseItem = await axios(`${API_MELI_URL_BASE}/items/${id}`);
        
       if (responseItem.data.status !== 'active') return res.status(404).json({ msg: 'No hay publicaciones que coincidan con tu búsqueda' }); 

        const responseItemDescription = await axios(`${API_MELI_URL_BASE}/items/${id}/description`);

        const currencies = await getCurrencies();

        const itemData = responseItem.data;
        
        const itemDescription = responseItemDescription.data;
       
        const item = itemBuilder(itemData, currencies);

        item.sold_quantity = itemData.sold_quantity;
        item.description = itemDescription.plain_text;
        item.category_id = itemData.category_id

        const data = {
            author,
            item        
        }

        res.status(200).send(data);

    } catch (err) {

        if (err.response.status) {
            const { status, statusText } = err.response;
            res.status(status).json({ msg: 'Parece que esta página no existe' });
        } else {
            res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
        }

    }

}

module.exports = {
    searchItems,
    getItemDetail
}
