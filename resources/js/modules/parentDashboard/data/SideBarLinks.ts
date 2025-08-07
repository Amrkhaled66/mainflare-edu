import paths from '@/routes/paths';

const ParentSideBarLinks = [
    {
        name: paths.parentDashboard.analytics.crumb,
        path: paths.parentDashboard.analytics.path,
        icon: 'uil:analytics',
    },
    {
        name: paths.parentDashboard.courses.crumb,
        path: paths.parentDashboard.courses.path,
        icon: 'ph:student',
    },
    {
        name: paths.parentDashboard.exams.crumb,
        path: paths.parentDashboard.exams.path,
        icon: 'mdi:clipboard-text-outline',
    },
    {
        name: paths.parentDashboard.invoices.crumb,
        path: paths.parentDashboard.invoices.path,
        icon: 'solar:bill-list-linear',
    },
];

export default ParentSideBarLinks;
