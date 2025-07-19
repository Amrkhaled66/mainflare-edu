import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import paths from './paths';

import Layout from '@/layout';
import { FilterCourses, HomePage } from '@/modules';
import { createCrumb } from '@/shared/utils/createCrumb';

const router = createBrowserRouter([
    {
        path: paths.home.path,
        element: <Layout />,
        handle: {
            crumb: createCrumb('الصفحة الرئيسية', paths.home.path),
        },
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: paths.filterCourses.path,
                element: <FilterCourses />,
                handle: {
                    crumb: createCrumb('الكورسات', paths.filterCourses.path),
                },
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;

{
    /*
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
  <Route path={paths.checkout} element={<CheckoutPage />} /> */
}
