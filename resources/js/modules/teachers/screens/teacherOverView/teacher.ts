import img1 from '@/assets/lessons/1.png';

const teacher = {
    id: '5',
    name: 'محمد عبد المعبود',
    subject: {
        name: 'فيزياء',
        id: 1,
    },
    biography: 'مدرس ثانوية عامة لاكثر من 20 عام ',
    image: img1,
    grades: [
        {
            name: 'أولي ثانوي',
            id: 1,
        },
        {
            name: 'ثاني ثانوي',
            id: 2,
        },
        {
            name: 'ثالث ثانوي',
            id: 3,
        },
    ],
    books: [
        {
            name: 'الفصل الأولي الفيزياء الكهربية',
            id: 1,
            grade: {
                name: 'ثانوي',
                id: 3,
            },
        },
    ],
    courses: [
        {
            name: 'الفصل الأولي الفيزياء الكهربية',
            id: 1,
            grade: {
                name: 'ثانوي',
                id: 3,
            },
        },
    ],
};

export default teacher;
