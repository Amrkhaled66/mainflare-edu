import img from '@/assets/lessons/2.jpg';

const courses = [
    {
        id: 1,
        name: 'الفصل الاول فيزياء',
        price: 220,
        hours: 14,
        tutor: {
            name: 'محمد عبد المعبود',
            img: img,
            subject: 'فيزياء',
        },
        grade: {
            name: 'ابتدائي',
            id: 1,
        },
        lectures: 10,
        img: img,
    },
];

export default courses;
