import paths from '@/routes/paths';

const SideBarLinks = [
    {
        name: paths.userDashboard.analytics.crumb,
        path: paths.userDashboard.analytics.path,
        icon: 'uil:analytics',
    },
    {
        name: paths.userDashboard.myFiles.crumb,
        path: paths.userDashboard.myFiles.path,
        icon: 'mingcute:pdf-fill',
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
        name: paths.userDashboard.exams.crumb,
        path: paths.userDashboard.exams.path,
        icon: 'mdi:clipboard-text-outline',
    },
    {
        name: paths.userDashboard.settings.crumb,
        path: paths.userDashboard.settings.path,
        icon: 'lucide:settings',
    },
];

export default SideBarLinks;
