import img from '@/assets/book.png';

const cart = {
    items: [
        {
            id: 1,
            title: 'الفصل الاول فيياء',
            price: 9.99,
            img: img,
            quantity: 1,
        },
        {
            id: 2,
            title: 'الفصل الثاني فيزياء',
            price: 12.99,
            img: img,
            quantity: 2,
        },
    ],
    total: 22.98,
};

const user = {
    // name: 'mohamed',
    // phone: '0123456789',
    // alternativePhone: '0123456789',
    // city: 'cairo',
    // area: 'cairo',
    // detailedAddress: 'cairo cairo cairo',
};

export default cart;
export { user };
