const priceFormatter = (price: number) => new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP' }).format(price);
export default priceFormatter;
