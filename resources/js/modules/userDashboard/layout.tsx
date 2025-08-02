import Overlay from '@/shared/components/ui/Overlay';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import SideBar from './components/SideBar';
const layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const openMenu = useCallback(() => setMenuOpen(true), []);

    return (
        <div dir="rtl" className="overflow-hidden">
            <Overlay isOpen={menuOpen} onClick={closeMenu} />
            <Header onOpen={openMenu} />
            <div className="flex">
                <SideBar menuOpen={menuOpen} onClose={closeMenu} />
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default layout;
