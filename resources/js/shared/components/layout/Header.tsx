import logo from '@/assets/logo.svg';
import paths from '@/routes/paths';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CloseButton from '../ui/CloseButton';
import Overlay from '../ui/Overlay';

import navLinks from '../../data/navLinks';

import { useNavBarToggleBtns } from '@/shared/context/NavBarToogleBtnsCtx';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isAuth = 0;
    const name = ' محمد محمد';
    const cartItemsCount = 9;
    const { toggleCart } = useNavBarToggleBtns();

    return (
        <>
            <div className="fixed inset-0 z-20 h-fit w-full bg-white drop-shadow-lg">
                <div className="container mx-auto flex items-center justify-between py-6">
                    <Link to="/">
                        <img src={logo} alt="on skill" />
                    </Link>

                    <div className="flex-center gap-x-2 xl:hidden">
                        <button
                            onClick={toggleCart}
                            className="animate relative rounded-full border border-stroke bg-[#F4F5F5] p-3 text-mainColor drop-shadow-sm hover:drop-shadow-xl"
                        >
                            <span className="absolute -top-1 -right-2 flex size-5 items-center justify-center rounded-full bg-mainColor text-white">
                                {cartItemsCount}
                            </span>
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                        </button>

                        <button
                            style={{ backgroundImage: 'var(--color-mainGradient)' }}
                            className="animate rounded-xl p-2 text-2xl text-white hover:drop-shadow-xl"
                            onClick={() => setMenuOpen(true)}
                        >
                            <Icon icon="mdi:menu" width="28" height="28" />
                        </button>
                    </div>
                    {/* desktop nav */}
                    <nav className="hidden xl:block">
                        <ul className="flex gap-x-4">
                            {navLinks.map((link) => {
                                if (link.mob) return;
                                return (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `${isActive ? 'text-mainColor' : 'text-subTitle'} animate  font-medium hover:text-mainColor`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="hidden items-center gap-3 xl:flex">
                        {/* <Link to="/cart"> */}
                        <button
                            onClick={toggleCart}
                            className="animate relative rounded-full border border-stroke bg-[#F4F5F5] p-3 text-mainColor drop-shadow-sm hover:drop-shadow-xl"
                        >
                            <span className="absolute -top-1 -right-2 flex size-5 items-center justify-center rounded-full bg-mainColor text-white">
                                {cartItemsCount}
                            </span>
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                        </button>
                        {/* </Link> */}

                        <button className="animate rounded-full border border-stroke bg-[#F4F5F5] p-3 text-mainColor drop-shadow-sm hover:drop-shadow-xl">
                            <Icon icon="line-md:bell-loop" width="24" height="24" />
                        </button>

                        {!isAuth ? (
                            <>
                                <Link to={'/auth/signin'}>
                                    <button className="btn-primary btn w-[200px]">تسجيل الدخول</button>
                                </Link>
                                <Link to="/auth/signup">
                                    <button className="btn-outline animate w-[200px]">انشاء حساب</button>
                                </Link>
                            </>
                        ) : (
                            <div className="mr-8 flex items-center gap-x-3">
                                <div className="space-y-2">
                                    <p>{name}</p>
                                    <Link className="text-mainColor hover:!underline" to={paths.userDashboard.dashboard.path}>
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
            {/* mobile menu */}
            <div
                className={`animate fixed top-0 right-0 z-90 h-screen xl:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-[350px] overflow-y-auto bg-white p-6 shadow-lg`}
            >
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <div className="size-14 rounded-full bg-mainColor" />
                        <div className="space-y-2">
                            <p>{name}</p>
                            <Link className="text-mainColor hover:!underline" to={paths.userDashboard.dashboard.path}>
                                اضغط لعرض الملف الشخصي
                            </Link>
                        </div>
                    </div>
                    <CloseButton onClick={() => setMenuOpen(false)} />
                </div>

                <ul className="flex flex-col gap-3 overflow-y-auto pb-3" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `${isActive ? 'bg-mainColor text-white' : 'text-subTitle'} flex items-center gap-x-2 rounded-[20px] p-3 text-lg font-medium`
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
