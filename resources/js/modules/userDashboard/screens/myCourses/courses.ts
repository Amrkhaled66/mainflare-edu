import img from '@/assets/lessons/2.jpg';

const course = {
    courseId: '4522220',
    courseInfo: {
        name: 'كورس الأساسيات ',
        img: img,
        videosCount: 24,
        filesCount: 10,
        hwCount: 6,
        examsCount: 3,
    },
    myProgress: 72,
    paidData: {
        paymentDate: '2025-07-15',
        paymentMethod: 'Visa',
    },
};
const course2 = {
    courseId: '4522220',
    courseInfo: {
        name: 'كورس الفصل الاول ',
        img: img,
        videosCount: 24,
        filesCount: 10,
        hwCount: 6,
        examsCount: 3,
    },
    myProgress: 72,
    paidData: {
        paymentDate: '2025-07-15',
        paymentMethod: 'Visa',
    },
};

const courses = [course, course2, course, course, course, course];

export default courses;
