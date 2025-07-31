import courseImg from '@/assets/lessons/2.jpg';

const course = {
    id: 1,
    name: 'الفصل الاول فيزياء',
    description: 'شرح اسايات الفيزياء الفصل الاول',
    content: [
        {
            id: 101,
            name: 'الفصل الأول - فيزياء',
            subSections: [
                {
                    id: 1001,
                    type: 'video',
                    name: 'فيديو الدرس الأول',
                    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
                    duration: 900,
                    createdAt: '2025-01-01T10:00:00Z',
                    isCompleted: false,
                },
                {
                    id: 1002,
                    type: 'book',
                    name: 'مذكرة الفصل الأول',
                    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    size: '1.2MB',
                    fileType: 'pdf',
                },
                {
                    id: 1004,
                    type: 'exam',
                    name: 'امتحان الفصل الأول',
                    examId: 'exam_001',
                    attemptsAllowed: 2,
                    status: 'not-started',
                    duration: 1800,
                },
            ],
        },
        {
            id: 102,
            name: 'الفصل الثاني - فيزياء',
            subSections: [
                {
                    id: 1005,
                    type: 'video',
                    name: 'فيديو الدرس الثاني',
                    url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                    duration: 870,
                    createdAt: '2025-01-05T10:00:00Z',
                    isCompleted: false,
                },
                {
                    id: 1006,
                    type: 'book',
                    name: 'مذكرة الفصل الثاني',
                    fileUrl: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
                    size: '2.4MB',
                    fileType: 'pdf',
                },
                {
                    id: 1007,
                    type: 'exam',
                    name: 'امتحان الفصل الثاني',
                    examId: 'exam_002',
                    attemptsAllowed: 2,
                    status: 'not-started',
                    duration: 1800,
                },
            ],
        },
    ],
    price: 220,
    hours: 14,
    tutor: {
        name: 'محمد عبد المعبود',
        img: courseImg,
        subject: 'فيزياء',
    },
    subject: {
        name: 'فيزياء',
        id: 1,
    },
    grade: {
        name: 'الصف الثاني الثانوي',
        id: 2,
    },
    img: courseImg,
    statics: {
        videos: 5,
        files: 3,
        homeWork: 2,
        exams: 3,
    },
    about: 'فى الكورس ده هنتعلم كل أساسيات الكيمياء اللى هتحتجها فى منهج 3 ثانوى بشعوذات و طريقه مستر عبدالجواد المميزه ❤️ الجزء الأول - التوزيع الإلكترونى و خواص الجدول الدورى 📆 الجزء الثانـى - الأكسده و الإختزال 🧪 الجزء الثالث - المعادلة الكيميائية 🤪 الجزء الرابع - المول و الحساب الكيميائى 🍉',
    createdAt: '2025-01-01',
    updatedAt: '2025-03-01',
};
export default course;
