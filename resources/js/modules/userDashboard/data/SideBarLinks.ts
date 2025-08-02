import paths from '@/routes/paths';

const SideBarLinks = [
    {
        name: paths.userDashboard.analytics.crumb,
        path: paths.userDashboard.analytics.path,
        icon: 'uil:analytics',
    },
    {
        name: paths.userDashboard.subjects.crumb,
        path: paths.userDashboard.subjects.path,
        icon: 'fluent:book-24-regular',
    },
    {
        name: paths.userDashboard.myCourses.crumb,
        path: paths.userDashboard.myCourses.path,
        icon: 'ph:student',
    },
    {
        name: paths.userDashboard.invoices.crumb,
        path: paths.userDashboard.invoices.path,
        icon: 'solar:bill-list-linear',
    },
    {
        name: paths.userDashboard.quizzes.crumb,
        path: paths.userDashboard.quizzes.path,
        icon: 'mdi:clipboard-text-outline',
    },
    {
        name: paths.userDashboard.settings.crumb,
        path: paths.userDashboard.settings.path,
        icon: 'lucide:settings',
    },
];

export default SideBarLinks;
