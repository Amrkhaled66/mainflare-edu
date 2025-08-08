const examData = [
    {
        examName: 'امتحان الوحدة الأولى',
        subject: 'الرياضيات',
        examCreatedDate: '2025-07-01',
        submitDate: '2025-07-02',
        status: 'تم الحل', // or 'لم يتم الحل'
        takenTime: '45 دقيقة',
        mark: 18,

        duration: 120,
        totalQuestions: 5,
        correctAnswers: 3,

        answers: [
            {
                questionId: '1',
                type: 'select',
                question: 'إذا تحرك جسم بسرعة ثابتة في خط مستقيم فإن:',
                options: ['القوة المحصلة المؤثرة عليه تساوي صفراً', 'لا تؤثر عليه أي قوة', 'يتحرك بتسارع ثابت', 'تزداد سرعته مع الزمن'],
                userAnswer: 'القوة المحصلة المؤثرة عليه تساوي صفراً',
                correctAnswer: 'القوة المحصلة المؤثرة عليه تساوي صفراً',
                isCorrect: true,
            },
            {
                questionId: '2',
                type: 'text',
                question: 'عرف كمية التحرك الخطي لأي جسم؟',
                userAnswer: 'كمية التحرك هي حاصل ضرب كتلة الجسم في سرعته',
                correctAnswer: 'كمية التحرك هي حاصل ضرب كتلة الجسم في سرعته',
                isCorrect: true,
            },
            {
                questionId: '3',
                type: 'select',
                question: 'وحدة قياس الشغل في النظام الدولي هي:',
                options: ['الجول', 'النيوتن', 'الواط', 'الكيلوجرام'],
                userAnswer: 'الواط',
                correctAnswer: 'الجول',
                isCorrect: false,
            },
            {
                questionId: '4',
                type: 'text',
                question: 'ما هي العوامل التي يعتمد عليها الضغط في السوائل؟',
                userAnswer: 'يعتمد الضغط في السوائل على العمق وكثافة السائل',
                correctAnswer: 'يعتمد الضغط في السوائل على العمق وكثافة السائل وتسارع الجاذبية الأرضية',
                isCorrect: false, // لأن الإجابة ناقصة
            },
            {
                questionId: '5',
                type: 'select',
                question: 'عندما تزداد مساحة السطح المؤثر عليه القوة فإن الضغط:',
                options: ['يقل', 'يزداد', 'يبقى ثابتاً', 'يتناسب طردياً مع القوة'],
                userAnswer: 'يقل',
                correctAnswer: 'يقل',
                isCorrect: true,
            },
        ],
    },
];

export default examData;
