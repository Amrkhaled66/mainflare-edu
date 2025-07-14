const paths = {
  home: '/',
  teachers: '/teachers',
  teacher: (id: string = ':id') => `/teachers/${id}`,
  teacherLectures: (id: string = ':id') => `/teachers/${id}/lectures`,

  books: '/books',

  courseOverview: (courseId: string = ':courseId') => `/courses/${courseId}/overview`,
  coursePage: (courseId: string = ':courseId') => `/courses/${courseId}`,

  contactUs: '/contact-us',

  login: '/login',
  signup: '/signup',

  forgetPassword: '/forget-password',
  checkOtp: '/forget-password/check-otp',
  resetPassword: '/forget-password/reset-password',

  cart: '/cart',
  checkout: '/checkout',
};

export default paths;
