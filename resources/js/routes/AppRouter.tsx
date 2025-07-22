import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import paths from './paths';

import Layout from '@/layout';
import { CourseOverviewScreen, CoursePageScreen, CoursesList, HomePage, Teacher, TeacherBooks, TeacherCourses } from '@/modules';
import { createCrumb } from '@/shared/utils/createCrumb';
import { Link } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: paths.home.path,
        element: <Layout />,
        handle: {
            crumb: createCrumb(paths.home.crumb, paths.home.path),
        },
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: paths.courses.path,
                handle: {
                    crumb: createCrumb(paths.courses.crumb, paths.courses.path),
                },
                children: [
                    {
                        index: true,
                        element: <CoursesList />,
                    },
                    {
                        path: paths.courseOverview.path(),
                        element: <CourseOverviewScreen />,
                        handle: {
                            crumb: createCrumb(paths.courseOverview.crumb, paths.courseOverview.path()),
                        },
                    },
                    {
                        path: paths.coursePage.path(),
                        element: <CoursePageScreen />,
                        handle: {
                            crumb: ({ params }: { params: { courseId: string } }) => {
                                // const cachedCourse = queryClient.getQueryData(['course', params.courseId]);
                                // return cachedCourse?.title || '...';
                                return '...';
                            },
                        },
                    },
                ],
            },
            {
                path: paths.teacher.path(),
                loader: async ({ params }) => {
                    // const res = await fetch(`/api/teachers/${id}`);
                    // const teacher = await res.json();
                    // return { teacher };
                },
                handle: {
                    crumb: (match: any) => {
                        const name = 'محمد عبد المعبود';
                        // const name = match.data?.teacher?.name ?? match.params.id;
                        return <Link to={`/teachers/${match.params.id}`}>{`مستر ${name}`}</Link>;
                    },
                },
                children: [
                    {
                        index: true,
                        element: <Teacher />,
                    },
                    {
                        path: paths.teacherCourses.path(),
                        element: <TeacherCourses />,
                        handle: { crumb: createCrumb(paths.teacherCourses.crumb, paths.teacherCourses.path()) },
                    },
                    {
                        path: paths.teacherBooks.path(),
                        element: <TeacherBooks />,
                        handle: { crumb: createCrumb(paths.teacherBooks.crumb, paths.teacherBooks.path()) },
                    },
                ],
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
