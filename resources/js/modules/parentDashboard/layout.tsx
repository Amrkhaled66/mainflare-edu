import Overlay from '@/shared/components/ui/Overlay';
import usePageTitle from '@/shared/hooks/usePageTitle';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import SideBar from './components/SideBar';
const layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const openMenu = useCallback(() => setMenuOpen(true), []);

    usePageTitle();
    return (
        <div dir="rtl" className="overflow-hidden">
            <Overlay isOpen={menuOpen} onClick={closeMenu} />
            <Header onOpen={openMenu} />
            <div className="mt-[90px] flex">
                <SideBar menuOpen={menuOpen} onClose={closeMenu} />
                <div className="w-2/3 flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default layout;
