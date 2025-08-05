import img from '@/assets/book.png';

const cart = {
    items: [
        {
            id: 1,
            name: 'الفصل الاول فيياء',
            price: 9.99,
            img: img,
            quantity: 1,
            grade:"الصف الثالث الثانوي",
        },
        {
            id: 2,
            name: 'الفصل الثاني فيزياء',
            price: 12.99,
            img: img,
            quantity: 2,
            grade:"الصف الثالث الثانوي",

        },
    ],
    total: 22.98,
};

export default cart;