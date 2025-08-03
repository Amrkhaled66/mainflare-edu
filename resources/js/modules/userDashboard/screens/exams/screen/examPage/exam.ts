interface Question {
    id: string;
    type: 'text' | 'select';
    question: string;
    options?: string[];
}

interface Exam {
    id: string;
    examTitle: string;
    questions: Question[];
    timeLeft: number;
}


const exam: Exam = {
    id: 'PHY-2023-001',
    examTitle: 'امتحان الفيزياء - الثانوية العامة',
    timeLeft: 1800,
    questions: [
        {
            id: '1',
            type: 'select',
            question: 'إذا تحرك جسم بسرعة ثابتة فإن:',
            options: ['القوة المحصلة المؤثرة عليه تساوي صفراً', 'لا تؤثر عليه أي قوة', 'يتحرك بتسارع ثابت', 'تزداد سرعته مع الزمن'],
        },
        {
            id: '2',
            type: 'text',
            question: 'عرف كمية التحرك الخطي لأي جسم؟',
        },
        {
            id: '3',
            type: 'select',
            question: 'وحدة قياس الشغل في النظام الدولي هي:',
            options: ['الجول', 'النيوتن', 'الواط', 'الكيلوجرام'],
        },
        {
            id: '4',
            type: 'text',
            question: 'ما هي العوامل التي يعتمد عليها الضغط في السوائل؟',
        },
        {
            id: '5',
            type: 'select',
            question: 'عندما تزداد مساحة السطح المؤثر عليه القوة فإن الضغط:',
            options: ['يقل', 'يزداد', 'يبقى ثابتاً', 'يتناسب طردياً مع القوة'],
        },
    ],
};
export default exam;
