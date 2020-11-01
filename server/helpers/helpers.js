const itemsBuilder = results => results.map(item => (
    {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: parseInt(item.price.toString().split('.')[1])
        },
        picture: item.thumbnail,
        condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: item.shipping.free_shipping,
        address: item.address.state_name
    }
));

const itemBuilder = (item, itemDescription) => (
    {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 2
        },
        picture: item.pictures.length && item.pictures[0].secure_url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: itemDescription.plain_text
    }
);

const getCategories = filters => {

    if (filters.length) {
        return filters
            .filter(filter => filter.id === 'category')[0].values[0].path_from_root
            .map(value => value.name);
    } else {
        return []
    }

}

module.exports = {
    itemsBuilder,
    itemBuilder,
    getCategories
}