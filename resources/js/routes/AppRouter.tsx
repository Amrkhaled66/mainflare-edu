import { BrowserRouter, Route, Routes } from 'react-router-dom';
import paths from './paths';

import Layout from '@/layout';
import { HomePage } from '@/modules';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                {/* <Route path={paths.teachers} element={<TeachersPage />} />
  <Route path={paths.teacher()} element={<TeacherPage />} />
  <Route path={paths.teacherLectures()} element={<TeacherLecturesPage />} />
  <Route path={paths.books} element={<BooksPage />} />
  <Route path={paths.courseOverview()} element={<CourseOverviewPage />} />
  <Route path={paths.coursePage()} element={<CoursePage />} />
  <Route path={paths.contactUs} element={<ContactPage />} />
  <Route path={paths.login} element={<LoginPage />} />
  <Route path={paths.signup} element={<SignupPage />} />
  <Route path={paths.forgetPassword} element={<ForgetPasswordPage />} />
  <Route path={paths.checkOtp} element={<CheckOtpPage />} />
  <Route path={paths.resetPassword} element={<ResetPasswordPage />} />
  <Route path={paths.cart} element={<CartPage />} />
  <Route path={paths.checkout} element={<CheckoutPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
