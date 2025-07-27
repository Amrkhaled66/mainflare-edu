import paths from '@/routes/paths';

const navLinks = [
    {
        name: paths.home.crumb,
        path: paths.home.path,
        icon: 'line-md:home',
    },
    {
        name: paths.courses.crumb,
        path: paths.courses.path,
        icon: 'hugeicons:teacher',
    },
    {
        name: paths.subjects.crumb,
        path: paths.subjects.path,
        icon: 'icon-park-outline:play',
    },
    {
        name: paths.contactUs.crumb,
        path: paths.contactUs.path,
        icon: 'hugeicons:customer-support',
    },
    {
        name: paths.cart.crumb,
        path: paths.cart.path,
        icon: 'mdi:cart-outline',
        mob: true,
    },
    {
        name: 'الملف الشخصي', // Not in paths yet
        path: '/profile',
        icon: 'mynaui:user',
        mob: true,
    },
];

export default navLinks;
