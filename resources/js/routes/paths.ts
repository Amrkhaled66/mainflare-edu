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
};

export default paths;
