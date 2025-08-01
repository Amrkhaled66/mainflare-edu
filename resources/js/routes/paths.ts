const paths = {
    home: {
        path: '/',
        crumb: 'الصفحة الرئيسية',
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

    cart: {
        path: '/cart',
        crumb: 'السلة',
    },

    login: {
        path: `/auth/signin`,
        crumb: 'تسجيل الدخول',
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
        subjects: {
            path: '/user-dashboard/subjects',
            crumb: 'المواد',
        },
        myCourses: {
            path: '/user-dashboard/my-courses',
            crumb: 'كورساتي',
        },
        invoices: {
            path: '/user-dashboard/invoices',
            crumb: 'الفواتير',
        },
        quizzes: {
            path: '/user-dashboard/quizzes',
            crumb: 'الاختبارات',
        },
        settings: {
            path: '/user-dashboard/settings',
            crumb: 'الإعدادات',
        },
    },
};

export default paths;
