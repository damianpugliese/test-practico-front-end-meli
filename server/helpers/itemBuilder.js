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

const getPicture = item => item.pictures && item.pictures.length
    ? item.pictures[0].secure_url
    : item.thumbnail.replace(/-I\./, "-X.");
    
module.exports = {
    itemBuilder
}