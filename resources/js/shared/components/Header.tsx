import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Overlay from './Overlay';

const navLinks = [
    { name: 'الرئيسية', path: '/', icon: 'line-md:home' },
    { name: 'المدرسين', path: '/teachers', icon: 'hugeicons:teacher' },
    { name: 'المحاضرات', path: '/lectures', icon: 'icon-park-outline:play' },
    { name: 'الملازم', path: '/books', icon: 'solar:book-outline' },
    { name: 'تواصل معنا', path: '/contact-us', icon: 'hugeicons:customer-support' },
    { name: 'عربة التسوق', path: '/cart', icon: 'mdi:cart-outline', mob: true },
    { name: 'الملف الشخصي', path: '/profile', icon: 'mynaui:user', mob: true },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isAuth = 0;
    const name = ' محمد محمد';
    const cartItemsCount = 9;

    return (
        <>
            <div className="relative z-20 bg-white drop-shadow-lg">
                <div className="container mx-auto flex items-center justify-between py-6">
                    <img src={logo} alt="on skill" />

                    <button
                        style={{ backgroundImage: 'var(--color-mainGradient)' }}
                        className="animate rounded-xl p-2 text-2xl text-white hover:drop-shadow-xl lg:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Icon icon="mdi:menu" width="28" height="28" />
                    </button>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-x-5">
                            {navLinks.map((link) => {
                                if (link.mob) return;
                                return (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `${isActive ? 'text-mainColor' : 'text-subTitle'} animate text-lg font-medium hover:text-mainColor`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <button className="animate relative rounded-full border border-stroke bg-[#F4F5F5] p-3 text-mainColor drop-shadow-sm hover:drop-shadow-xl">
                            <span className="absolute -top-1 -right-2 flex size-5 items-center justify-center rounded-full bg-mainColor text-white">
                                {cartItemsCount}
                            </span>
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                        </button>

                        <button className="animate rounded-full border border-stroke bg-[#F4F5F5] p-3 text-mainColor drop-shadow-sm hover:drop-shadow-xl">
                            <Icon icon="line-md:bell-loop" width="24" height="24" />
                        </button>

                        {!isAuth ? (
                            <>
                                <button className="btn-primary animated-background animate w-[200px] rounded-[50px]">تسجيل الدخول</button>
                                <button className="btn-outline animate w-[200px] rounded-[50px]">انشاء حساب</button>
                            </>
                        ) : (
                            <div className="mr-8 flex items-center gap-x-3">
                                <div className="space-y-2">
                                    <p>{name}</p>
                                    <Link className="text-mainColor" to="/profile">
                                        اضغط لعرض الملف الشخصي
                                    </Link>
                                </div>
                                <div className="size-14 rounded-full bg-mainColor" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Overlay onClick={() => setMenuOpen(false)} isOpen={menuOpen} />
            <div
                className={`animate fixed top-0 right-0 z-90 h-screen lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-[350px] overflow-y-auto bg-white p-6 shadow-lg`}
            >
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <div className="size-14 rounded-full bg-mainColor" />
                        <div className="space-y-2">
                            <p>{name}</p>
                            <Link className="text-mainColor" to="/profile">
                                اضغط لعرض الملف الشخصي
                            </Link>
                        </div>
                    </div>
                    <button
                        className="animate flex-center size-9 rounded-xl bg-mainColor text-white hover:drop-shadow-xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                    </button>
                </div>

                <ul className="flex flex-col gap-3 overflow-y-auto pb-3" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `${isActive ? 'bg-main-gradient text-white' : 'text-subTitle'} flex items-center gap-x-2 rounded-[20px] p-3 text-lg font-medium`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon icon={link.icon} width="24" height="24" />
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <button className="animate flex items-center gap-x-2 rounded-[20px] border border-red-500 p-3 text-red-500 hover:bg-red-500 hover:text-white">
                        <Icon icon="mynaui:logout" width="24" height="24" />
                        تسجيل الخروج
                    </button>
                </ul>
            </div>
        </>
    );
};

export default Header;
