const paths = {
    home: {
        path: '/',
        crumb: 'الرئيسية',
    },
    courses: {
        path: '/courses',
        crumb: 'الكورسات',
    },
    courseOverview: {
        path: (courseId: string = ':courseId') => `/courses/${courseId}/overview`,
        crumb: 'تفاصيل الكورس',
    },
    coursePage: {
        path: (courseId: string = ':courseId') => `/courses/${courseId}`,
        crumb: (courseId?: string) => `كورس ${courseId ?? ':courseId'}`,
    },
    courseCheckout: {
        path: (courseId: string = ':courseId') => `/courses/${courseId}/checkout`,
        crumb: `الاشتراك بالكورس`,
    },
    subjects: {
        path: '/subjects',
        crumb: 'المواد الدراسية',
    },
    teachers: {
        path: '/teachers',
        crumb: 'المدرسين',
    },
    teacher: {
        path: (id: string = ':id') => `/teachers/${id}`,
        crumb: (id?: string) => `المدرس ${id ?? ':id'}`,
    },
    teacherBooks: {
        path: (id: string = ':id') => `/teachers/${id}/books`,
        crumb: 'الكتب',
    },
    teacherCourses: {
        path: (id: string = ':id') => `/teachers/${id}/Courses`,
        crumb: 'المحاضرات',
    },
    teacherExams: {
        path: (id: string = ':id') => `/teachers/${id}/exams`,
        crumb: 'الاختبارات',
    },

    cart: {
        path: '/cart',
        crumb: 'السلة',
    },

    login: {
        path: `/auth/signin`,
        crumb: 'تسجيل الدخول',
    },
    parentLogin: {
        path: `/auth/parent-signin`,
        crumb: 'لوحة ولي الامر - تسجيل الدخول',
    },
    signup: {
        path: '/auth/signup',
        crumb: 'إنشاء حساب',
    },
    forgetPassword: {
        path: '/auth/forget-password',
        crumb: 'نسيت كلمة المرور',
    },
    checkOtp: {
        path: '/auth/forget-password/check-otp',
        crumb: 'التحقق من OTP',
    },
    resetPassword: {
        path: '/auth/forget-password/reset-password',
        crumb: 'إعادة تعيين كلمة المرور',
    },

    contactUs: {
        path: '/contact-us',
        crumb: 'تواصل معنا',
    },

    userDashboard: {
        dashboard: {
            path: '/user-dashboard',
            crumb: 'لوحة المستخدم',
        },
        analytics: {
            path: '/user-dashboard/analytics',
            crumb: 'الإحصائيات',
        },
        myCourses: {
            path: '/user-dashboard/my-courses',
            crumb: 'كورساتي',
        },
        myFiles: {
            path: '/user-dashboard/my-files',
            crumb: 'ملفاتي',
        },
        invoices: {
            path: '/user-dashboard/invoices',
            crumb: 'الفواتير',
        },
        exams: {
            path: '/user-dashboard/exams',
            crumb: 'الاختبارات',
        },

        examPage: {
            path: (id: string = ':id') => `/user-dashboard/exams/${id}`,
        },
        examResult: {
            path: (id: string = ':id') => `/user-dashboard/exams/${id}/result`,
        },
        settings: {
            path: '/user-dashboard/settings',
            crumb: 'الإعدادات',
        },
    },

    parentDashboard: {
        dashboard: {
            path: '/parent-dashboard',
            crumb: 'لوحة ولي الامر',
        },
        analytics: {
            path: '/parent-dashboard/analytics',
            crumb: ' الاحصائيات',
        },
        courses: {
            path: '/parent-dashboard/courses',
            crumb: 'الكورسات',
        },
        exams: {
            path: '/parent-dashboard/exams',
            crumb: 'الامتحانات',
        },
        invoices: {
            path: '/parent-dashboard/invoices',
            crumb: 'الفواتير',
        },
    },
    booksList: {
        path: '/books',
        crumb: ' الكتب',
    },
    bookPage: {
        path: (id: string = ':id') => `/books/${id}`,
        crumb: 'كتاب الفصل الاول فيزياء',
    },
};

export default paths;
