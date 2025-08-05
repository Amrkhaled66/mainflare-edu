import img from '@/assets/lessons/2.jpg';

const exams = [
    {
        id: 1,
        courseInfo: {
            img: img,
            name: 'الفصل الاول',
        },
        name: 'اختبار الرياضيات - الوحدة الأولى',
        questionCount: 20,
        successPercentage: 70,
        lectureName: 'المحاضرة الاولي',
        status: 'pending',
        grade: 'الصف الثالث الابتدائي',
    },
    {
        id: 2,
        courseInfo: {
            img: img,
            name: 'الفصل الاول',
        },
        name: 'اختبار العلوم - الكائنات الحية',
        questionCount: 15,
        successPercentage: 60,
        lectureName: 'المحاضرة الاولي',
        status: 'pending',        grade: 'الصف الثالث الابتدائي',

    },
    {
        id: 3,
        courseInfo: {
            img: img,
            name: 'الفصل الاول',
        },
        name: 'اختبار اللغة العربية - النحو',
        questionCount: 25,
        successPercentage: 75,
        lectureName: 'المحاضرة الاولي',
        status: 'completed',        grade: 'الصف الثالث الابتدائي',

    },
    {
        id: 4,
        courseInfo: {
            img: img,
            name: 'الفصل الاول',
        },
        name: 'اختبار التاريخ - العصور القديمة',
        questionCount: 18,
        successPercentage: 65,
        lectureName: 'المحاضرة الاولي',
        status: 'completed',        grade: 'الصف الثالث الابتدائي',

    },
];

export default exams;
