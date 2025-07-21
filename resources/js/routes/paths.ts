const paths = {
    home: {
        path: '/',
        crumb: 'الصفحة الرئيسية',
    },
    filterCourses: {
        path: '/filterCourses',
        crumb: 'الكورسات',
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
    books: {
        path: '/books',
        crumb: 'الكتب',
    },
    courseOverview: {
        path: (courseId: string = ':courseId') => `/courses/${courseId}/overview`,
        crumb: () => 'نظرة عامة',
    },
    coursePage: {
        path: (courseId: string = ':courseId') => `/courses/${courseId}`,
        crumb: (courseId?: string) => `كورس ${courseId ?? ':courseId'}`,
    },
    contactUs: {
        path: '/contact-us',
        crumb: 'تواصل معنا',
    },
    login: {
        path: '/login',
        crumb: 'تسجيل الدخول',
    },
    signup: {
        path: '/signup',
        crumb: 'إنشاء حساب',
    },
    forgetPassword: {
        path: '/forget-password',
        crumb: 'نسيت كلمة المرور',
    },
    checkOtp: {
        path: '/forget-password/check-otp',
        crumb: 'التحقق من OTP',
    },
    resetPassword: {
        path: '/forget-password/reset-password',
        crumb: 'إعادة تعيين كلمة المرور',
    },
    cart: {
        path: '/cart',
        crumb: 'السلة',
    },
    checkout: {
        path: '/checkout',
        crumb: 'الدفع',
    },
};

export default paths;
