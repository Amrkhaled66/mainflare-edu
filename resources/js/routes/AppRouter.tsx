import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import paths from './paths';

import Layout from '@/layout';
import {
    AnalyticsScreen,
    AuthLayout,
    BookListScreen,
    BookPageScreen,
    CartScreen,
    CheckoutScreen,
    ContactUsScreen,
    CourseOverviewScreen,
    CoursePageScreen,
    CoursesList,
    ExamPage,
    ExamResult,
    ExamsScreen,
    HomePage,
    MyCoursesScreen,
    MyFilesScreen,
    MyInvoicesScreen,
    ParentAnalyticsScreen,
    ParentCoursesScreen,
    ParentDashboardLayout,
    ParentExamsScreen,
    ParentInvoicesScreen,
    ParentSigninPage,
    RequestOtpScreen,
    ResetPasswordScreen,
    SettingsScreen,
    SignIn,
    SignUp,
    SubjectsScreen,
    SubmitOtpScreen,
    Teacher,
    TeacherBooks,
    TeacherCourses,
    TeacherExams,
    TeacherPageLayout,
    TeachersListScreen,
    UserDashboardLayout,
} from '@/modules';
import { createCrumb } from '@/shared/utils/createCrumb';
import { Link, Navigate } from 'react-router-dom';
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
                    {
                        path: paths.courseCheckout.path(),
                        element: <CheckoutScreen />,
                        handle: {
                            crumb: createCrumb(paths.courseCheckout.crumb, paths.courseCheckout.path()),
                        },
                    },
                ],
            },
            {
                path: paths.teachers.path,
                handle: {
                    crumb: createCrumb(paths.teachers.crumb, paths.teachers.path),
                },
                children: [
                    {
                        index: true,
                        element: <TeachersListScreen />,
                    },
                    {
                        element: <TeacherPageLayout />,
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
                            element: <Teacher />,
                        },
                        children: [
                            {
                                path: paths.teacher.path(),
                                element: <Teacher />,
                                index: true,
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
                            {
                                path: paths.teacherExams.path(),
                                element: <TeacherExams />,
                                handle: { crumb: createCrumb(paths.teacherExams.crumb, paths.teacherExams.path()) },
                            },
                        ],
                    },
                ],
            },
            {
                path: paths.subjects.path,
                element: <SubjectsScreen />,
                handle: {
                    crumb: createCrumb(paths.subjects.crumb, paths.subjects.path),
                },
            },
            {
                path: paths.cart.path,
                element: <CartScreen />,
                handle: {
                    crumb: createCrumb(paths.cart.crumb, paths.cart.path),
                },
            },
            {
                path: paths.contactUs.path,
                element: <ContactUsScreen />,
                handle: {
                    crumb: createCrumb(paths.contactUs.crumb, paths.contactUs.path),
                },
            },
            {
                path: paths.booksList.path,
                element: <BookListScreen />,
                handle: {
                    crumb: createCrumb(paths.booksList.crumb, paths.booksList.path),
                },
            },
            {
                path: paths.bookPage.path(),
                element: <BookPageScreen />,
                handle: {
                    crumb: createCrumb(paths.bookPage.crumb, paths.bookPage.path()),
                },
            },
        ],
    },
    // Auth
    {
        path: '/auth',
        element: <AuthLayout />,

        children: [
            {
                index: true,
                element: <Navigate to={paths.login.path} replace />,
            },
            {
                path: paths.login.path,
                element: <SignIn />,
            },
            {
                path: paths.signup.path,
                element: <SignUp />,
            },
            {
                path: paths.forgetPassword.path,
                element: <RequestOtpScreen />,
            },
            {
                path: paths.checkOtp.path,
                element: <SubmitOtpScreen />,
            },
            {
                path: paths.resetPassword.path,
                element: <ResetPasswordScreen />,
            },
            {
                path: paths.parentLogin.path,
                element: <ParentSigninPage />,
            },
        ],
    },
    // User Dashboard
    {
        path: paths.userDashboard.dashboard.path,
        element: <UserDashboardLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={paths.userDashboard.analytics.path} replace />,
            },
            {
                path: paths.userDashboard.analytics.path,
                element: <AnalyticsScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.analytics.crumb, paths.userDashboard.analytics.path),
                },
            },
            {
                path: paths.userDashboard.myCourses.path,
                element: <MyCoursesScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.myCourses.crumb, paths.userDashboard.myCourses.path),
                },
            },
            {
                path: paths.userDashboard.myFiles.path,
                element: <MyFilesScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.myFiles.crumb, paths.userDashboard.myFiles.path),
                },
            },
            {
                path: paths.userDashboard.invoices.path,
                element: <MyInvoicesScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.invoices.crumb, paths.userDashboard.invoices.path),
                },
            },
            {
                path: paths.userDashboard.exams.path,
                element: <ExamsScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.exams.crumb, paths.userDashboard.exams.path),
                },
            },
            {
                path: paths.userDashboard.examPage.path(),
                element: <ExamPage />,
            },
            {
                path: paths.userDashboard.examResult.path(),
                element: <ExamResult />,
            },
            {
                path: paths.userDashboard.settings.path,
                element: <SettingsScreen />,
                handle: {
                    crumb: createCrumb(paths.userDashboard.settings.crumb, paths.userDashboard.settings.path),
                },
            },
        ],
    },
    // Parent Dashboard
    {
        path: paths.parentDashboard.dashboard.path,
        element: <ParentDashboardLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={paths.parentDashboard.analytics.path} replace />,
            },
            {
                path: paths.parentDashboard.analytics.path,
                element: <ParentAnalyticsScreen />,
                handle: {
                    crumb: createCrumb(paths.parentDashboard.analytics.crumb, paths.parentDashboard.analytics.path),
                },
            },
            {
                path: paths.parentDashboard.courses.path,
                element: <ParentCoursesScreen />,
                handle: {
                    crumb: createCrumb(paths.parentDashboard.courses.crumb, paths.parentDashboard.courses.path),
                },
            },
            {
                path: paths.parentDashboard.exams.path,
                element: <ParentExamsScreen />,
                handle: { crumb: createCrumb(paths.parentDashboard.exams.crumb, paths.parentDashboard.exams.path) },
            },
            {
                path: paths.parentDashboard.invoices.path,
                element: <ParentInvoicesScreen />,
                handle: {
                    crumb: createCrumb(paths.parentDashboard.invoices.crumb, paths.parentDashboard.invoices.path),
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
