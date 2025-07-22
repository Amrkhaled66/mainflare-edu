import courseImg from '@/assets/lessons/2.jpg';

const course = {
    name: 'الفصل الاول فيزياء',
    lectures: [
        { title: 'الفصل الاول فيزياء', id: 1 },
        { title: 'الفصل الثاني فيزياء', id: 2 },
        { title: 'الفصل الثالث فيزياء', id: 3 },
        { title: 'الفصل الرابع فيزياء', id: 4 },
        { title: 'الفصل الخامس فيزياء', id: 5 },
        { title: 'الفصل السادس فيزياء', id: 6 },
        { title: 'الفصل السابع فيزياء', id: 7 },
    ],
    price: 220,
    hours: 14,
    tutor: {
        name: 'محمد عبد المعبود',
        img: courseImg,
        subject: 'فيزياء',
    },
    img: courseImg,
};
export default course;
