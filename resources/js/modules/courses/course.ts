import courseImg from '@/assets/lessons/2.jpg';

const course = {
    id: 1,
    name: 'الفصل الاول فيزياء',
    content: [
        {
            id: 1,
            name: 'الفصل الاول فيزياء',
            subSections: [
                {
                    id: 1,
                    type: 'video',
                    name: 'فيديو الدرس الاول',
                    createdAt: '2025-01-01',
                },
                {
                    id: 2,
                    type: 'book',
                    name: 'مزكرة الفصل الاول',
                },
                {
                    id: 3,
                    type: 'hw',
                    name: 'واجب الفصل الاول',
                },
                {
                    id: 4,
                    type: 'exam',
                    name: 'امتحان الفصل الاول',
                },
                {
                    id: 4,
                    type: 'exam',
                    name: 'امتحان الفصل الاول',
                },
            ],
        },
        {
            id: 1,
            name: 'الفصل الاول فيزياء',
            subSections: [
                {
                    id: 1,
                    type: 'video',
                    name: 'فيديو الدرس الاول',
                    createdAt: '2025-01-01',
                },
                {
                    id: 2,
                    type: 'book',
                    name: 'مزكرة الفصل الاول',
                },
                {
                    id: 3,
                    type: 'hw',
                    name: 'واجب الفصل الاول',
                },
                {
                    id: 4,
                    type: 'exam',
                    name: 'امتحان الفصل الاول',
                },
                {
                    id: 4,
                    type: 'exam',
                    name: 'امتحان الفصل الاول',
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
