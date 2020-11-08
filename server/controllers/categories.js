const axios = require('axios');
const { API_MELI_URL_BASE } = require('../config/config');

const getItemCategories = async (req, res) => {

    const { id } = req.params;

    if (!id) return res.status(404).json({ msg: 'Ingresá un criterio de búsqueda' });

    try {

        const categoriesResponse = await axios(`${API_MELI_URL_BASE}/categories/${id}`);

        const categories = categoriesResponse.data.path_from_root.map(category => category.name);

        const data = {
            categories        
        }

        res.status(200).send(data);

    } catch (err) {

        res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });

    }

}

module.exports = {
    getItemCategories
}